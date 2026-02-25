'use client';

export function VoiceHero() {
    return (
        <section className="px-6 sm:px-12 pb-24 sm:pb-32 border-b border-black/5 flex flex-col items-center text-center">
            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse mb-8" />
            <h1 className="text-[4rem] sm:text-[6.5rem] md:text-[9rem] font-serif font-normal tracking-[-0.02em] leading-[0.85] text-[#111] max-w-5xl">
                Listening.
            </h1>
            <p className="mt-8 sm:mt-12 font-sans text-[16px] sm:text-[18px] text-black/40 max-w-md px-4">
                Bridging the gap between spoken intent and digital action globally.
            </p>
        </section>
    );
}
