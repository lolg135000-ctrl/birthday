import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  type: 'gold-orb' | 'star' | 'heart';
  angle: number;
  spinSpeed: number;
}

export const FloatingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Create particles
    const particleCount = prefersReducedMotion ? 25 : 65;
    const particles: Particle[] = [];

    const colors = [
      'rgba(255, 215, 0, ',   // Gold
      'rgba(255, 224, 130, ', // Champagne
      'rgba(255, 182, 193, ', // Soft Pink
      'rgba(255, 117, 143, ', // Rose
    ];

    for (let i = 0; i < particleCount; i++) {
      const typeRoll = Math.random();
      const type: 'gold-orb' | 'star' | 'heart' =
        typeRoll < 0.6 ? 'gold-orb' : typeRoll < 0.85 ? 'star' : 'heart';

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (type === 'heart' ? 9 : 4) + 2,
        speedY: (Math.random() * 0.6 + 0.2) * -1,
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Helper to draw a tiny heart
    const drawHeart = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      alpha: number
    ) => {
      context.save();
      context.translate(x, y);
      context.beginPath();
      const topCurveHeight = size * 0.3;
      context.moveTo(0, topCurveHeight);
      // top left curve
      context.bezierCurveTo(
        -size / 2,
        -size / 2,
        -size,
        topCurveHeight / 3,
        0,
        size
      );
      // top right curve
      context.bezierCurveTo(
        size,
        topCurveHeight / 3,
        size / 2,
        -size / 2,
        0,
        topCurveHeight
      );
      context.fillStyle = `${color}${alpha})`;
      context.fill();
      context.restore();
    };

    // Helper to draw a 4-point golden star
    const drawStar = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      alpha: number
    ) => {
      context.save();
      context.translate(x, y);
      context.beginPath();
      for (let i = 0; i < 4; i++) {
        context.lineTo(Math.cos(((18 + i * 90) * Math.PI) / 180) * size, -Math.sin(((18 + i * 90) * Math.PI) / 180) * size);
        context.lineTo(Math.cos(((63 + i * 90) * Math.PI) / 180) * (size * 0.35), -Math.sin(((63 + i * 90) * Math.PI) / 180) * (size * 0.35));
      }
      context.closePath();
      context.fillStyle = `${color}${alpha})`;
      context.shadowColor = '#FFD54F';
      context.shadowBlur = 8;
      context.fill();
      context.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spinSpeed;

        // Wrap around edges
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.type === 'heart') {
          drawHeart(ctx, p.x, p.y, p.size, p.color, p.opacity);
        } else if (p.type === 'star') {
          drawStar(ctx, p.x, p.y, p.size, p.color, p.opacity);
        } else {
          // Gold orb
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowColor = '#FFE082';
          ctx.shadowBlur = p.size * 2;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-75"
      aria-hidden="true"
    />
  );
};
