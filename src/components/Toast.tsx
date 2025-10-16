import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-[slideInRight_0.3s_ease-out]">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl ${
          type === 'success'
            ? 'bg-emerald-600 text-white'
            : 'bg-red-600 text-white'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle className="w-6 h-6" />
        ) : (
          <XCircle className="w-6 h-6" />
        )}
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 hover:bg-white/20 rounded-lg p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
