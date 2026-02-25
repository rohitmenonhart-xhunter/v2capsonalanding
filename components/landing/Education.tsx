'use client';

export function Education() {
    return (
        <section className="relative py-24 sm:py-32 md:py-48 w-full border-t border-black/5 bg-[#f5f5f3]">
            <div className="px-6 sm:px-12 w-full flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-8 items-start">

                <div className="col-span-12 md:col-span-5 flex flex-col justify-start h-full">
                    <p className="text-[10px] font-sans font-semibold tracking-[0.3em] text-black/30 uppercase mb-6 sm:mb-8">04 / Capsona For Education</p>
                    <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1] text-[#111] mb-6 sm:mb-8 md:pr-12">
                        Revolutionising<br />Learning.
                    </h2>
                    <div className="w-16 h-[1px] bg-[#111] mb-6 sm:mb-8" />
                    <p className="font-sans text-[15px] sm:text-[16px] text-black/50 leading-[1.8] font-light max-w-sm">
                        Providing unprecedented value to every student and teacher. Our frontier AI models are engineered to democratize access to world-class, personalized educational intelligence.
                    </p>
                </div>

                <div className="col-span-12 md:col-span-7 w-full h-full flex flex-col gap-6 sm:gap-8 mt-8 md:mt-0">
                    <div className="bg-white p-6 sm:p-8 md:p-12 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] text-[#111] mb-4">Empowering Teachers</h3>
                        <p className="font-sans text-[14px] sm:text-[15px] text-black/40 leading-[1.7] max-w-md font-light">
                            Automating administrative overhead, generating curricula via Hitroo SLM, and providing real-time classroom analytics.
                        </p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 md:p-12 border border-black/5 shadow-sm hover:shadow-md transition-shadow md:ml-12 border-t sm:border-t-0">
                        <h3 className="font-serif text-[20px] sm:text-[24px] md:text-[32px] text-[#111] mb-4">Personalising Students</h3>
                        <p className="font-sans text-[14px] sm:text-[15px] text-black/40 leading-[1.7] max-w-md font-light">
                            Tailoring context windows to individual learning styles. Agentic behavior tuning ensures the AI mentors rather than just answers.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
