'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Hold to Speak',
    description: 'Bind Capsona to any key. Press it to talk. Release to type.',
  },
  {
    title: 'Instant Transcription',
    description: 'Speak at the speed of thought. See your words appear flawlessly.',
  },
  {
    title: 'Works Everywhere',
    description: 'Any text box. Any Mac application. No integrations required.',
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: '600vh' }} // Increased scroll area for much longer read times
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Background ambient lighting that shifts based on scroll */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)]"
          style={{
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
          {features.map((feature, index) => {
            // Calculate when each item should appear based on scroll position
            // We have 3 items, dividing the 0-1 range.
            const totalDuration = 0.33;
            const start = index * totalDuration;
            const end = start + totalDuration;

            // Peak plateau (the "clear" segment) is expanded drastically.
            const peakStart = start + 0.05;
            const peakEnd = end - 0.05;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
              scrollYProgress,
              [start, peakStart, peakEnd, end],
              [0, 1, 1, 0]
            );

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(
              scrollYProgress,
              [start, peakStart, peakEnd, end],
              [40, 0, 0, -40]
            );

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const filter = useTransform(
              scrollYProgress,
              [start, peakStart, peakEnd, end],
              ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(12px)']
            );

            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                style={{ opacity, y, filter }}
              >
                <div className="text-[10px] sm:text-xs tracking-[0.3em] text-white/40 uppercase mb-4 sm:mb-8">
                  Phase 0{index + 1}
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 sm:mb-6 text-transparent bg-clip-text text-gradient leading-tight">
                  {feature.title}
                </h2>
                <p className="text-base sm:text-xl md:text-2xl text-subtle font-light max-w-2xl mx-auto leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 flex flex-col items-center gap-4 hidden sm:flex">
          <div className="h-24 sm:h-32 w-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white shadow-[0_0_10px_white]"
              style={{
                height: '20%',
                top: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
