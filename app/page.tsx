import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { VoiceIntelligence } from '@/components/landing/VoiceIntelligence';
import { CapsoClaw } from '@/components/landing/CapsoClaw';
import { Education } from '@/components/landing/Education';
import { Business } from '@/components/landing/Business';
import { CorporateFooter } from '@/components/landing/Footer';
import { Atmosphere } from '@/components/landing/Atmosphere';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f5f5f3] text-[#111] selection:bg-[#111] selection:text-[#f5f5f3]">
      <Atmosphere />

      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <VoiceIntelligence />
        <CapsoClaw />
        <Education />
        <Business />
        <CorporateFooter />
      </main>
    </div>
  );
}
