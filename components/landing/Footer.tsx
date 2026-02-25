'use client';

import Link from 'next/link';

export function CorporateFooter() {
    return (
        <section className="relative pt-24 sm:pt-32 pb-12 w-full border-t border-black/5 bg-[#fafaf8]">
            <div className="px-6 sm:px-12 w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 sm:gap-16 border-b border-black/10 pb-16 sm:pb-24">

                <div className="lg:col-span-5 flex flex-col justify-between">
                    <h2 className="font-serif text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-[#111] leading-[1] mb-6 sm:mb-8">
                        Capsona
                    </h2>
                    <p className="font-sans text-[14px] sm:text-[15px] text-black/50 font-light max-w-sm leading-[1.8]">
                        The intelligence layer for the modern world. We build SLMs, autonomous agents, and voice utilities to elevate human potential.
                    </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-[11px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.1em] text-[#111] mt-8 lg:mt-0">

                    <div className="flex flex-col gap-3 sm:gap-4">
                        <span className="text-[9px] text-black/30 mb-1 sm:mb-2">Divisions</span>
                        <Link href="/about" className="hover:text-black/50 transition-colors">About Capsona</Link>
                        <Link href="/voice" className="hover:text-black/50 transition-colors">Voice Utilities</Link>
                        <Link href="/slm" className="hover:text-black/50 transition-colors">Hitroo SLM</Link>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4">
                        <span className="text-[9px] text-black/30 mb-1 sm:mb-2">Verticals</span>
                        <a href="#" className="hover:text-black/50 transition-colors">Education</a>
                        <Link href="/business" className="hover:text-black/50 transition-colors">Business</Link>
                        <a href="#" className="hover:text-black/50 transition-colors">Enterprise</a>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4 col-span-2 md:col-span-1 border-t md:border-t-0 border-black/5 pt-6 md:pt-0">
                        <span className="text-[9px] text-black/30 mb-1 sm:mb-2">Connect</span>
                        <a href="https://hitroo.com" target="_blank" rel="noopener noreferrer" className="hover:text-black/50 transition-colors">Hitroo</a>
                    </div>

                </div>
            </div>

            <div className="px-6 sm:px-12 w-full max-w-7xl mx-auto mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] font-sans text-black/30 uppercase tracking-[0.2em] gap-4 sm:gap-0">
                <p>&copy; 2026 Capsona Inc.</p>
                <p>A Wing of Hitroo</p>
            </div>
        </section>
    );
}
