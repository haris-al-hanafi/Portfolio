import React from 'react';

import {
  iconsgrp1,
  iconsgrp2,
} from '@/constants/links';

const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {[...iconsgrp1, ...iconsgrp2].map(({ icon: Icon, label, description, color }, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300`}
          style={{
            backgroundColor: `${color}20`,
            boxShadow: `0 0 0 1px ${color}40`,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Skills;
