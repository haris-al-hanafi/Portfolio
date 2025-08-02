import { projects } from '@/constants/links';

import { HoverEffect } from './ui/card-hover-effect';

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10">
        <h1 className='text-center text-3xl font-semibold'>Projects</h1>
      <HoverEffect items={projects} />
    </div>
  );
}