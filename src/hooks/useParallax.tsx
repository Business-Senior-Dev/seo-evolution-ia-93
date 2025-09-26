import { useEffect, useRef, useCallback } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal' | 'both';
  enabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.1, direction = 'vertical', enabled = true } = options;
  const elementRef = useRef<HTMLDivElement | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  const updatePosition = useCallback(() => {
    if (!elementRef.current || !enabled) return;

    const { x, y } = mousePosition.current;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    let translateX = 0;
    let translateY = 0;

    if (direction === 'horizontal' || direction === 'both') {
      translateX = (x - centerX) * speed;
    }

    if (direction === 'vertical' || direction === 'both') {
      translateY = (y - centerY) * speed;
    }

    elementRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    animationFrame.current = requestAnimationFrame(updatePosition);
  }, [speed, direction, enabled]);

  useEffect(() => {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMouseMove);
    updatePosition();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [updatePosition, enabled]);

  return elementRef;
};