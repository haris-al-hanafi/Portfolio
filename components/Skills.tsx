'use client';
import React, { useState } from 'react';

import { motion } from 'framer-motion';

import {
  iconsgrp1,
  iconsgrp2,
} from '@/constants/links';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 p-4">
      {[...iconsgrp1, ...iconsgrp2].map(({ label, description }, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          className="relative flex flex-col items-center justify-center text-center p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition duration-300 text-sm"
        >
          <div className="font-medium">{label}</div>

          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full mb-2 w-44 bg-slate-800 text-white dark:bg-slate-700 dark:text-gray-100 text-xs p-2 rounded-md shadow-lg z-10"
            >
              {description}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
