import { CardHoverEffect } from '@/components/CardHoverEffect';
import FloatingDock from '@/components/FloatingDock';
import WaveIcons from '@/components/FloatingIcons';
import Skills from '@/components/Skills';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { socialMedialinks } from '@/constants/links';
import Hero from '@/layouts/Hero';

export default function Home() {
  return (
    <main className=" relative min-h-screen flex justify-center">
      <TracingBeam>
      <div className='absolute left-6 z-50 '>
        <FloatingDock links={socialMedialinks} />
      </div>
      <div className='h-full sm:w-full w-[85%] mt-10 rounded-lg border dark:border border-b-gray-200 flex flex-col items-center justify-center'>
        <Hero />
        <WaveIcons />
       <Skills />
        <CardHoverEffect />
      </div>
      </TracingBeam>
    </main>
  );
}
