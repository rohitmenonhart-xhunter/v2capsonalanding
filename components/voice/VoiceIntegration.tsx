'use client';

export function VoiceIntegration() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#f5f5f3] text-[#111]">
            <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 sm:gap-16 items-center">

                <div className="flex flex-col gap-4 sm:gap-6 w-full order-2 md:order-1">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-black/30 font-sans font-semibold mb-2 sm:mb-4">Integrations</p>
                    <h2 className="font-serif text-[32px] sm:text-[38px] md:text-[48px] leading-[1.1]">
                        Everywhere<br />you type.
                    </h2>
                    <p className="font-sans text-[15px] sm:text-[16px] text-black/50 leading-[1.7] font-light mt-2 sm:mt-4">
                        Capsona Voice utilities aren&apos;t confined to a single app window. Built at the OS level, our dictation engine surfaces globally across your entire device space.
                    </p>

                    <div className="flex flex-col gap-4 mt-6 sm:mt-8 border-t border-black/10 pt-6 sm:pt-8 w-full">
                        <div className="flex justify-between items-center pb-2 border-b border-black/5">
                            <span className="font-sans text-[13px] sm:text-[14px]">macOS Native</span>
                            <span className="font-sans text-[10px] tracking-widest uppercase text-black/30">Active</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-black/5">
                            <span className="font-sans text-[13px] sm:text-[14px]">Windows</span>
                            <span className="font-sans text-[10px] tracking-widest uppercase text-black/30">In Dev</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-black/5">
                            <span className="font-sans text-[13px] sm:text-[14px]">Web API</span>
                            <span className="font-sans text-[10px] tracking-widest uppercase text-black/30">Available</span>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white border border-black/5 p-8 sm:p-12 shadow-sm flex flex-col justify-center min-h-[300px] sm:min-h-[400px] order-1 md:order-2">
                    <div className="relative w-full pl-4 sm:pl-0">
                        <div className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <p className="font-serif text-[24px] sm:text-[28px] text-black/30 leading-[1.4] blur-[0.5px]">
                            &ldquo;Draft an email to the executive team summarizing the Q3 velocity improvements and attach the latest CapsoClaw metrics.&rdquo;
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
