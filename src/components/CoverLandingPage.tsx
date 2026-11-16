import React from 'react';
import { MailOpen } from 'lucide-react';

interface CoverLandingPageProps {
  onOpenInvitation: () => void;
  isOpening?: boolean;
}

export const CoverLandingPage: React.FC<CoverLandingPageProps> = ({ onOpenInvitation, isOpening = false }) => {
  return (
    <section
      aria-label="Wedding Invitation Cover"
      className={`relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 py-10 select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
        isOpening ? 'opacity-0 scale-[0.985] -translate-y-4 pointer-events-none' : 'opacity-100 scale-100 translate-y-0'
      }`}
    >
      {/* Decorative Outer Border Card Frame */}
      <div className="relative w-full max-w-xl md:max-w-2xl mx-auto py-8 sm:py-12 px-4 sm:px-10 flex flex-col items-center">
        
        {/* Top: Bismillah Arabic Calligraphy */}
        <div className="mb-4">
          <h1
            className="font-arabic text-3xl sm:text-4xl md:text-5xl text-frost-bright tracking-wide leading-relaxed font-normal text-luminous"
            dir="rtl"
            lang="ar"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h1>
        </div>

        {/* Subtitle: With the Blessings of the Almighty */}
        <p className="font-serif italic text-sm sm:text-base md:text-lg text-frost/90 font-light tracking-wide mb-1.5">
          With the Blessings of the Almighty
        </p>

        {/* Together with their families */}
        <p className="font-sans text-[10px] sm:text-[11px] md:text-xs tracking-[0.3em] uppercase text-frost-muted font-normal mb-5">
          TOGETHER WITH THEIR FAMILIES
        </p>

        {/* Delicate Diamond Divider in Frost Silver */}
        <div className="flex items-center justify-center w-44 sm:w-64 mx-auto mb-6 sm:mb-8 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-3 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* Couple's Names: Title Case, Luminous Frost Silver */}
        <div className="my-2 sm:my-3 flex flex-col items-center w-full">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-frost-bright tracking-wide leading-tight text-luminous">
            Nisma Ayisha
          </h2>

          <div className="my-1.5 sm:my-2.5">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-frost-muted font-light">
              &
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-frost-bright tracking-wide leading-tight text-luminous">
            Mohammed Rashid
          </h2>
        </div>

        {/* A Celebration of Nikah */}
        <div className="mt-6 sm:mt-8 mb-8 sm:mb-10 flex flex-col items-center">
          <p className="font-serif italic text-base sm:text-lg text-frost/90 font-light tracking-wider mb-1">
            A Celebration of Nikah
          </p>
          <p className="font-sans text-xs sm:text-sm tracking-[0.35em] text-frost-muted font-medium uppercase">
            13 DECEMBER 2026
          </p>
        </div>

        {/* Prominent OPEN INVITATION Button with translucent obsidian glass & concentric framing */}
        <div className="w-full max-w-xs">
          <button
            onClick={onOpenInvitation}
            disabled={isOpening}
            className={`shining-translucent-box dark-emerald-box group relative w-full inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl text-frost-bright font-sans text-xs sm:text-sm tracking-[0.25em] uppercase font-medium shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden ${
              isOpening ? 'opacity-80 scale-[0.98]' : ''
            }`}
            aria-label="Open wedding invitation"
          >
            {/* Inner Concentric Hairline Framing */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-frost/25 pointer-events-none" />

            <MailOpen className="w-4 h-4 text-frost group-hover:scale-110 transition-transform duration-300 relative z-10" />
            <span className="relative z-10 text-luminous">
              {isOpening ? 'OPENING...' : 'OPEN INVITATION'}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
