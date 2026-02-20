'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to join waitlist');
      }

      setIsSubmitted(true);
      setEmail('');
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20">

      {/* Global Header Logo */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-50">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/20 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center p-2 group cursor-pointer"
        >
          <Image
            src="/logocapsona.png"
            alt="Capsona Logo"
            layout="fill"
            objectFit="contain"
            className="scale-90 group-hover:scale-100 transition-transform duration-300"
            priority
          />
        </motion.div>
      </div>

      {/* The Central Monolith/Signal Visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] sm:max-w-xl md:max-w-3xl aspect-square flex items-center justify-center pointer-events-none">
        <div className="absolute w-full sm:w-3/4 h-full sm:h-3/4 rounded-full border border-white/5 animate-aura-breathe shadow-[0_0_60px_rgba(255,255,255,0.05)] sm:shadow-[0_0_100px_rgba(255,255,255,0.05)]" />
        <div className="absolute w-3/4 sm:w-1/2 h-3/4 sm:h-1/2 rounded-full border border-white/10 animate-aura-breathe shadow-[0_0_40px_rgba(255,255,255,0.1)] sm:shadow-[0_0_80px_rgba(255,255,255,0.1)]" style={{ animationDelay: '1s' }} />
        <div className="absolute w-1/2 sm:w-1/4 h-1/2 sm:h-1/4 rounded-full bg-white/5 animate-aura-breathe shadow-[0_0_30px_rgba(255,255,255,0.2)] sm:shadow-[0_0_60px_rgba(255,255,255,0.2)] blur-xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center mt-10">

        {/* Massive Typographical Headline */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 sm:mb-6 text-transparent bg-clip-text text-gradient leading-tight"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Capsona
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-2xl text-white/80 mb-8 sm:mb-12 max-w-sm sm:max-w-xl mx-auto tracking-wide leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Your Mac's AI Voice Assistant. <br /> Speak directly into any app, instantly.
        </motion.p>

        {/* Interactive Form */}
        <motion.div
          className="w-full max-w-[90%] sm:max-w-md mx-auto relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <div className="absolute -inset-1 bg-white/5 rounded-2xl blur-lg transition duration-500 group-hover:bg-white/10 group-focus-within:bg-white/20"></div>

          <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-0 bg-black/50 glass-border p-2 rounded-2xl sm:rounded-full">
            {isSubmitted ? (
              <div className="w-full flex items-center justify-center py-4 text-white font-medium tracking-widest gap-2 animate-pulse-slow px-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-xs sm:text-sm text-green-400">WAITLIST JOINED</span>
              </div>
            ) : (
              <>
                <div className="flex-1 w-full relative">
                  <Input
                    type="email"
                    placeholder="Enter your email to join"
                    className="w-full bg-transparent border-none text-white placeholder:text-white/40 text-center sm:text-left focus-visible:ring-0 focus-visible:ring-offset-0 px-4 h-12 text-sm sm:text-base font-light rounded-xl sm:rounded-l-full sm:rounded-r-none disabled:opacity-50"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMsg(''); // Clear error on typing
                    }}
                    disabled={isLoading}
                    required
                  />
                  {errorMsg && (
                    <div className="absolute top-full left-0 w-full text-center sm:text-left mt-2 px-4 text-red-400 text-xs sm:text-sm">
                      {errorMsg}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading}
                  className="h-12 w-full sm:w-auto px-6 rounded-xl sm:rounded-full bg-white text-black hover:bg-white/90 hover:scale-[0.98] transition-all duration-300 flex-shrink-0 flex items-center justify-center gap-2 disabled:opacity-80 disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span className="text-sm font-medium">Join Waitlist</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 hidden sm:block" />
                    </>
                  )}
                </Button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
