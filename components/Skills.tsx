import React from 'react';

import {
  iconsgrp1,
  iconsgrp2,
} from '@/constants/links';

const Skills = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 p-4">
      {[...iconsgrp1, ...iconsgrp2].map(({ icon: Icon, label, description, color }, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center h-10 w-20 rounded-md shadow-md hover:scale-105 transition-transform duration-300 group`}
          style={{
            backgroundColor: `${color}20`,
            boxShadow: `0 0 0 1px ${color}40`,
          }}
        >
          <span className='text-sm delay-100 transform group-hover:font-semibold'>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
