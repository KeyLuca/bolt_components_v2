import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
