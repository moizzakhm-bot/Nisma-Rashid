import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Sagar+Auditorium+Panemangalore+Bantwal';
  const fullAddress = 'Sagar Auditorium, Panemangalore, Bantwal, Karnataka, India';

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="venue-section"
      aria-label="Venue and Location Details"
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10"
    >
      <div className="emerald-card relative p-8 sm:p-12 text-center">
        
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] text-frost-muted uppercase block mb-2 font-medium">
          LOCATION & DIRECTIONS
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-frost-bright tracking-wide font-normal uppercase mb-4 text-luminous">
          JOIN US FOR THE CELEBRATION
        </h2>

        {/* Thin Diamond Divider */}
        <div className="flex items-center justify-center w-36 sm:w-44 mx-auto mb-8 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-2.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {/* MapPin Icon in circular badge */}
        <div className="w-12 h-12 rounded-full border border-frost/25 flex items-center justify-center text-frost-bright mx-auto mb-4 bg-[#030905]/70 shadow-sm">
          <MapPin className="w-6 h-6 text-frost-bright" />
        </div>

        <p className="font-sans text-[11px] tracking-widest text-frost-muted uppercase font-medium mb-1">
          THE VENUE
        </p>

        <h3 className="font-serif text-3xl sm:text-4xl text-frost-bright font-normal tracking-wide mb-2 text-luminous">
          Sagar Auditorium
        </h3>

        <p className="font-sans text-sm sm:text-base text-frost/90 tracking-wide font-light max-w-md mx-auto leading-relaxed mb-8">
          Panemangalore, Bantwal, Karnataka, India.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Prominent GET DIRECTIONS Button with dark obsidian emerald & shining translucent effect */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shining-translucent-box dark-emerald-box relative w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 rounded-2xl text-frost-bright font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-luminous cursor-pointer"
          >
            <div className="absolute inset-1.5 rounded-xl border border-frost/20 pointer-events-none" />
            <Navigation className="w-4 h-4 fill-current text-frost-bright relative z-10" />
            <span className="relative z-10">GET DIRECTIONS</span>
          </a>

          {/* Copy Address Button */}
          <button
            onClick={copyAddress}
            className="shining-translucent-box dark-emerald-box relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl text-frost font-sans text-xs tracking-widest uppercase cursor-pointer"
          >
            <div className="absolute inset-1.5 rounded-xl border border-frost/20 pointer-events-none" />
            <span className="relative z-10 flex items-center space-x-2">
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-frost-bright" />
                  <span>COPIED ADDRESS</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-frost-muted" />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
