import React, { useMemo } from 'react';

export const FloatingParticles: React.FC = () => {
  // Generate random positions for small, subdued glowing dust motes that scroll with document
  const particles = useMemo(() => {
    return Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      top: `${(i * 15) % 96}%`,
      left: `${(i * 31) % 94}%`,
      size: `${1.4 + (i % 2) * 0.8}px`,
      duration: `${4.5 + (i % 4)}s`,
      delay: `${(i % 5) * 0.8}s`,
      opacity: 0.18 + (i % 3) * 0.12,
    }));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="dust-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};
