"use client";
import React from 'react';

import Image from 'next/image';

import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/shooting-stars-background';

function Hero() {
  return (
    <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-[95%] md:mt-5 mt-2">
      <div className='relative z-50 h-full w-[90%] mt-10 flex items-center justify-center'>
        <div className='w-full h-80 flex md:flex-row flex-col justify-center items-center p-3 gap-7'>
          <Image
            src="/images/myimage.jpg"
            alt="Haris"
            height={150}
            width={150}
            style={{ borderRadius: '100%' }}
          />

          {/* Updated info section with white/light text */}
          <div className='flex flex-col items-center gap-2 text-start'>
            <h1 className='text-2xl text-start w-full font-semibold text-white dark:text-white'>
              Hey there, I'm Haris
            </h1>
            <p className="uppercase text-sm font-semibold text-gray-300 dark:text-gray-300 text-start w-full">
              Cloud Engineer | Full Stack Next.js Developer | BCA Student
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-300 font-medium leading-relaxed max-w-2xl">
              BCA student at TMU Moradabad, passionate about cloud engineering. Skilled in Next.js, Linux, and networking. Constantly learning and building real-world projects.
            </p>
          </div>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default Hero;