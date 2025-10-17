import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeadingWordMorphProps {
  words: string[];
  className?: string;
  interval?: number;
  delay?: number;
}

export const HeadingWordMorph: React.FC<HeadingWordMorphProps> = ({
  words,
  className = '',
  interval = 3000,
  delay = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { elementRef, isVisible } = useScrollReveal({ delay });

  useEffect(() => {
    if (!isVisible || words.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, words.length, interval]);

  return (
    <h2
      ref={elementRef as React.RefObject<HTMLHeadingElement>}
      className={`relative ${className}`}
    >
      <span
        className="inline-block transition-all duration-300"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? 'translateY(-20px)' : 'translateY(0)',
        }}
      >
        {words[currentIndex]}
      </span>
    </h2>
  );
};
