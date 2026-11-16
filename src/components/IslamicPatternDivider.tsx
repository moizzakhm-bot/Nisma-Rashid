import React from 'react';

interface IslamicPatternDividerProps {
  className?: string;
  variant?: 'simple' | 'motif' | 'compact';
}

export const IslamicPatternDivider: React.FC<IslamicPatternDividerProps> = ({
  className = '',
  variant = 'motif',
}) => {
  if (variant === 'simple') {
    return (
      <div className={`flex items-center justify-center w-full max-w-xs mx-auto py-6 opacity-75 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold/60 mx-3 bg-olive-800" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center justify-center w-full max-w-sm mx-auto py-4 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/60" />
        <div className="mx-3 flex items-center space-x-1">
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <div className="w-2 h-2 rotate-45 border border-gold/70" />
          <span className="w-1 h-1 rounded-full bg-gold/50" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/60" />
      </div>
    );
  }

  // Variant: motif - Pure minimalist geometric 8-fold linear motif
  return (
    <div className={`flex items-center justify-center w-full max-w-md mx-auto py-8 select-none ${className}`}>
      {/* Left line with gradual fade */}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/30 to-gold/70" />

      {/* Central minimal geometric emblem */}
      <div className="mx-4 flex items-center justify-center relative w-8 h-8">
        {/* Subtle geometric outer square tilted 45 deg */}
        <div className="absolute inset-1.5 border border-gold/40 rotate-45 transition-transform duration-700 hover:rotate-90" />
        {/* Square 0 deg */}
        <div className="absolute inset-1.5 border border-gold/30" />
        {/* Center delicate point */}
        <div className="w-1.5 h-1.5 bg-gold/80 rotate-45 shadow-[0_0_8px_rgba(197,164,109,0.4)]" />
      </div>

      {/* Right line with gradual fade */}
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/30 to-gold/70" />
    </div>
  );
};
