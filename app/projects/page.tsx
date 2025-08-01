import React from 'react';

import { CardHoverEffect } from '@/components/CardHoverEffect';

const page = () => {
  return (
      <div className='h-full w-full flex justify-center'>
        <div className='h-full w-[85%] mt-10 rounded-lg border border-gray-200 flex flex-col items-center justify-center'>
        <CardHoverEffect />
      </div>
      </div>
)
}

export default page