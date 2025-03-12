
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface BlurCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delayReveal?: number;
}

const BlurCard = ({
  children,
  className,
  hoverEffect = true,
  delayReveal = 0,
}: BlurCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delayReveal);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delayReveal]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "blur-card p-6 transform transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        hoverEffect && "hover:shadow-lg hover:border-opacity-50",
        isHovered && "scale-[1.02]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default BlurCard;
