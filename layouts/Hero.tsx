import React from 'react';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-full w-[90%] mt-10 flex items-center justify-center'>
<<<<<<< HEAD
      <div className='w-full h-full md:h-80 flex md:flex-row flex-col justify-center items-center p-3 gap-5'>
        <Image src={"/images/myimage.jpg"} alt='Haris' height={150} width={150} style={{ borderRadius: '100%' }} className='md:mt-0' />
        <div className='flex flex-col items-start justify-center gap-2'>
          <h1 className='md:text-3xl text-xl font-semibold'>Hey there I'm Haris</h1>
          <p className="text-md text-gray-800 dark:text-gray-600 leading-relaxed text-start">
            AWS Cloud Engineer | BCA Student | Full stack next.js Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-800 dark:text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto text-start">
            BCA student at TMU Moradabad, passionate about cloud engineering. Skilled in Next.js, Linux, and networking. Constantly learning and building real-world projects.
          </p>
        </div>
=======
      <div className='w-full h-80 flex flex-col justify-center items-center p-3 gap-3'>
        <Image src={"/images/myimage.jpg"} alt='Haris' height={150} width={150} style={{ borderRadius: '100%' }} />
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto text-center">
          BCA student at TMU Moradabad, passionate about cloud engineering. Skilled in Next.js, Linux, and networking. Constantly learning and building real-world projects.
        </p>
>>>>>>> 1d0d856 (first commit)
      </div>
    </div>
  )
}

export default Hero