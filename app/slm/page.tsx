import { Atmosphere } from '@/components/landing/Atmosphere';
import { CorporateFooter } from '@/components/landing/Footer';
import Link from 'next/link';

import { SlmHero } from '@/components/slm/SlmHero';
import { SlmSpecs } from '@/components/slm/SlmSpecs';
import { SlmPhilosophy } from '@/components/slm/SlmPhilosophy';

export default function SlmPage() {
    return (
        <div className="relative min-h-screen bg-[#111] text-white selection:bg-white selection:text-[#111]">
            <Atmosphere />

            <nav className="relative z-20 flex items-start justify-between px-6 sm:px-12 w-full h-32 pt-6 font-sans">
                <Link href="/" className="font-serif text-[24px] tracking-tight hover:opacity-70 transition-opacity">
                    Capsona
                </Link>
                {/* Empty space to keep layout structure */}
                <div className="w-8 h-8" />
            </nav>

            <main className="w-full flex-1 pt-12">
                <SlmHero />
                <SlmSpecs />
                <SlmPhilosophy />
            </main>

            <CorporateFooter />
        </div>
    );
}
