'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const; // Custom cubic-bezier for buttery smooth entry

  return (
    <section className="relative w-full min-h-screen bg-[#f5f5f3] flex flex-col font-sans overflow-hidden">

      {/* Corner marks removed for minimalism */}

      <motion.nav
        className="relative z-20 flex items-start justify-between px-6 sm:px-12 w-full h-32 pt-6 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease }}
      >
        {/* Empty area for layout balance */}
        <div className="w-8 h-8" />

        <div className="flex flex-col items-end gap-1">
          <Link href="/about" className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors cursor-pointer">
            About Capsona
          </Link>
          <Link href="/business" className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors cursor-pointer">
            Business
          </Link>
        </div>
      </motion.nav>

      <div className="relative z-10 flex-1 flex flex-col w-full px-6 sm:px-12 pb-16 sm:pb-32 pt-48 md:pt-32">
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-center h-full">

          <motion.p
            className="text-[12px] sm:text-[12px] font-sans font-semibold tracking-[0.3em] uppercase text-black/30 mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
          >
            The Intelligence Layer
          </motion.p>

          <motion.h1
            className="text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[11rem] font-serif font-normal tracking-[-0.02em] leading-[0.85] text-[#111]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
          >
            Capsona
          </motion.h1>

          <motion.div
            className="mt-8 sm:mt-16 md:mt-20 flex flex-col sm:items-center gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
          >
            <p className="font-sans text-[18px] sm:text-[18px] text-black/50 leading-[1.6] font-light max-w-2xl text-left sm:text-center">
              A fundamentally new architecture for human-machine collaboration.
              Powered by Hitroo SLMs, engineered for total operational autonomy.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
