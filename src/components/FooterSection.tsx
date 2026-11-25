import React from 'react';
import { Phone, Home } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const phone1 = '9448549120';
  const phone2 = '7259596359';

  return (
    <footer
      aria-label="Residence and Contact Information"
      className="relative w-full border-t border-frost-border/30 bg-[#030d06]/80 pt-14 pb-12 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Diamond Divider */}
        <div className="flex items-center justify-center w-36 sm:w-44 mx-auto mb-10 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-2.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto mb-10">
          {/* Residence */}
          <div className="shining-translucent-box dark-emerald-box relative cursor-pointer flex flex-col items-center p-6 rounded-2xl">
            {/* Inner Concentric Hairline Framing */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-frost/20 pointer-events-none" />

            <div className="w-10 h-10 rounded-full border border-frost/25 flex items-center justify-center text-frost-bright mb-3 bg-[#030905]/70 relative z-10">
              <Home className="w-4 h-4 text-frost" />
            </div>
            <h3 className="font-sans text-[11px] tracking-widest text-frost-muted uppercase font-medium mb-2 relative z-10">
              RESIDENCE
            </h3>
            <p className="font-serif text-lg text-frost-bright relative z-10 text-luminous">
              Sahara, Kana, Surathkal
            </p>
          </div>

          {/* Contact Details */}
          <div className="shining-translucent-box dark-emerald-box relative cursor-pointer flex flex-col items-center p-6 rounded-2xl">
            {/* Inner Concentric Hairline Framing */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-frost/20 pointer-events-none" />

            <div className="w-10 h-10 rounded-full border border-frost/25 flex items-center justify-center text-frost-bright mb-3 bg-[#030905]/70 relative z-10">
              <Phone className="w-4 h-4 text-frost" />
            </div>
            <h3 className="font-sans text-[11px] tracking-widest text-frost-muted uppercase font-medium mb-2 relative z-10">
              CONTACT
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 font-serif text-lg text-frost-bright relative z-10">
              <a
                href={`tel:+91${phone1}`}
                className="hover:text-frost transition-colors duration-200 underline-offset-4 hover:underline py-1 px-1.5"
                aria-label={`Call ${phone1}`}
              >
                +91 {phone1}
              </a>
              <span className="text-frost-muted/50">•</span>
              <a
                href={`tel:+91${phone2}`}
                className="hover:text-frost transition-colors duration-200 underline-offset-4 hover:underline py-1 px-1.5"
                aria-label={`Call ${phone2}`}
              >
                +91 {phone2}
              </a>
            </div>
          </div>
        </div>

        {/* Closing Prophetic Blessing */}
        <div className="mt-8 text-center text-xs font-serif tracking-wider">
          <p className="font-arabic text-xl sm:text-2xl text-frost-bright not-italic mb-2 text-luminous" dir="rtl">
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="font-sans text-xs sm:text-sm text-frost-bright max-w-md mx-auto leading-relaxed text-luminous">
            &ldquo;May Allah bless you and bestow His blessings upon you and unite you in goodness.&rdquo;
          </p>
          <p className="mt-4 text-[11px] sm:text-xs tracking-widest uppercase text-frost-bright font-sans font-medium text-luminous">
            The Wedding of Nisma Ayisha & Mohammed Rashid • 2026
          </p>
          <p className="mt-2 text-[10px] sm:text-[11px] tracking-wider text-white/30 font-sans font-light">
            (©) moizzahmed
          </p>
        </div>

      </div>
    </footer>
  );
};
