'use client';

const modules = [
    { id: '01', title: 'Workflow Integration', desc: 'Plug our CapsoClaw architecture directly into your existing corporate ERPs and let it handle menial administrative routing automatically.' },
    { id: '02', title: 'Dynamic Scheduling', desc: 'Agentic models manage entire executive calendars, negotiating meeting times and resolving conflicts without human intervention.' },
    { id: '03', title: 'Data Ingestion', desc: 'Push your entire company wiki into our massive context windows. Instantly query institutional knowledge with zero hallucination.' },
    { id: '04', title: 'Client Follow-Up', desc: 'CapsoClaw monitors email threads, drafting and sending contextually aware follow-ups to keep deals moving.' },
    { id: '05', title: 'Rapid Prototyping', desc: 'Generate internal reports, code scaffolding, and market analysis briefs instantly via voice dictation.' },
    { id: '06', title: 'Security Fabric', desc: 'On-premise deployment of Hitroo SLM ensures your proprietary data never leaves your internal networks.' },
];

export function BusinessModules() {
    return (
        <section className="px-6 sm:px-12 py-24 sm:py-32 bg-[#f5f5f3] text-[#111]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-black/5 border border-black/5">
                {modules.map((mod) => (
                    <div key={mod.id} className="bg-[#f5f5f3] p-8 sm:p-12 hover:bg-white transition-colors duration-500">
                        <p className="text-[10px] font-sans font-semibold tracking-[0.2em] text-black/30 uppercase mb-4">Module {mod.id}</p>
                        <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] mb-4 sm:mb-6">{mod.title}</h3>
                        <p className="font-sans text-[14px] sm:text-[15px] text-black/40 leading-[1.6]">
                            {mod.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
