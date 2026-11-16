import React from 'react';

export const FormalInvitationCard: React.FC = () => {
  return (
    <section
      aria-label="Formal Wedding Invitation & Couple Details"
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10"
    >
      <div className="emerald-card relative p-8 sm:p-12 md:p-14 text-center">
        {/* Delicate Islamic Arch Outline Icon at the top (matching screenshot 2) */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-24 sm:w-28 h-10 sm:h-12 text-frost/70 opacity-90"
            viewBox="0 0 100 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer arch line */}
            <path
              d="M10 42 C 25 40, 35 25, 45 15 C 48 12, 50 8, 50 6 C 50 8, 52 12, 55 15 C 65 25, 75 40, 90 42"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Inner parallel arch line */}
            <path
              d="M18 42 C 30 38, 38 27, 46 19 C 48 17, 50 14, 50 12 C 50 14, 52 17, 54 19 C 62 27, 70 38, 82 42"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* With the Blessings of the Almighty */}
        <p className="font-serif italic text-base sm:text-lg text-frost/90 font-light tracking-wide mb-3">
          With the Blessings of the Almighty
        </p>

        {/* Thin Diamond Divider in Frost Silver */}
        <div className="flex items-center justify-center w-36 sm:w-44 mx-auto mb-6 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-2.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* Mr. & Mrs. Abdul Rahim */}
        <h3 className="font-serif text-2xl sm:text-3xl text-frost-bright font-normal tracking-wide mb-2 text-luminous">
          Mr. & Mrs. Abdul Rahim
        </h3>

        {/* Bride's Parent lineage note */}
        <p className="font-serif text-xs sm:text-sm text-frost-muted italic mb-6">
          (S/o Late Hamad Kana & Late Saramma)
        </p>

        {/* Invitation Text */}
        <p className="font-serif text-base sm:text-lg md:text-xl text-frost/95 leading-relaxed font-light max-w-xl mx-auto px-2 mb-10">
          cordially invite you and your family to grace the auspicious occasion of the wedding of their beloved daughter
        </p>

        {/* Elegant Diamond Divider between Invitation & Couple */}
        <div className="flex items-center justify-center w-48 sm:w-64 mx-auto mb-10 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-3 flex items-center justify-center">
            <div className="w-2 h-2 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* Bride Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-frost-bright tracking-wide text-luminous mb-3">
            Nisma Ayisha
          </h3>

          <p className="font-serif text-xs sm:text-sm text-frost/90 tracking-wide font-normal mb-1">
            D/o Abdul Rahim
          </p>

          <p className="font-sans text-xs sm:text-sm text-frost-muted tracking-wide font-light">
            Sahara, Kana, Surathkal
          </p>
        </div>

        {/* Delicate WITH divider (matching screenshot 1) */}
        <div className="flex items-center justify-center w-48 sm:w-64 mx-auto my-8">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] text-frost-muted uppercase px-4 font-normal">
            WITH
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* Groom Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-frost-bright tracking-wide text-luminous mb-3">
            Mohammed Rashid
          </h3>

          <p className="font-serif text-xs sm:text-sm text-frost/90 tracking-wide font-normal mb-1">
            S/o Late Mohammed Sharief
          </p>

          <div className="font-sans text-xs sm:text-sm text-frost-muted tracking-wide font-light space-y-0.5">
            <p>M. S. Manzil, Nandavara House</p>
            <p>Panemangalore Post, Bantwal</p>
          </div>
        </div>

      </div>
    </section>
  );
};
