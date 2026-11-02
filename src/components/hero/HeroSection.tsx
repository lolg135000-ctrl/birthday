import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Crown, Heart, ChevronDown } from 'lucide-react';
import { birthdayData } from '../../config/birthdayData';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-gold-500/15 via-rose-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Crown & Tag Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border-gold-400/40 text-gold-300 text-sm font-medium mb-6 shadow-gold-glow"
        >
          <Crown className="w-4 h-4 text-gold-400 animate-bounce" />
          <span className="tracking-widest uppercase text-xs font-semibold">
            Today is All About Bubu
          </span>
          <Sparkles className="w-4 h-4 text-rose-accent" />
        </motion.div>

        {/* Animated Greeting: Happy Birthday Bubu! */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative mb-4"
        >
          <h1 className="font-script text-4xl sm:text-6xl md:text-7xl text-gold-300 tracking-wide text-glow-gold drop-shadow-lg">
            {birthdayData.bubu.greeting}
          </h1>
          <div className="mt-1 flex items-center justify-center gap-3">
            <span className="font-script text-5xl sm:text-7xl md:text-8xl text-rose-300 tracking-wide text-glow-pink">
              {birthdayData.bubu.name}
            </span>
            <motion.span
              animate={shouldReduceMotion ? {} : { scale: [1, 1.25, 1], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="inline-block text-rose-400"
            >
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 fill-rose-accent text-rose-300 drop-shadow-[0_0_12px_#ff758f]" />
            </motion.span>
          </div>
        </motion.div>

        {/* Subtitle from Reference Image */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-base sm:text-xl md:text-2xl text-champagne/90 max-w-2xl mx-auto px-4 drop-shadow"
        >
          {birthdayData.bubu.subtitle}
        </motion.p>

        {/* Bubu & Dudu Hero Characters Presentation */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="relative mt-8 sm:mt-12 w-full max-w-3xl"
        >
          {/* Visual Showcase Card with Gold Border & Ambient Glow */}
          <div className="relative rounded-3xl p-3 sm:p-5 glass-panel border border-gold-400/30 overflow-hidden shadow-2xl">
            {/* Top Glowing Ambient Accents */}
            <div className="absolute -top-12 left-1/4 w-48 h-48 bg-rose-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 right-1/4 w-48 h-48 bg-gold-500/20 rounded-full blur-2xl pointer-events-none" />

            {/* Reference Image Artwork */}
            <div className="relative rounded-2xl overflow-hidden border border-gold-400/20 group">
              <img
                src="/images/hero-reference.png"
                alt="Bubu & Dudu Birthday Celebration with Cake and Gifts"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge Over Image */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs sm:text-sm text-champagne-light">
                <span className="glass-panel px-3 py-1 rounded-full border-rose-300/30 flex items-center gap-1.5 text-rose-200">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                  Bubu & Dudu Together
                </span>
                <span className="glass-panel px-3 py-1 rounded-full border-gold-400/30 text-gold-300 font-medium">
                  {birthdayData.dudu.tagline}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExploreClick}
            className="gold-gradient-btn px-8 py-3.5 rounded-full text-base sm:text-lg flex items-center gap-2.5 font-semibold group cursor-pointer"
          >
            <span>Unfold the Celebration</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
