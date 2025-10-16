import { X, Home, Settings, Users, FileText, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function Drawer({ isOpen, onClose, title }: DrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { icon: Home, label: 'Dashboard', badge: null },
    { icon: Users, label: 'Team', badge: '3' },
    { icon: FileText, label: 'Projects', badge: '12' },
    { icon: Settings, label: 'Settings', badge: null },
    { icon: HelpCircle, label: 'Help & Support', badge: null }
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-white/50 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-blue-200 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div className="p-6 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={onClose}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white transition-colors text-left"
              >
                <Icon className="w-5 h-5 text-slate-600" />
                <span className="flex-1 font-medium text-slate-900">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="px-2 py-1 bg-white text-blue-700 text-xs font-semibold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-200">
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-900 mb-1">
              Need help?
            </p>
            <p className="text-sm text-slate-600">
              Contact our support team for assistance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
