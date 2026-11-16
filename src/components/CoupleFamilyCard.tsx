import React from 'react';

export const CoupleFamilyCard: React.FC = () => {
  return (
    <section
      aria-label="Bride and Groom Details"
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8"
    >
      <div className="emerald-card relative p-8 sm:p-12 md:p-14 text-center">
        
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
