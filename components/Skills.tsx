import React from 'react';

import {
  iconsgrp1,
  iconsgrp2,
} from '@/constants/links';

const Skills = () => {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 p-4">
      {[...iconsgrp1, ...iconsgrp2].map(({ icon: Icon, label, description, color }, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center h-10 w-20 rounded-md shadow-md hover:scale-105 transition-transform duration-300 group`}
=======
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {[...iconsgrp1, ...iconsgrp2].map(({ icon: Icon, label, description, color }, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300`}
>>>>>>> 1d0d856 (first commit)
          style={{
            backgroundColor: `${color}20`,
            boxShadow: `0 0 0 1px ${color}40`,
          }}
        >
<<<<<<< HEAD
          <span className='text-sm delay-100 transform group-hover:font-semibold'>{label}</span>
=======
          {label}
>>>>>>> 1d0d856 (first commit)
        </div>
      ))}
    </div>
  );
};

export default Skills;
