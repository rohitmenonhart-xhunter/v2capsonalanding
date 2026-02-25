import { Atmosphere } from '@/components/landing/Atmosphere';
import { CorporateFooter } from '@/components/landing/Footer';
import Link from 'next/link';

import { AboutHero } from '@/components/about/AboutHero';
import { AboutVision } from '@/components/about/AboutVision';
import { AboutOrigin } from '@/components/about/AboutOrigin';

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-[#f5f5f3] text-[#111] selection:bg-[#111] selection:text-[#f5f5f3]">
            <Atmosphere />

            <nav className="relative z-20 flex items-start justify-between px-6 sm:px-12 w-full h-32 pt-6 font-sans">
                <Link href="/" className="font-serif text-[24px] tracking-tight hover:opacity-70 transition-opacity">
                    Capsona
                </Link>
                {/* Empty space to keep layout structure */}
                <div className="w-8 h-8" />
            </nav>

            <main className="w-full flex-1 min-h-screen pt-12">
                <AboutHero />
                <AboutVision />
                <AboutOrigin />
            </main>

            <CorporateFooter />
        </div>
    );
}
