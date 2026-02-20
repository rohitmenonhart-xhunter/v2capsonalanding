'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, Command, Zap, Shield, Cpu, Sparkles } from 'lucide-react';

const capabilities = [
    {
        icon: Mic,
        title: 'Voice to Thought',
        description: 'Instantaneous transcription that feels like telepathy. Speak at the speed of thought, and watch it materialize.',
        colSpan: 'md:col-span-2',
        delay: 0.1,
    },
    {
        icon: Command,
        title: 'Hold to Speak',
        description: 'Bound to a single keystroke. No context switching, no lost focus.',
        colSpan: 'md:col-span-1',
        delay: 0.2,
    },
    {
        icon: Zap,
        title: 'Zero Latency',
        description: 'Powered by an edge-optimized neural engine. Words appear as you say them.',
        colSpan: 'md:col-span-1',
        delay: 0.3,
    },
    {
        icon: Shield,
        title: 'Absolute Privacy',
        description: 'Processed in a secure cloud. Zero data retention. Your voice is never stored and never used for training.',
        colSpan: 'md:col-span-2',
        delay: 0.4,
    },
];

export function Capabilities() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-20%' });

    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden" id="capabilities">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 tracking-widest uppercase">
                        <Sparkles className="w-3 h-3" />
                        System Capabilities
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text text-gradient">
                        What Capsona Can Do
                    </h2>
                    <p className="text-lg md:text-xl text-subtle font-light max-w-2xl mx-auto">
                        A frictionless interface between your mind and your machine.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: cap.delay }}
                            className={`relative group rounded-3xl p-8 overflow-hidden bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors ${cap.colSpan}`}
                        >
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex p-3 rounded-2xl bg-black/50 border border-white/10 text-white/80 group-hover:text-white transition-colors">
                                    <cap.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                                    {cap.title}
                                </h3>
                                <p className="text-white/50 font-light leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
