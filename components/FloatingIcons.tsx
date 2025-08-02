'use client';

import {
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  iconsgrp1,
  iconsgrp2,
} from '@/constants/links';

const WaveIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<null | {
    label: string;
    description: string;
    x: number;
    y: number;
    color: string;
  }>(null);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const handleIconHover = (
    e: React.MouseEvent,
    label: string,
    description: string,
    color: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredIcon({
      label,
      description,
      color,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="relative overflow-hidden w-full h-96 flex justify-center bg-white dark:bg-[#0A0A0A] flex-col mt-10">
      <div className='absolute top-0 left-0 w-full h-16 z-10 flex items-center justify-center'>
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-4">Skills</h1>
      </div>

      {windowWidth && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-white/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
              }}
              animate={{
                x: [0, windowWidth],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="absolute flex space-x-10 min-w-max"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 25,
        }}
      >
        {[...iconsgrp1, ...iconsgrp2].map(({ icon, label, description, color }, index) => {
          const isGroup1 = index < iconsgrp1.length;

          return (
            <motion.div
              key={label}
              className="relative cursor-pointer group"
              animate={{
                y: isGroup1 ? [0, -15, 0, 15, 0] : [0, 15, 0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                duration: 4,
                delay: index * 0.2,
              }}
            >
              <motion.div
                className="relative p-3 rounded-full transition-all duration-300 ease-in-out
                hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.3)]
                hover:scale-125 hover:z-10"
                style={{
                  backgroundColor: `${color}20`,
                  boxShadow: `0 0 0 1px ${color}40`,
                }}
                whileHover={{
                  backgroundColor: `${color}30`,
                  boxShadow: `0 0 0 2px ${color}, 0 0 20px 5px ${color}80`,
                }}
                onMouseEnter={(e) => handleIconHover(e, label, description, color)}
                onMouseLeave={handleIconLeave}
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <Image
                    src={icon}
                    alt={label}
                    width={32}
                    height={32}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ backgroundColor: color }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: index * 0.1,
                  }}
                />

                {hoveredIcon?.label === label && (
                  <div
                    className="absolute bottom-full transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm rounded-lg p-3 shadow-lg z-50 w-36"
                    style={{ left: '50%' }}
                  >
                    <h3 className="font-semibold text-[14px]">{label}</h3>
                    <p className="text-gray-300 text-[12px]">{description}</p>
                  </div>
                )}
              </motion.div>              
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WaveIcons;
