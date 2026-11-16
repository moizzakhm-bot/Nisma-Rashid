import React from 'react';
import { IslamicPatternDivider } from './IslamicPatternDivider';

export const FamilyDetails: React.FC = () => {
  return (
    <section
      id="family-section"
      aria-label="Family Details"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-cinzel text-[11px] sm:text-xs tracking-super-wide text-gold uppercase block mb-2">
          IN THE NAME OF ALLAH
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory tracking-[0.1em] font-normal uppercase">
          FAMILY BLESSINGS
        </h2>
        <IslamicPatternDivider variant="motif" className="my-2" />
      </div>

      {/* Two-Column Grid for Bride and Groom Families */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        {/* Subtle vertical center divider on desktop */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2" />

        {/* Bride's Family Column */}
        <div className="relative p-6 sm:p-8 rounded-none border border-gold/25 bg-olive-900/30 backdrop-blur-xs flex flex-col items-center text-center transition-all duration-300 hover:border-gold/45">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-olive-800 text-[10px] sm:text-[11px] font-cinzel tracking-widest-plus text-gold uppercase border border-gold/30">
            BRIDE'S FAMILY
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wider uppercase font-normal mt-2 mb-3">
            NISMA AYISHA
          </h3>

          <div className="w-10 h-[1px] bg-gold/40 mb-4" />

          <p className="font-sans text-xs sm:text-sm text-beige uppercase tracking-widest font-normal mb-1">
            Daughter of
          </p>
          <p className="font-serif text-lg sm:text-xl text-ivory/95 font-medium mb-3">
            Abdul Rahim
          </p>

          <p className="font-sans text-xs sm:text-sm text-beige/80 tracking-wide font-light max-w-xs leading-relaxed">
            Sahara, Kana, Surathkal
          </p>
        </div>

        {/* Groom's Family Column */}
        <div className="relative p-6 sm:p-8 rounded-none border border-gold/25 bg-olive-900/30 backdrop-blur-xs flex flex-col items-center text-center transition-all duration-300 hover:border-gold/45">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-olive-800 text-[10px] sm:text-[11px] font-cinzel tracking-widest-plus text-gold uppercase border border-gold/30">
            GROOM'S FAMILY
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wider uppercase font-normal mt-2 mb-3">
            MOHAMMED RASHID
          </h3>

          <div className="w-10 h-[1px] bg-gold/40 mb-4" />

          <p className="font-sans text-xs sm:text-sm text-beige uppercase tracking-widest font-normal mb-1">
            Son of
          </p>
          <p className="font-serif text-lg sm:text-xl text-ivory/95 font-medium mb-3">
            Late Mohammed Sharief
          </p>

          <div className="font-sans text-xs sm:text-sm text-beige/80 tracking-wide font-light max-w-xs leading-relaxed space-y-0.5">
            <p>M. S. Manzil, Nandavara House</p>
            <p>Panemangalore Post, Bantwal</p>
          </div>
        </div>
      </div>

      {/* Bride's Parents Section */}
      <div className="mt-10 sm:mt-12 text-center max-w-xl mx-auto p-6 border border-gold/20 bg-olive-900/20">
        <p className="font-cinzel text-[10px] sm:text-xs text-gold tracking-super-wide uppercase mb-2">
          BRIDE'S PARENTS
        </p>
        <p className="font-serif text-lg sm:text-xl text-ivory tracking-wide font-normal mb-1">
          Mr. & Mrs. Abdul Rahim
        </p>
        <p className="font-serif text-xs sm:text-sm text-beige/75 italic">
          (S/o Late Hamad Kana & Late Saramma)
        </p>
      </div>
    </section>
  );
};
