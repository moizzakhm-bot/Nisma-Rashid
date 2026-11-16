import React, { useMemo } from 'react';

export const BackgroundElements: React.FC = () => {
  // Delicate starlight sparkles: smaller, darker, distributed across full scrollable height
  const stars = useMemo(() => {
    return [
      { top: '3%', left: '12%', size: 1.6, delay: '0s', duration: '4.5s' },
      { top: '7%', left: '86%', size: 1.5, delay: '1.2s', duration: '5.2s' },
      { top: '12%', left: '74%', size: 2.0, delay: '0.8s', duration: '6.0s', isCross: true },
      { top: '17%', left: '20%', size: 1.5, delay: '2.5s', duration: '4.8s' },
      { top: '22%', left: '8%', size: 1.4, delay: '1.8s', duration: '5.5s' },
      { top: '27%', left: '92%', size: 1.8, delay: '0.4s', duration: '6.2s' },
      { top: '33%', left: '15%', size: 2.0, delay: '2.1s', duration: '5.8s', isCross: true },
      { top: '39%', left: '84%', size: 1.5, delay: '3.0s', duration: '4.7s' },
      { top: '45%', left: '25%', size: 1.6, delay: '1.5s', duration: '5.3s' },
      { top: '51%', left: '75%', size: 2.0, delay: '0.9s', duration: '6.5s', isCross: true },
      { top: '57%', left: '10%', size: 1.4, delay: '2.4s', duration: '5.0s' },
      { top: '63%', left: '90%', size: 1.6, delay: '1.7s', duration: '4.6s' },
      { top: '69%', left: '18%', size: 2.0, delay: '0.5s', duration: '6.1s', isCross: true },
      { top: '75%', left: '82%', size: 1.5, delay: '2.8s', duration: '5.4s' },
      { top: '81%', left: '12%', size: 1.4, delay: '1.3s', duration: '4.9s' },
      { top: '87%', left: '88%', size: 2.0, delay: '2.2s', duration: '6.4s', isCross: true },
      { top: '93%', left: '28%', size: 1.5, delay: '0.7s', duration: '5.1s' },
      { top: '97%', left: '72%', size: 1.6, delay: '1.9s', duration: '5.7s' },
    ];
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Dark Velvet Emerald Ambient Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,_rgba(10,38,22,0.6)_0%,_rgba(4,16,9,0.92)_60%,_#020804_100%)]" />

      {/* 2. Small, Delicate Islamic Mihrab Arch Colonnade Watermark (Darker & Smaller, Scrolls with page) */}
      <div className="absolute inset-0 opacity-[0.065] mix-blend-screen">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Small repeating Islamic Mihrab Arch Tile (65px x 95px) */}
            <pattern
              id="islamic-arch-pattern-small"
              width="65"
              height="95"
              patternUnits="userSpaceOnUse"
            >
              {/* Outer Pointed Mihrab Arch Outline */}
              <path
                d="M 5 95 L 5 48 C 5 24, 22 10, 31.5 2.5 C 32 2, 33 2, 33.5 2.5 C 43 10, 60 24, 60 48 L 60 95"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="0.75"
                strokeLinecap="round"
                opacity="0.8"
              />
              {/* Inner Parallel Dashed Arch Line */}
              <path
                d="M 11 95 L 11 50 C 11 29, 24 16, 31.5 9 C 32 8.5, 33 8.5, 33.5 9 C 41 16, 54 29, 54 50 L 54 95"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                opacity="0.5"
              />
              {/* Interlocking Arch Base Curve */}
              <path
                d="M 0 95 Q 32.5 85 65 95"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="0.4"
                opacity="0.3"
              />
              {/* Subtle Apex Diamond Finial */}
              <circle cx="32.5" cy="2" r="0.9" fill="#CBD5E1" opacity="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-arch-pattern-small)" />
        </svg>
      </div>

      {/* 3. Subtle Paper Matte Texture / Fine Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* 4. Small, Subdued Twinkling Starlight Points (Scrolls with page) */}
      {stars.map((s, idx) => (
        <div
          key={idx}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-70"
          style={{
            top: s.top,
            left: s.left,
            animation: `twinkleStar ${s.duration} ease-in-out infinite alternate`,
            animationDelay: s.delay,
          }}
        >
          {s.isCross ? (
            /* Delicate small 4-point star cross flare */
            <div className="relative flex items-center justify-center">
              <div
                className="rounded-full bg-white shadow-[0_0_6px_rgba(248,250,252,0.8)]"
                style={{ width: `${s.size}px`, height: `${s.size}px` }}
              />
              <div className="absolute w-2.5 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div className="absolute h-2.5 w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent" />
            </div>
          ) : (
            /* Fine subtle star dot */
            <div
              className="rounded-full bg-[#E2E8F0] shadow-[0_0_5px_rgba(226,232,240,0.6)]"
              style={{ width: `${s.size}px`, height: `${s.size}px` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
