'use client';

export function SlmPhilosophy() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#111] text-white flex flex-col items-center border-t border-white/5">
            <div className="max-w-4xl text-center flex flex-col items-center">

                <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans font-semibold mb-8 sm:mb-12">The Philosophy of Size</p>

                <h2 className="font-serif text-[32px] sm:text-[42px] md:text-[56px] leading-[1.1] text-white/90 mb-6 sm:mb-8">
                    Why smaller<br />is better for autonomy.
                </h2>

                <p className="font-sans text-[15px] sm:text-[18px] text-white/50 leading-[1.8] font-light max-w-2xl mb-12 sm:mb-16 text-left sm:text-center px-4 sm:px-0">
                    Standard foundation models are bloated with irrelevant knowledge. When an AI needs to act autonomously, latency and focus are everything.
                </p>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-12 sm:gap-16 text-left border-t border-white/10 pt-12 sm:pt-16 w-full max-w-3xl">

                    <div className="flex flex-col gap-3 sm:gap-4">
                        <span className="text-[10px] tracking-widest text-white/30 uppercase font-sans">01 / Latency</span>
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-white">Acting at Speed</h3>
                        <p className="font-sans text-[14px] sm:text-[15px] font-light text-white/50 leading-[1.7]">
                            CapsoClaw agents must iterate rapidly to solve problems. A smaller parameter count directly translates to the ability to reason and act in real-time, outpacing human administrative speed.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4">
                        <span className="text-[10px] tracking-widest text-white/30 uppercase font-sans">02 / Economics</span>
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-white">Cost per execution</h3>
                        <p className="font-sans text-[14px] sm:text-[15px] font-light text-white/50 leading-[1.7]">
                            The cost of running 1,000 CapsoClaw agents on Hitroo SLM is practically zero compared to general API calls. We pass that infinite scalability directly to the enterprise.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
