import { X } from 'lucide-react';
import { useState } from 'react';

interface BannerProps {
  message: string;
  onClose: () => void;
}

export function Banner({ message }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-white text-slate-900 px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="font-medium">{message}</p>
        <button
          onClick={() => setIsVisible(false)}
          className="hover:bg-gray-100 rounded-lg p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
