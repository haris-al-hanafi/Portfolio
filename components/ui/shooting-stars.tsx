"use client";
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * (side % 2 === 0 ? window.innerWidth : window.innerHeight);

  switch (side) {
    case 0: return { x: offset, y: 0, angle: 45 }; // top
    case 1: return { x: window.innerWidth, y: offset, angle: 135 }; // right
    case 2: return { x: offset, y: window.innerHeight, angle: 225 }; // bottom
    case 3: return { x: 0, y: offset, angle: 315 }; // left
    default: return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 25,
  minDelay = 1500,
  maxDelay = 4000,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 8,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create a new star after a random delay
  const launchStar = () => {
    const { x, y, angle } = getRandomStartPoint();
    const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;

    setStar({
      id: Date.now(),
      x,
      y,
      angle,
      speed,
      scale: 1,
      distance: 0,
    });

    const delay = Math.random() * (maxDelay - minDelay) + minDelay;
    timeoutRef.current = setTimeout(launchStar, delay);
  };

  // Star movement loop using requestAnimationFrame
  const animate = () => {
    setStar((prev) => {
      if (!prev) return null;

      const rad = (prev.angle * Math.PI) / 180;
      const newX = prev.x + prev.speed * Math.cos(rad);
      const newY = prev.y + prev.speed * Math.sin(rad);
      const newDistance = prev.distance + prev.speed;
      const newScale = 1 + newDistance / 100;

      // Offscreen cleanup
      if (
        newX < -50 || newX > window.innerWidth + 50 ||
        newY < -50 || newY > window.innerHeight + 50
      ) return null;

      return {
        ...prev,
        x: newX,
        y: newY,
        distance: newDistance,
        scale: newScale,
      };
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    launchStar();             // Start creating stars
    animationRef.current = requestAnimationFrame(animate); // Start animation loop

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <svg
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    >
      {star && (
        <rect
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#shootingGradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="shootingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
          <stop offset="100%" stopColor={starColor} stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
