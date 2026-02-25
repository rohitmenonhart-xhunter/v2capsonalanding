'use client';

const specs = [
    { label: 'Context Window', value: 'Expanding to 1M+ tokens for total corporate memory ingest.' },
    { label: 'Agentic Tuning', value: 'Over 65% of post-training dedicated to autonomous workflow resolution.' },
    { label: 'Latency Profile', value: 'Sub 200ms TTFT (Time to First Token) on consumer grade hardware.' },
    { label: 'Deployment', value: 'Local, On-Premise, or fully managed hitroo cloud infrastructure.' }
];

export function SlmSpecs() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#f5f5f3] text-[#111]">
            <div className="max-w-5xl mx-auto border-t border-black/10">
                {specs.map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center py-6 sm:py-8 border-b border-black/10 gap-2 sm:gap-8">
                        <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-semibold text-black/40 w-full sm:w-48 shrink-0">
                            {spec.label}
                        </span>
                        <span className="font-serif text-[20px] sm:text-[24px] text-[#111] leading-[1.3] sm:leading-normal">
                            {spec.value}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
