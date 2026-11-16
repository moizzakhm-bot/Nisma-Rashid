import React from 'react';

export const InvitationMessage: React.FC = () => {
  return (
    <section
      aria-label="Warm Invitation Message"
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 text-center"
    >
      <div className="emerald-card relative p-8 sm:p-12 md:p-14">
        
        {/* Thin Diamond Divider */}
        <div className="flex items-center justify-center w-36 sm:w-44 mx-auto mb-8 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-2.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* The heartfelt invitation quote */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-frost-bright font-light leading-relaxed max-w-2xl mx-auto mb-8 px-2 text-luminous">
          &ldquo;Your presence and good wishes will make this special occasion even more memorable for us.&rdquo;
        </p>

        {/* Thin Diamond Divider */}
        <div className="flex items-center justify-center w-36 sm:w-44 mx-auto mb-8 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-2.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* Compliments */}
        <div className="space-y-2">
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.3em] text-frost-muted uppercase font-medium">
            WITH BEST COMPLIMENTS FROM
          </p>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-frost-bright tracking-[0.15em] font-normal uppercase text-luminous">
            RELATIVES & FRIENDS
          </p>
        </div>

      </div>
    </section>
  );
};
