import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface OverlayMediaTextProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  overlayOpacity?: number;
  textPosition?: 'center' | 'bottom' | 'top';
  variant?: 'default' | 'blur';
  className?: string;
}

export const OverlayMediaText: React.FC<OverlayMediaTextProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  overlayOpacity = 0.6,
  textPosition = 'center',
  variant = 'default',
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  const positionClasses = {
    center: 'items-center justify-center',
    bottom: 'items-end justify-center pb-8',
    top: 'items-start justify-center pt-8',
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`relative rounded-xl overflow-hidden min-h-[400px] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`absolute inset-0 w-full h-full object-cover ${
          variant === 'blur' ? 'filter blur-sm' : ''
        }`}
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-neutral-900"
        style={{ opacity: overlayOpacity }}
      />
      <div className={`relative z-10 h-full flex flex-col ${positionClasses[textPosition]} text-center px-8`}>
        <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/90 text-lg max-w-2xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
