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
    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="font-medium">{message}</p>
        <button
          onClick={() => setIsVisible(false)}
          className="hover:bg-white/20 rounded-lg p-1 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
