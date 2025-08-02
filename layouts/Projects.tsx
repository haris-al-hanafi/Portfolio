import { HoverEffect } from '@/components/ui/card-hover-effect';
import { projects } from '@/constants/links';

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10">
        <h1 className='text-center text-3xl font-semibold'>Projects</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
