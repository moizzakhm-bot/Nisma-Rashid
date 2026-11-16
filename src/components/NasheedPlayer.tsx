import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface NasheedPlayerProps {
  autoPlayTriggered: boolean;
}

export const NasheedPlayer: React.FC<NasheedPlayerProps> = ({ autoPlayTriggered }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (autoPlayTriggered && audioRef.current) {
      audioRef.current.volume = 0.65;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Autoplay prevented or interrupted:', err);
          });
      }
    }
  }, [autoPlayTriggered]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hidden Audio Tag */}
      <audio
        ref={audioRef}
        src="/nasheed.mp3"
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Audio Controller */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-full border border-emerald-border-light bg-[#051a0e]/90 text-silver-white shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {/* Pulsing indicator when music is active */}
          <div className="flex items-center space-x-1 pl-1">
            <span
              className={`w-1 h-3.5 rounded-full bg-emerald-400 transition-transform duration-300 ${
                isPlaying ? 'animate-pulse scale-y-125' : 'opacity-40'
              }`}
            />
            <span
              className={`w-1 h-2 rounded-full bg-emerald-300 transition-transform duration-300 ${
                isPlaying ? 'animate-pulse delay-75 scale-y-150' : 'opacity-40'
              }`}
            />
            <span
              className={`w-1 h-3 rounded-full bg-emerald-400 transition-transform duration-300 ${
                isPlaying ? 'animate-pulse delay-150 scale-y-110' : 'opacity-40'
              }`}
            />
          </div>

          <div className="hidden sm:flex flex-col text-left pl-1 pr-2">
            <span className="text-[10px] font-sans tracking-wider text-emerald-300 uppercase font-medium">
              HALAL NASHEED
            </span>
            <span className="text-[11px] font-serif italic text-silver-white/90 truncate max-w-[150px]">
              Bride of Light (Vocal)
            </span>
          </div>

          {/* Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full border border-emerald-border-light flex items-center justify-center text-silver-white hover:text-emerald-300 hover:border-emerald-400 transition-all cursor-pointer bg-emerald-900/60"
            title={isPlaying ? 'Pause nasheed' : 'Play nasheed'}
            aria-label={isPlaying ? 'Pause nasheed' : 'Play nasheed'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-0.5" />}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full border border-emerald-border/60 flex items-center justify-center text-sage-light hover:text-silver-white transition-all cursor-pointer bg-emerald-900/40"
            title={isMuted ? 'Unmute nasheed' : 'Mute nasheed'}
            aria-label={isMuted ? 'Unmute nasheed' : 'Mute nasheed'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-300" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          </button>
        </div>
      </div>
    </>
  );
};
