
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface CounterCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function CounterCard({
  value,
  label,
  prefix = "",
  suffix = "",
  className,
  duration = 2000,
}: CounterCardProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            let startTime: number;
            const totalFrames = 60 * (duration / 1000);
            let frame = 0;
            
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const elapsedTime = currentTime - startTime;
              
              frame = Math.min(frame + 1, totalFrames);
              const progress = frame / totalFrames;
              const easedProgress = easeOutQuart(progress);
              
              const currentCount = Math.floor(easedProgress * value);
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value, duration]);
  
  // Easing function
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  return (
    <div
      ref={countRef}
      className={cn(
        "bg-seo-card p-4 rounded-lg border border-seo-blue/10 flex flex-col items-center justify-center text-center hover-scale transition-all duration-300",
        className
      )}
    >
      <div className="text-3xl font-bold text-white mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
