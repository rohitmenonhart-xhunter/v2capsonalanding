import { Atmosphere } from '@/components/landing/Atmosphere';
import { CorporateFooter } from '@/components/landing/Footer';
import Link from 'next/link';

import { VoiceHero } from '@/components/voice/VoiceHero';
import { VoiceCore } from '@/components/voice/VoiceCore';
import { VoiceIntegration } from '@/components/voice/VoiceIntegration';

export default function VoicePage() {
    return (
        <div className="relative min-h-screen bg-[#fafaf8] text-[#111] selection:bg-[#111] selection:text-[#fafaf8]">
            <Atmosphere />

            <nav className="relative z-20 flex items-start justify-between px-6 sm:px-12 w-full h-32 pt-6 font-sans">
                <Link href="/" className="font-serif text-[24px] tracking-tight hover:opacity-70 transition-opacity">
                    Capsona
                </Link>
                {/* Empty space to keep layout structure */}
                <div className="w-8 h-8" />
            </nav>

            <main className="w-full flex-1 pt-12">
                <VoiceHero />
                <VoiceCore />
                <VoiceIntegration />
            </main>

            <CorporateFooter />
        </div>
    );
}
