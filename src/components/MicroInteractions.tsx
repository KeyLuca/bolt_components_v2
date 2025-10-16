import React, { useState, useRef, useEffect } from 'react';
import { Search, Command, ArrowRight, Settings, User, FileText, HelpCircle, X } from 'lucide-react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-50 px-3 py-2 text-sm text-slate-900 bg-white rounded-lg whitespace-nowrap animate-in fade-in zoom-in-95 duration-150 ${positionClasses[position]}`}>
          {content}
          <div className={`absolute w-2 h-2 bg-white transform rotate-45 ${
            position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' :
            position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' :
            position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' :
            'left-[-4px] top-1/2 -translate-y-1/2'
          }`} />
        </div>
      )}
    </div>
  );
};

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

export const Popover: React.FC<PopoverProps> = ({ trigger, children, position = 'bottom-left' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const positionClasses = {
    'bottom-left': 'top-full left-0 mt-2',
    'bottom-right': 'top-full right-0 mt-2',
    'top-left': 'bottom-full left-0 mb-2',
    'top-right': 'bottom-full right-0 mb-2',
  };

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className={`absolute z-50 bg-white border border-blue-200 rounded-xl shadow-xl p-4 min-w-[200px] animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 ${positionClasses[position]}`}>
          {children}
        </div>
      )}
    </div>
  );
};

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    { icon: Search, label: 'Search...', shortcut: '/', category: 'General' },
    { icon: FileText, label: 'New Document', shortcut: '⌘N', category: 'Create' },
    { icon: User, label: 'View Profile', shortcut: '⌘P', category: 'Navigate' },
    { icon: Settings, label: 'Settings', shortcut: '⌘,', category: 'Navigate' },
    { icon: HelpCircle, label: 'Help & Support', shortcut: '⌘H', category: 'General' },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-[20vh] z-50 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden animate-in zoom-in slide-in-from-top-4 duration-300">
        <div className="flex items-center border-b border-neutral-200 px-4 py-3">
          <Command className="w-5 h-5 text-neutral-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-400"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-white rounded transition-colors"
          >
            <X className="w-5 h-5 text-neutral-400" />
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-neutral-500">
              No results found
            </div>
          ) : (
            <div className="space-y-1">
              {filteredCommands.map((cmd, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white transition-colors group"
                >
                  <div className="flex items-center">
                    <cmd.icon className="w-5 h-5 text-neutral-400 mr-3" />
                    <div className="text-left">
                      <div className="text-sm font-medium text-neutral-900">{cmd.label}</div>
                      <div className="text-xs text-neutral-500">{cmd.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <kbd className="px-2 py-1 text-xs font-semibold text-blue-600 bg-white border border-blue-300 rounded">
                      {cmd.shortcut}
                    </kbd>
                    <ArrowRight className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-neutral-200 px-4 py-3 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <kbd className="px-2 py-1 mr-1 font-semibold bg-white border border-blue-300 rounded">↑↓</kbd>
              Navigate
            </span>
            <span className="flex items-center">
              <kbd className="px-2 py-1 mr-1 font-semibold bg-white border border-blue-300 rounded">↵</kbd>
              Select
            </span>
          </div>
          <span className="flex items-center">
            <kbd className="px-2 py-1 mr-1 font-semibold bg-white border border-blue-300 rounded">ESC</kbd>
            Close
          </span>
        </div>
      </div>
    </div>
  );
};

export const useCommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false), toggle: () => setIsOpen(prev => !prev) };
};
