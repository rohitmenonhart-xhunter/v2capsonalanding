import { Hero } from '@/components/landing/Hero';
import { Atmosphere } from '@/components/landing/Atmosphere';
import { Features } from '@/components/landing/Features';
import { Capabilities } from '@/components/landing/Capabilities';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Atmosphere />

      {/* 
        We use z-10 here so the content sits above the fixed Atmosphere background.
        The layout is a vertical flow of full-screen sections.
      */}
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <Features />
        <Capabilities />
      </main>
    </div>
  );
}
