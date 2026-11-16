import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Soft pentatonic frequencies (peaceful, meditative acoustic mood)
  const notes = [146.83, 164.81, 196.0, 220.0, 261.63, 293.66, 329.63, 392.0]; // D minor / peaceful acoustic pentatonic

  const playChime = (ctx: AudioContext, masterGain: GainNode) => {
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    const note = notes[Math.floor(Math.random() * notes.length)];
    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, ctx.currentTime);

    noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 6.0);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start();
    osc.stop(ctx.currentTime + 6.1);
  };

  const startAmbient = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 2.0);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Play soft warm foundational drone
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = 'sine';
      droneOsc.frequency.setValueAtTime(73.42, ctx.currentTime); // D2 low warm root
      droneGain.gain.setValueAtTime(0.02, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(masterGain);
      droneOsc.start();

      // Play periodic gentle chimes
      playChime(ctx, masterGain);
      intervalRef.current = window.setInterval(() => {
        playChime(ctx, masterGain);
      }, 3500);

      setIsPlaying(true);
    } catch {
      // AudioContext not supported or restricted
    }
  };

  const stopAmbient = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbient();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleAudio}
        className="flex items-center space-x-2 px-3 py-2 bg-olive-900/80 hover:bg-olive-900 text-ivory/90 hover:text-gold border border-gold/40 shadow-lg backdrop-blur-md text-xs font-cinzel tracking-wider uppercase transition-all duration-300 rounded-none focus:outline-none focus:ring-1 focus:ring-gold"
        title={isPlaying ? 'Mute ambient sound' : 'Play peaceful ambient sound'}
        aria-label={isPlaying ? 'Mute ambient sound' : 'Play peaceful ambient sound'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="hidden sm:inline text-[10px]">AMBIENCE ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-beige/60" />
            <span className="hidden sm:inline text-[10px]">AMBIENCE</span>
          </>
        )}
      </button>
    </div>
  );
};
