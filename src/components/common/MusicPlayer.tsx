import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { birthdayData } from '../../config/birthdayData';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Audio autoplay prevented:', err);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={birthdayData.audio.src}
        loop
        preload="auto"
      />

      {/* Luxury Disc / Player Pill */}
      <div className="glass-panel flex items-center gap-3 px-3.5 py-2 rounded-full border border-gold-400/30 shadow-glass-card hover:border-gold-400/60 transition-all duration-300">
        <button
          onClick={togglePlay}
          className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-gold-600 via-amber-400 to-rose-accent text-obsidian-950 focus:outline-none focus:ring-2 focus:ring-gold-300"
          aria-label={isPlaying ? 'Pause birthday music' : 'Play birthday music'}
          title={isPlaying ? 'Pause birthday music' : 'Play birthday music'}
        >
          <div
            className={`w-full h-full rounded-full flex items-center justify-center transition-transform duration-700 ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          >
            <Music className="w-4 h-4 text-obsidian-900" />
          </div>
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          )}
        </button>

        <div className="hidden sm:flex flex-col text-left pr-1 cursor-pointer" onClick={togglePlay}>
          <span className="text-xs font-serif font-medium text-gold-300 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-gold-400" />
            {isPlaying ? 'Music Playing' : 'Birthday Melody'}
          </span>
          <span className="text-[10px] text-pink-200/70 truncate max-w-[110px]">
            {birthdayData.audio.title}
          </span>
        </div>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full hover:bg-white/10 text-gold-300 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-rose-300" />
            ) : (
              <Volume2 className="w-4 h-4 text-gold-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
