import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { IslamicPatternDivider } from './IslamicPatternDivider';

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Gentle entry trigger
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToExplore = () => {
    const nextSection = document.getElementById('family-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Wedding Invitation Announcement"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 md:px-8 py-12 md:py-16 overflow-hidden"
    >
      {/* Subtle outer geometric frame border - luxury stationery style */}
      <div 
        className="absolute inset-4 sm:inset-6 md:inset-8 border border-gold/20 pointer-events-none rounded-none transition-opacity duration-1000"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <div className="absolute inset-1 sm:inset-1.5 border border-gold/10 pointer-events-none" />
        {/* Subtle decorative micro corners */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-gold/50" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-gold/50" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-gold/50" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-gold/50" />
      </div>

      {/* Top Header: Bismillah & Blessing */}
      <header
        className={`w-full max-w-2xl mx-auto pt-6 sm:pt-8 transition-all duration-1000 ease-out transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Arabic Calligraphy - Bismillah */}
        <h1 
          className="font-arabic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold tracking-wide leading-relaxed font-normal mb-3 select-none"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </h1>

        {/* Subtitle blessing */}
        <p className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-widest-plus text-beige uppercase font-normal">
          WITH THE BLESSINGS OF THE ALMIGHTY
        </p>

        <IslamicPatternDivider variant="compact" className="my-3 opacity-60" />
      </header>

      {/* Center Main Invitation & Prominent Couple's Names */}
      <div
        className={`w-full max-w-3xl mx-auto py-6 md:py-10 flex flex-col items-center justify-center transition-all duration-1000 delay-300 ease-out transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Invitation lead text */}
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-beige mb-2 font-light">
          Together with their families
        </p>

        <h2 className="font-cinzel text-base sm:text-lg md:text-xl text-ivory tracking-[0.2em] font-medium uppercase mb-3">
          MR. & MRS. ABDUL RAHIM
        </h2>

        <p className="font-serif text-sm sm:text-base md:text-lg text-beige/90 max-w-xl mx-auto leading-relaxed font-light mb-8 sm:mb-10 px-4">
          cordially invite you and your family to grace the auspicious occasion of the wedding of their beloved daughter.
        </p>

        {/* Couple's Names - The Visual Centerpiece */}
        <div className="relative w-full py-4 my-2 flex flex-col items-center">
          {/* Subtle minimal geometric top line */}
          <div className="w-16 h-[1px] bg-gold/40 mb-6" />

          {/* Bride Name */}
          <div className="relative group">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ivory tracking-[0.12em] uppercase leading-tight transition-colors duration-500 hover:text-gold-light">
              NISMA AYISHA
            </h2>
          </div>

          {/* Elegant Connector */}
          <div className="my-2 sm:my-3 flex items-center justify-center space-x-4">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold font-light">
              &
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {/* Groom Name */}
          <div className="relative group">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-ivory tracking-[0.12em] uppercase leading-tight transition-colors duration-500 hover:text-gold-light">
              MOHAMMED RASHID
            </h2>
          </div>

          {/* Subtle minimal geometric bottom line */}
          <div className="w-16 h-[1px] bg-gold/40 mt-6" />
        </div>
      </div>

      {/* Bottom: Minimal Scroll Indicator */}
      <footer
        className={`w-full pb-4 sm:pb-6 transition-all duration-1000 delay-700 ease-out transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button
          onClick={scrollToExplore}
          className="group inline-flex flex-col items-center text-beige/70 hover:text-gold transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-gold/40 py-2 px-4 rounded"
          aria-label="Scroll to explore invitation details"
        >
          <span className="font-cinzel text-[10px] sm:text-[11px] tracking-super-wide uppercase mb-2 group-hover:tracking-[0.55em] transition-all duration-300 font-normal">
            SCROLL TO EXPLORE
          </span>
          <div className="relative w-4 h-6 border border-gold/30 rounded-full flex justify-center p-1 group-hover:border-gold/60 transition-colors">
            <div className="w-1 h-1.5 bg-gold/70 rounded-full animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-gold/60 mt-1 animate-pulse" />
        </button>
      </footer>
    </section>
  );
};
