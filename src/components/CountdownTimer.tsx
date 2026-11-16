import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  // Target: 13 December 2026 at 11:30 AM IST (UTC+05:30)
  const targetTime = new Date('2026-12-13T11:30:00+05:30').getTime();

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = targetTime - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section
      aria-label="Wedding Countdown"
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 text-center"
    >
      <div className="emerald-card relative p-8 sm:p-12 text-center">
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-frost/90 font-light tracking-wide mb-1.5">
          Counting the moments
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-frost-bright tracking-wide font-normal mb-6 text-luminous">
          Until We Say Qubool
        </h2>

        {/* Thin Diamond Divider */}
        <div className="flex items-center justify-center w-36 sm:w-44 mx-auto mb-8 opacity-75">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-frost-border-light" />
          <div className="mx-2.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 border border-frost-border-light bg-[#082213]" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-frost-border-light" />
        </div>

        {timeLeft.isPast ? (
          <div className="mt-4 p-6 rounded-2xl border border-frost/35 bg-[#030905]/80 backdrop-blur-md max-w-xl mx-auto shadow-lg">
            <p className="font-serif text-2xl sm:text-3xl text-frost-bright italic font-normal text-luminous">
              Alhamdulillah, the special day has arrived.
            </p>
            <p className="font-sans text-sm text-frost mt-2">
              May Allah bless this union with love, peace, and prosperity.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-xl mx-auto">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="shining-translucent-box dark-emerald-box cursor-pointer p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center min-h-[110px] sm:min-h-[135px]"
              >
                {/* Inner Concentric Hairline Framing (Matching user screenshot) */}
                <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-frost/20 pointer-events-none" />

                <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-frost-bright font-normal tracking-wide tabular-nums text-luminous mb-1">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="font-sans text-[9px] sm:text-[11px] tracking-[0.25em] text-frost-muted uppercase font-medium">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
