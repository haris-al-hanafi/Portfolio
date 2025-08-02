"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface SpaceshipProps {
  x: number;
  y: number;
  angle: number;
  size: number;
}


interface PlanetProps {
  x: number;
  y: number;
  radius: number;
  color: string;
  dx: number;
  dy: number;
}

interface BlackHoleProps {
  x: number;
  y: number;
  radius: number;
  pulse: number;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [planets, setPlanets] = useState<PlanetProps[]>([]);
  const [blackHoles, setBlackHoles] = useState<BlackHoleProps[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const planetColors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#A66DD4"];

  const generateStars = useCallback((width: number, height: number): StarProps[] => {
    const area = width * height;
    const numStars = Math.floor(area * starDensity);
    return Array.from({ length: numStars }, () => {
      const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.05 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: shouldTwinkle
          ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
          : null,
      };
    });
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  const generatePlanets = (width: number, height: number): PlanetProps[] => {
    return Array.from({ length: 5 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 6 + 4,
      color: planetColors[Math.floor(Math.random() * planetColors.length)],
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));
  };

  const generateBlackHoles = (width: number, height: number): BlackHoleProps[] => {
    return Array.from({ length: 2 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 10 + 12,
      pulse: 0,
    }));
  };

  useEffect(() => {
    const updateAll = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
        setPlanets(generatePlanets(width, height));
        setBlackHoles(generateBlackHoles(width, height));
      }
    };

    updateAll();

    const resizeObserver = new ResizeObserver(updateAll);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Stars
      stars.forEach((star) => {
        if (star.twinkleSpeed !== null) {
          star.opacity = 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw Planets
      planets.forEach((planet) => {
        planet.x += planet.dx;
        planet.y += planet.dy;

        if (planet.x < 0 || planet.x > canvas.width) planet.dx *= -1;
        if (planet.y < 0 || planet.y > canvas.height) planet.dy *= -1;

        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(planet.x, planet.y, 0, planet.x, planet.y, planet.radius);
        grad.addColorStop(0, "#fff");
        grad.addColorStop(1, planet.color);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Draw Black Holes
      blackHoles.forEach((hole) => {
        hole.pulse += 0.05;
        const glowRadius = hole.radius + Math.sin(hole.pulse) * 2;

        // Outer glow ring
        const glow = ctx.createRadialGradient(hole.x, hole.y, hole.radius, hole.x, hole.y, glowRadius + 10);
        glow.addColorStop(0, "rgba(30,30,30,0.6)");
        glow.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.arc(hole.x, hole.y, glowRadius + 10, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Inner black core
        ctx.beginPath();
        ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();

        

      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, planets, blackHoles]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
};
