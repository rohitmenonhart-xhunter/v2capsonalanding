'use client';

export function AboutOrigin() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#f5f5f3] text-[#111]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 sm:gap-16 border-t border-black/10 pt-12 sm:pt-16">

                <div className="w-full lg:w-1/3">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-black/30 font-sans font-semibold mb-4">Origin</p>
                    <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.1] text-[#111]">
                        Powered by Hitroo
                    </h2>
                </div>

                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="flex flex-col gap-4">
                        <span className="w-8 h-[1px] bg-[#111]" />
                        <h3 className="font-serif text-[22px] sm:text-[24px]">SLM Architecture</h3>
                        <p className="font-sans text-[14px] text-black/50 leading-[1.7] font-light">
                            We leverage Hitroo&apos;s proprietary Small Language Models, allowing us to deploy hyper-focused intelligence directly where it&apos;s needed, bypassing the overhead of generalized foundation models.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="w-8 h-[1px] bg-[#111]" />
                        <h3 className="font-serif text-[22px] sm:text-[24px]">Data Privacy</h3>
                        <p className="font-sans text-[14px] text-black/50 leading-[1.7] font-light">
                            Because we build our own models under Hitroo, your organizational memory remains entirely sandboxed. Total autonomy requires total security.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
