import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeadingScratchRevealProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const HeadingScratchReveal: React.FC<HeadingScratchRevealProps> = ({
  children,
  className = '',
  duration = 1000,
  delay = 0,
}) => {
  const { elementRef, isVisible } = useScrollReveal({ delay });

  return (
    <h2
      ref={elementRef as React.RefObject<HTMLHeadingElement>}
      className={`relative overflow-hidden ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <span className="relative inline-block">
        {children}
        <span
          className="absolute inset-0 bg-blue-600"
          style={{
            transform: isVisible ? 'translateX(100%)' : 'translateX(0)',
            transition: `transform ${duration}ms cubic-bezier(0.77, 0, 0.175, 1)`,
          }}
        />
      </span>
    </h2>
  );
};
