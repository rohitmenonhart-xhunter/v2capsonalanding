'use client';

export function BusinessValue() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#111] text-white">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                <p className="text-[10px] font-sans font-semibold tracking-[0.3em] text-white/30 uppercase mb-12 sm:mb-16">The Return</p>
                <h2 className="font-serif text-[3rem] sm:text-[4rem] md:text-[5.5rem] leading-[1] text-white/90">
                    Scale intelligence,<br />not headcount.
                </h2>

                <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-12 w-full text-left">

                    <div className="flex flex-col gap-2">
                        <h3 className="font-serif text-[40px] sm:text-[48px] text-white/80">10x</h3>
                        <p className="font-sans text-[12px] sm:text-[14px] text-white/40 uppercase tracking-[0.1em] font-medium">Workflow Velocity</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-serif text-[40px] sm:text-[48px] text-white/80">98%</h3>
                        <p className="font-sans text-[12px] sm:text-[14px] text-white/40 uppercase tracking-[0.1em] font-medium">Reduction in Admin Time</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-serif text-[40px] sm:text-[48px] text-white/80">T+0</h3>
                        <p className="font-sans text-[12px] sm:text-[14px] text-white/40 uppercase tracking-[0.1em] font-medium">Deployment Latency</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
