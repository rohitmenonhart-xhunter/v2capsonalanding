'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Atmosphere() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
            {/* Film Grain / Noise Overlay */}
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-screen" />

            {/* Subdued ambient radial gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-50 blur-[100px]" />

            {/* Mouse Tracking Glare */}
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    background: `radial-gradient(600px circle at ${(mousePosition.x + 1) * 50
                        }% ${(mousePosition.y + 1) * 50}%, rgba(255,255,255,0.06), transparent 40%)`,
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
            />

            {/* Base Grid for Technical Feel */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    backgroundPosition: 'center center',
                    maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)'
                }}
            />
        </div>
    );
}
