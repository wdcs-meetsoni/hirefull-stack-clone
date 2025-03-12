
import { useEffect, useRef } from 'react';

type Icon = {
  id: number;
  icon: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: { x: number; y: number };
}

const techIcons = [
  { name: 'react', icon: '⚛️' },
  { name: 'node', icon: 'nodejs' },
  { name: 'js', icon: 'JS' },
  { name: 'python', icon: '🐍' },
  { name: 'db', icon: '🗄️' },
  { name: 'angular', icon: 'Ng' },
  { name: 'vue', icon: 'Vue' },
  { name: 'php', icon: 'PHP' },
  { name: 'java', icon: 'Java' },
  { name: 'mongo', icon: 'MongoDB' },
];

const FloatingIcons = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconsRef = useRef<Icon[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize floating icons
    const initIcons = () => {
      iconsRef.current = Array.from({ length: 12 }, (_, i) => {
        const icon = techIcons[i % techIcons.length];
        const size = Math.random() * 20 + 20;
        return {
          id: i,
          icon: icon.icon,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speed: Math.random() * 0.5 + 0.1,
          direction: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
          },
        };
      });
    };

    initIcons();

    const drawIcon = (icon: Icon) => {
      if (!ctx) return;
      
      ctx.save();
      ctx.font = `${icon.size}px Arial`;
      ctx.fillStyle = 'rgba(200, 200, 200, 0.2)';
      
      // Draw the tech icon or symbol
      ctx.fillText(icon.icon, icon.x, icon.y);
      ctx.restore();
    };

    const updateIconPosition = (icon: Icon) => {
      icon.x += icon.direction.x * icon.speed;
      icon.y += icon.direction.y * icon.speed;

      // Bounce off the edges
      if (icon.x <= 0 || icon.x >= canvas.width) {
        icon.direction.x *= -1;
      }
      if (icon.y <= 0 || icon.y >= canvas.height) {
        icon.direction.y *= -1;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      iconsRef.current.forEach((icon) => {
        updateIconPosition(icon);
        drawIcon(icon);
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full opacity-30"
      style={{ background: 'linear-gradient(to bottom right, #f5f5f5, #ffffff)' }}
    />
  );
};

export default FloatingIcons;
