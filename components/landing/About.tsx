'use client';

export function About() {
    return (
        <section className="relative py-24 sm:py-32 md:py-48 px-6 sm:px-12 w-full border-t border-black/5 bg-[#111] text-white overflow-hidden" id="about">
            <div className="relative w-full flex flex-col md:grid md:grid-cols-12 pb-12 gap-12 md:gap-0">

                {/* Left column now contains a monumental quote instead of the orb */}
                <div className="flex flex-col md:col-span-12 lg:col-span-5 md:border-r border-white/5 md:pr-12 justify-between relative order-2 lg:order-1 pt-12 md:pt-0">
                    <p className="hidden md:block absolute top-0 left-0 text-[10px] font-sans font-semibold tracking-[0.3em] text-white/20 uppercase rotate-180 origin-top-left translate-y-full" style={{ writingMode: 'vertical-rl' }}>
                        Core Philosophy
                    </p>

                    <div className="w-full flex items-end md:items-center py-12 sm:py-24">
                        <div className="flex flex-col">
                            <span className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.9] text-white/20 tracking-tight italic">
                                &ldquo;Intelligence
                            </span>
                            <span className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.9] text-white/20 tracking-tight italic">
                                realized as
                            </span>
                            <span className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.9] text-white/20 tracking-tight italic">
                                autonomy.&rdquo;
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:block w-full h-[1px] bg-white/5 mt-auto" />
                </div>

                {/* Right column text block */}
                <div className="md:col-span-12 lg:col-span-7 lg:pl-20 xl:pl-24 pt-12 md:pt-0 order-1 lg:order-2">
                    <p className="text-[10px] font-sans font-semibold tracking-[0.3em] text-white/30 uppercase mb-8 sm:mb-12">01 / Intelligence</p>

                    <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] font-serif leading-[1.1] text-white tracking-tight">
                        Intelligence,<br />redefined for autonomy.
                    </h2>

                    <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 w-full xl:w-5/6 flex flex-col gap-8">
                        <p className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-white/50 leading-[1.8] font-light">
                            We are developing SLMs explicitly tuned for agentic behavior, expanding context windows to unprecedented extents. At Capsona, models don&apos;t just answer questions — they take action.
                        </p>
                        <div className="flex flex-col gap-4 mt-4 sm:mt-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 border-b border-white/10 pb-4">
                                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 w-auto sm:w-24">Core</span>
                                <span className="font-serif text-[18px] sm:text-[20px] text-white/80">Agentic Behavior Tuning</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 border-b border-white/10 pb-4">
                                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 w-auto sm:w-24">Scale</span>
                                <span className="font-serif text-[18px] sm:text-[20px] text-white/80">Massive Context Windows</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pb-4">
                                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 w-auto sm:w-24">Power</span>
                                <span className="font-serif text-[18px] sm:text-[20px] text-white/80">Powered by Hitroo SLM</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
