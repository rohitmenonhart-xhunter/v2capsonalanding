'use client';

export function AboutVision() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#111] text-white flex flex-col md:grid md:grid-cols-2 gap-12 sm:gap-16">
            <div>
                <p className="text-[10px] sm:text-[12px] tracking-[0.3em] uppercase text-white/30 font-sans font-semibold mb-6 sm:mb-8">The Wing of Hitroo</p>
                <p className="font-serif text-[28px] sm:text-[32px] md:text-[40px] leading-[1.3] text-white/90">
                    Capsona isn&apos;t just software.<br />It&apos;s a fundamentally new architecture for human-machine collaboration.
                </p>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8 text-[15px] sm:text-[16px] font-sans font-light text-white/50 leading-[1.8]">
                <p>
                    Born out of Hitroo AI, Capsona was established to bridge the gap between massive underlying foundation models and actionable, daily utility. We saw that answering questions wasn&apos;t enough. Intelligence needs autonomy.
                </p>
                <p>
                    Our dedicated teams focus on agentic behavior tuning. We don&apos;t just want an AI that tells you how to do something; we want an AI that does it for you. This is the premise behind CapsoClaw.
                </p>
            </div>
        </section>
    );
}
