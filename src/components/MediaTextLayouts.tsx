import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SplitMediaTextProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  variant?: 'default' | 'muted' | 'outline';
  className?: string;
}

export const SplitMediaText: React.FC<SplitMediaTextProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  imagePosition = 'left',
  variant = 'default',
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  const variantClasses = {
    default: 'bg-white border border-blue-200',
    muted: 'bg-blue-50 border border-blue-100',
    outline: 'bg-transparent border-2 border-blue-300',
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`rounded-xl overflow-hidden ${variantClasses[variant]} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div
        className={`flex flex-col md:flex-row gap-8 ${
          imagePosition === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">{title}</h3>
          <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

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

interface FloatingImageTextProps {
  imageSrc: string;
  imageAlt?: string;
  children: React.ReactNode;
  imagePosition?: 'left' | 'right';
  imageWidth?: string;
  variant?: 'default' | 'card';
  className?: string;
}

export const FloatingImageText: React.FC<FloatingImageTextProps> = ({
  imageSrc,
  imageAlt = '',
  children,
  imagePosition = 'left',
  imageWidth = '40%',
  variant = 'default',
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  const floatClass = imagePosition === 'left' ? 'float-left mr-6' : 'float-right ml-6';

  const variantClasses =
    variant === 'card'
      ? 'rounded-xl border border-blue-200 shadow-md'
      : 'rounded-lg';

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`text-neutral-700 leading-relaxed ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`${floatClass} ${variantClasses} mb-4`}
        style={{ width: imageWidth, maxWidth: '100%' }}
        loading="lazy"
      />
      <div className="text-neutral-600">{children}</div>
    </div>
  );
};
