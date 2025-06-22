import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationProps {
  endValue: number;
  duration?: number;
  startValue?: number;
  delay?: number;
}

export const useCounterAnimation = ({ 
  endValue, 
  duration = 2000, 
  startValue = 0, 
  delay = 0 
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(startValue);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const difference = endValue - startValue;

      const updateCounter = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Función de easing para hacer la animación más dinámica
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (difference * easeOutQuart));
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(updateCounter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, endValue, startValue, duration, delay]);

  return { count, ref };
}; 