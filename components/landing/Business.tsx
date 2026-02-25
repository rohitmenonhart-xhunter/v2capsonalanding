'use client';

export function Business() {
    return (
        <section className="relative py-32 sm:py-48 w-full border-t border-black/5 bg-[#111] text-white">
            <div className="px-6 sm:px-12 w-full max-w-6xl mx-auto flex flex-col items-center text-center">

                <p className="text-[10px] font-sans font-semibold tracking-[0.3em] text-white/30 uppercase mb-16">05 / Capsona For Business</p>

                <h2 className="font-serif text-[2.5rem] sm:text-[4rem] lg:text-[6.5rem] leading-[1] text-white tracking-[-0.02em] mb-12">
                    Automate your<br />entire business.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 w-full mt-8 sm:mt-16 text-left">

                    <div className="border-t border-white/10 pt-8 mt-8 sm:mt-0">
                        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 block">Deployment</span>
                        <p className="font-serif text-[20px] sm:text-[24px] text-white mb-4">The Super Agent</p>
                        <p className="font-sans text-[14px] text-white/40 leading-[1.8] font-light">
                            Deploy CapsoClaw across your enterprise. Scale your workforce instantly with agents tuned for high-context corporate environments.
                        </p>
                    </div>

                    <div className="border-t border-white/10 pt-8 mt-8 sm:mt-0">
                        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 block">Operations</span>
                        <p className="font-serif text-[20px] sm:text-[24px] text-white mb-4">Next Level Autonomy</p>
                        <p className="font-sans text-[14px] text-white/40 leading-[1.8] font-light">
                            Move beyond basic automation. Our SLMs execute complex multi-step workflows with full agentic autonomy.
                        </p>
                    </div>

                    <div className="border-t border-white/10 pt-8 mt-8 sm:mt-0">
                        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4 block">Infrastructure</span>
                        <p className="font-serif text-[20px] sm:text-[24px] text-white mb-4">Expanding Reality</p>
                        <p className="font-sans text-[14px] text-white/40 leading-[1.8] font-light">
                            Ingest entire company databases into our expanding context windows. Every decision is backed by absolute corporate memory.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
