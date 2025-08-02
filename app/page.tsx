import { CardHoverEffect } from '@/components/CardHoverEffect';
import FloatingDock from '@/components/FloatingDock';
import WaveIcons from '@/components/FloatingIcons';
import Skills from '@/components/Skills';
<<<<<<< HEAD
import { TracingBeam } from '@/components/ui/tracing-beam';
=======
>>>>>>> 1d0d856 (first commit)
import { socialMedialinks } from '@/constants/links';
import Hero from '@/layouts/Hero';

export default function Home() {
  return (
    <main className=" relative min-h-screen flex justify-center">
<<<<<<< HEAD
      <TracingBeam>
      <div className='absolute left-6 z-50 '>
        <FloatingDock links={socialMedialinks} />
      </div>
      <div className='h-full sm:w-full w-[85%] mt-10 rounded-lg border border-gray-200 flex flex-col items-center justify-center'>
=======
      <div className='absolute left-6 z-50 '>
        <FloatingDock links={socialMedialinks} />
      </div>
      <div className='h-full w-[85%] mt-10 rounded-lg border border-gray-200 flex flex-col items-center justify-center'>
>>>>>>> 1d0d856 (first commit)
        <Hero />
        <WaveIcons />
       <Skills />
        <CardHoverEffect />
      </div>
<<<<<<< HEAD
      </TracingBeam>
=======
>>>>>>> 1d0d856 (first commit)
    </main>
  );
}
