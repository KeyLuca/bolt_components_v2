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
