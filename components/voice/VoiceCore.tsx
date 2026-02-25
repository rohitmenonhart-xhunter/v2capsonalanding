'use client';

export function VoiceCore() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#111] text-white">
            <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
                <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] text-white/90">
                    Hold to speak. <br />Release to type.
                </h2>
                <div className="w-16 sm:w-24 h-[1px] bg-white/20 my-2 sm:my-4" />
                <p className="font-sans text-[15px] sm:text-[18px] font-light text-white/50 leading-[1.8]">
                    Our proprietary voice models are engineered for zero-latency dictation. Pushing natively into massive context windows so that CapsoClaw hears context, nuance, and intent — not just strings of words.
                </p>
            </div>
        </section>
    );
}
