import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'bounce-in';
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in',
  };

  const baseClass = animationClasses[animation];
  const visibleClass = isVisible ? 'animate-visible' : '';

  return (
    <div
      ref={elementRef}
      className={`${baseClass} ${visibleClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 