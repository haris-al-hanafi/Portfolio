"use client";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

export function TypewriterEffect() {
  

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
