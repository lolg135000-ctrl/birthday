import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Sparkles, PartyPopper, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayData } from '../../config/birthdayData';

interface FinalCelebrationProps {
  onReplay: () => void;
}

export const FinalCelebration: React.FC<FinalCelebrationProps> = ({ onReplay }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleBurst = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.8 },
      colors: ['#FFD700', '#FF758F', '#FF6B8B', '#FFF'],
      zIndex: 1000,
    });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      {/* Background glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-t from-gold-500/15 via-rose-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Section Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium mb-6 shadow-gold-glow"
        >
          <PartyPopper className="w-4 h-4 text-amber-400" />
          <span>Section 6 • Grand Birthday Finale</span>
          <Heart className="w-4 h-4 text-rose-accent fill-rose-accent" />
        </motion.div>

        {/* Celebrating Characters Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0, y: 30 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl rounded-3xl glass-panel-pink p-6 sm:p-10 border-2 border-gold-400/40 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Golden Corner Ornaments */}
          <div className="absolute top-3 left-3 text-gold-400/50">✦</div>
          <div className="absolute top-3 right-3 text-gold-400/50">✦</div>
          <div className="absolute bottom-3 left-3 text-gold-400/50">✦</div>
          <div className="absolute bottom-3 right-3 text-gold-400/50">✦</div>

          {/* Celebration Image */}
          <div className="relative max-w-sm mx-auto rounded-2xl overflow-hidden border border-gold-400/30 shadow-lg mb-6 group cursor-pointer" onClick={handleBurst}>
            <img
              src="/images/memory-stickers.png"
              alt="Bubu & Dudu Celebrating with balloons, cake and presents"
              className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-gold-300 font-serif flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Tap for celebration sparkle!</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-300 text-glow-gold font-bold mb-4">
            {birthdayData.finaleSection.title}
          </h2>

          {/* The Specific Required Blessing Quote */}
          <div className="my-6 p-5 sm:p-7 rounded-2xl bg-obsidian-950/80 border border-gold-400/30 relative">
            <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-rose-200 leading-relaxed text-glow-pink">
              "{birthdayData.finaleSection.blessingQuote}"
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base text-champagne/85 max-w-lg mx-auto leading-relaxed">
            {birthdayData.finaleSection.celebrationText}
          </p>

          {/* Buttons: Replay & Confetti Burst */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onReplay}
              className="gold-gradient-btn px-8 py-3.5 rounded-full text-base font-semibold flex items-center gap-2 cursor-pointer shadow-gold-glow"
            >
              <ArrowUp className="w-4 h-4 text-obsidian-950" />
              <span>{birthdayData.finaleSection.replayButtonText}</span>
            </button>

            <button
              onClick={handleBurst}
              className="px-6 py-3.5 rounded-full glass-panel text-rose-300 border border-rose-400/40 hover:bg-rose-500/20 transition-all flex items-center gap-2 font-medium cursor-pointer shadow-pink-glow"
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span>Shower Love ♡</span>
            </button>
          </div>

          {/* Signature Tag */}
          <div className="mt-8 pt-6 border-t border-gold-400/20 text-center">
            <p className="font-script text-2xl text-gold-300">
              {birthdayData.dudu.tagline}
            </p>
            <p className="text-[11px] text-champagne/50 mt-1 uppercase tracking-wider">
              Forever with Bubu • Happy Birthday
            </p>
          </div>
        </motion.div>

        {/* Minimal Footer */}
        <footer className="mt-14 text-center text-xs text-champagne/50">
          <p className="flex items-center justify-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Bubu's Special Day
          </p>
          <p className="mt-1 text-[11px] text-champagne/40">
            A Premium Bubu & Dudu Birthday Surprise Experience
          </p>
        </footer>

      </div>
    </section>
  );
};
