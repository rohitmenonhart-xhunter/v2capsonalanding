'use client';

export function VoiceIntelligence() {
    return (
        <section className="relative py-32 sm:py-48 w-full border-t border-black/5 bg-[#fafaf8]">
            <div className="px-6 sm:px-12 w-full">

                <div className="mb-16 sm:mb-24 flex justify-between items-start">
                    <p className="text-[10px] font-sans font-semibold tracking-[0.3em] text-black/20 uppercase">02 / Voice Utilities</p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-0 items-center">

                    <div className="col-span-1 md:border-r border-black/5 pr-0 md:pr-12 lg:pr-16 w-full h-full flex flex-col justify-center">
                        <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1] text-[#111] mb-6 sm:mb-8">
                            Voice to text.
                        </h2>
                        <p className="font-sans text-[15px] sm:text-[16px] text-black/40 leading-[1.8] max-w-sm font-light">
                            Bridging the gap between spoken intent and digital action. Our voice intelligence utilities map speech to immediate, accurate on-device transcription.
                        </p>
                    </div>

                    <div className="col-span-1 pl-0 md:pl-12 lg:pl-16 w-full h-full flex flex-col justify-center">
                        <div className="w-full aspect-square md:aspect-video bg-white border border-black/5 shadow-sm p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                            <div className="text-[10px] font-sans font-semibold tracking-[0.2em] text-black/30 uppercase flex items-center justify-between">
                                <span>Capsona Voice</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#111] animate-pulse" />
                                    <span>Listening</span>
                                </div>
                            </div>
                            <p className="font-serif text-[20px] sm:text-[24px] md:text-[32px] text-[#111] leading-[1.4] opacity-50 mt-8 md:mt-0">
                                &ldquo;Transcribing directly to massive context windows at the speed of thought.&rdquo;
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
