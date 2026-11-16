import React from 'react';
import { Clock, MapPin, Utensils } from 'lucide-react';

export const NikahCeremony: React.FC = () => {
  return (
    <section
      id="nikah-ceremony"
      aria-label="The Nikah Ceremony Details"
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10"
    >
      <div className="emerald-card relative p-6 sm:p-10 md:p-12 text-center">
        
        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-frost-bright tracking-[0.15em] font-normal uppercase mb-3 text-luminous">
          THE NIKAH CEREMONY
        </h2>

        {/* Thin Diamond Divider */}
        <div className="flex items-center justify-center w-36 sm:w-48 mx-auto mb-5 sm:mb-6 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-2.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* Date & Hijri Date in the EXACT SAME font size and style as above */}
        <div className="my-5 sm:my-7 flex flex-col items-center space-y-2 sm:space-y-3">
          <p className="font-serif text-xl sm:text-3xl md:text-4xl text-frost-bright font-normal tracking-wide uppercase text-luminous">
            SUNDAY 13 DECEMBER 2026
          </p>
          <p className="font-serif text-xl sm:text-3xl md:text-4xl text-frost-bright font-normal tracking-wide uppercase text-luminous">
            3RD RAJAB 1448 AH
          </p>
        </div>

        {/* Small Boxes next to each other (Side-by-side: 3 columns with dark unique obsidian emerald & shining translucent effect) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-5 max-w-2xl mx-auto mt-6 sm:mt-8 text-center">
          
          {/* Box 1: Time */}
          <div className="shining-translucent-box dark-emerald-box cursor-pointer flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl relative min-h-[115px] sm:min-h-[140px]">
            {/* Inner Concentric Hairline Framing */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-frost/20 pointer-events-none" />

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-frost/25 flex items-center justify-center text-frost-bright mb-2 bg-[#030905]/70 relative z-10">
              <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-frost" />
            </div>
            <p className="font-sans text-[9px] sm:text-[11px] tracking-[0.2em] text-frost-muted uppercase font-medium mb-1 relative z-10">
              TIME
            </p>
            <p className="font-serif text-sm sm:text-base md:text-lg text-frost-bright font-medium leading-tight text-luminous relative z-10">
              11:30 AM
            </p>
          </div>

          {/* Box 2: Venue */}
          <div className="shining-translucent-box dark-emerald-box cursor-pointer flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl relative min-h-[115px] sm:min-h-[140px]">
            {/* Inner Concentric Hairline Framing */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-frost/20 pointer-events-none" />

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-frost/25 flex items-center justify-center text-frost-bright mb-2 bg-[#030905]/70 relative z-10">
              <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-frost" />
            </div>
            <p className="font-sans text-[9px] sm:text-[11px] tracking-[0.2em] text-frost-muted uppercase font-medium mb-1 relative z-10">
              VENUE
            </p>
            <p className="font-serif text-sm sm:text-base md:text-lg text-frost-bright font-medium leading-tight text-luminous relative z-10">
              Sagar Auditorium
            </p>
            <p className="font-sans text-[9px] sm:text-xs text-frost-muted mt-0.5 leading-tight relative z-10">
              Panemangalore
            </p>
          </div>

          {/* Box 3: Lunch */}
          <div className="shining-translucent-box dark-emerald-box cursor-pointer flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl relative min-h-[115px] sm:min-h-[140px]">
            {/* Inner Concentric Hairline Framing */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-frost/20 pointer-events-none" />

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-frost/25 flex items-center justify-center text-frost-bright mb-2 bg-[#030905]/70 relative z-10">
              <Utensils className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-frost" />
            </div>
            <p className="font-sans text-[9px] sm:text-[11px] tracking-[0.2em] text-frost-muted uppercase font-medium mb-1 relative z-10">
              LUNCH
            </p>
            <p className="font-serif text-sm sm:text-base md:text-lg text-frost-bright font-medium leading-tight text-luminous relative z-10">
              Following Nikah
            </p>
            <p className="font-sans text-[9px] sm:text-xs text-frost-muted mt-0.5 leading-tight relative z-10">
              until 2:30 PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
