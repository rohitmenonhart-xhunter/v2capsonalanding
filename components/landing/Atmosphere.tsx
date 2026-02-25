'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Atmosphere() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth),
                y: (e.clientY / window.innerHeight),
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Mouse-following soft glow — very subtle on cream */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
                style={{ background: '#000' }}
                animate={{
                    left: `calc(${mousePosition.x * 100}% - 250px)`,
                    top: `calc(${mousePosition.y * 100}% - 250px)`,
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.3 }}
            />
        </div>
    );
}
