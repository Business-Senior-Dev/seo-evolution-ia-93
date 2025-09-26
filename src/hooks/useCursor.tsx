import { useEffect, useRef } from 'react';

interface CursorOptions {
  enabled?: boolean;
  trailLength?: number;
  glowSize?: number;
  magneticStrength?: number;
}

export const useCursor = (options: CursorOptions = {}) => {
  const {
    enabled = true,
    trailLength = 8,
    glowSize = 20,
    magneticStrength = 0.1
  } = options;

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<{ x: number; y: number; opacity: number }[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  useEffect(() => {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'fixed pointer-events-none z-50 mix-blend-difference';
    cursor.style.cssText = `
      width: ${glowSize}px;
      height: ${glowSize}px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    // Initialize trail
    for (let i = 0; i < trailLength; i++) {
      trailRef.current.push({ x: 0, y: 0, opacity: 0 });
    }

    const updateCursor = () => {
      if (!cursorRef.current) return;

      const { x, y } = mousePosition.current;

      // Update cursor position
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;

      // Update trail
      trailRef.current.unshift({ x, y, opacity: 1 });
      trailRef.current = trailRef.current.slice(0, trailLength);

      // Draw trail
      trailRef.current.forEach((point, index) => {
        const trailElement = document.querySelector(`[data-cursor-trail="${index}"]`) as HTMLElement;
        if (trailElement) {
          const opacity = point.opacity * (1 - index / trailLength);
          const size = glowSize * (1 - index / trailLength) * 0.5;
          trailElement.style.left = `${point.x}px`;
          trailElement.style.top = `${point.y}px`;
          trailElement.style.opacity = opacity.toString();
          trailElement.style.width = `${size}px`;
          trailElement.style.height = `${size}px`;
        }
      });

      animationFrame.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Magnetic effect
      const interactiveElements = document.querySelectorAll('[data-magnetic]');
      interactiveElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const strength = (1 - distance / maxDistance) * magneticStrength;
          const moveX = deltaX * strength;
          const moveY = deltaY * strength;
          (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          (element as HTMLElement).style.transform = 'translate(0, 0)';
        }
      });
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = `${glowSize * 1.5}px`;
        cursorRef.current.style.height = `${glowSize * 1.5}px`;
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = `${glowSize}px`;
        cursorRef.current.style.height = `${glowSize}px`;
      }
    };

    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const trailElement = document.createElement('div');
      trailElement.setAttribute('data-cursor-trail', i.toString());
      trailElement.className = 'fixed pointer-events-none z-40';
      trailElement.style.cssText = `
        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      `;
      document.body.appendChild(trailElement);
    }

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    updateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (cursorRef.current) {
        document.body.removeChild(cursorRef.current);
      }
      // Remove trail elements
      for (let i = 0; i < trailLength; i++) {
        const trailElement = document.querySelector(`[data-cursor-trail="${i}"]`);
        if (trailElement) {
          document.body.removeChild(trailElement);
        }
      }
    };
  }, [enabled, trailLength, glowSize, magneticStrength]);

  return { cursorRef };
};