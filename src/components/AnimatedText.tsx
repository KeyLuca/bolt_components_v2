import React, { useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedTextProps {
  children: string;
  className?: string;
  mode?: 'word' | 'char';
  staggerDelay?: number;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  mode = 'word',
  staggerDelay = 50,
  delay = 0,
}) => {
  const { elementRef, isVisible } = useScrollReveal({ delay });

  const segments = useMemo(() => {
    if (mode === 'word') {
      return children.split(' ').map((word, idx) => ({
        content: word,
        key: `word-${idx}`,
        isSpace: false,
      }));
    } else {
      return children.split('').map((char, idx) => ({
        content: char,
        key: `char-${idx}`,
        isSpace: char === ' ',
      }));
    }
  }, [children, mode]);

  return (
    <p
      ref={elementRef as React.RefObject<HTMLParagraphElement>}
      className={className}
    >
      {segments.map((segment, index) => {
        if (segment.isSpace && mode === 'char') {
          return <span key={segment.key}> </span>;
        }

        return (
          <span
            key={segment.key}
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 0.5s ease-out ${index * staggerDelay}ms, transform 0.5s ease-out ${
                index * staggerDelay
              }ms`,
            }}
          >
            {segment.content}
            {mode === 'word' && index < segments.length - 1 && ' '}
          </span>
        );
      })}
    </p>
  );
};
