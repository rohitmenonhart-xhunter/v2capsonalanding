'use client';

export function CapsoClaw() {
    return (
        <section className="relative py-32 sm:py-48 w-full border-t border-black/5 bg-[#111] text-white">
            <div className="px-6 sm:px-12 w-full flex flex-col items-center text-center">
                <div className="absolute top-12 sm:top-24 left-6 sm:left-12 flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <p className="text-[10px] font-sans font-semibold tracking-[0.3em] text-white/50 uppercase">03 / The Super Agent</p>
                </div>

                <h2 className="font-serif text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] leading-[0.9] text-white tracking-[-0.02em] mb-12">
                    CapsoClaw.
                </h2>

                <div className="border-t border-white/10 pt-12 w-full max-w-2xl mx-auto flex flex-col items-center">
                    <p className="font-serif text-[24px] sm:text-[28px] md:text-[36px] text-white/80 leading-[1.3] mb-8">
                        Our Jarvis to the world.
                    </p>
                    <p className="font-sans text-[15px] sm:text-[16px] text-white/40 leading-[1.8] font-light max-w-lg mb-16 px-4">
                        It doesn&apos;t just draft your emails. It reads your calendar, references your last three meetings, finds the relevant attachments, and hits send. CapsoClaw is the first commercially viable super agent.
                    </p>

                    <button className="mt-16 bg-white text-[#111] font-sans text-[13px] font-medium tracking-wide uppercase px-8 py-4 hover:bg-white/80 transition-colors">
                        Explore CapsoClaw
                    </button>
                </div>

            </div>
        </section>
    );
}
