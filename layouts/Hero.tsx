import React from 'react';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-full w-[90%] mt-10 flex items-center justify-center'>
      <div className='w-full h-80 flex md:flex-row flex-col justify-center items-center p-3 gap-7'>
        <Image
          src="/images/myimage.jpg"
          alt="Haris"
          height={150}
          width={150}
          style={{ borderRadius: '100%' }}
        />

        {/* New info section */}
        <div className='flex flex-col items-center gap-2 text-start'>
          <p className="uppercase text-sm font-semibold text-gray-400 text-start w-full">
            Cloud Engineer | Full Stack Next.js Developer | BCA Student
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-600 font-medium leading-relaxed max-w-2xl">
            BCA student at TMU Moradabad, passionate about cloud engineering. Skilled in Next.js, Linux, and networking. Constantly learning and building real-world projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
