import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayData } from '../../config/birthdayData';

export const CelebrationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fireConfetti = () => {
    // Multi-stage luxury golden & pink confetti blast
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#FFD700', '#FFA000', '#FFF8E1'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#FF758F', '#FFB8C6', '#FFCCD5'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#DFAC46', '#FF6B8B', '#FFE082'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#FFF', '#FFD54F'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#FF4081', '#FFD700'],
    });
  };

  return (
    <section id="celebration" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-pink border-rose-400/40 text-rose-300 text-xs sm:text-sm font-medium mb-3 shadow-pink-glow"
        >
          <Sparkles className="w-4 h-4 text-rose-accent" />
          <span>Section 2 • Birthday Celebration</span>
        </motion.div>
        
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-300 text-glow-gold"
        >
          Flowers, Gifts & Infinite Love
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-champagne/80 text-sm sm:text-base max-w-xl mx-auto"
        >
          Bubu holding her fragrant pink roses, and Dudu presenting his special surprise wrapped with gold ribbon!
        </motion.p>
      </div>

      {/* Characters & Signs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Wooden Sign Board */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0, x: -30 } : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 flex flex-col items-center justify-center order-2 lg:order-1"
        >
          <div className="relative glass-panel rounded-2xl p-5 border border-gold-500/30 w-full max-w-xs text-center shadow-lg hover:border-gold-400/60 transition-all">
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bubu's Wish List</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <div className="space-y-2.5">
              {birthdayData.woodenSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="py-2 px-3 rounded-lg bg-obsidian-850/80 border border-gold-400/20 text-champagne-light font-serif text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-gold-500/10 hover:border-gold-400/50 transition-all cursor-default"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/50" />
                  <span className="font-medium">{sign}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-gold-400/20 text-xs text-champagne/60 italic">
              "Every single wish, granted for you."
            </div>
          </div>
        </motion.div>

        {/* Center: Bubu & Dudu Showcase with Interactive Animations */}
        <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
          <div className="relative w-full max-w-lg flex items-end justify-center gap-2 sm:gap-4">
            
            {/* Bubu Holding Flowers */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="relative flex-1 group"
            >
              <div className="relative rounded-2xl overflow-hidden glass-panel-pink p-2 sm:p-3 border border-rose-300/40 shadow-pink-glow">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-rose-950/40 to-obsidian-950/80">
                  <img
                    src="/images/bubu-flowers.png"
                    alt="Bubu holding beautiful pink flowers"
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-rose-500/80 text-[11px] font-medium text-white shadow">
                    Bubu 🌸
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-serif font-semibold text-rose-300">
                    Bubu in Pink Dress
                  </p>
                  <p className="text-[10px] text-rose-200/70">
                    Holding fresh pink roses
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Heart Bridge */}
            <div className="flex flex-col items-center justify-center pb-12">
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-rose-accent border border-rose-400/50 shadow-pink-glow"
              >
                <Heart className="w-5 h-5 fill-rose-accent text-rose-300" />
              </motion.div>
            </div>

            {/* Dudu Holding Gift Box */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="relative flex-1 group"
            >
              <div className="relative rounded-2xl overflow-hidden glass-panel p-2 sm:p-3 border border-gold-400/40 shadow-gold-glow">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-gold-950/40 to-obsidian-950/80">
                  <img
                    src="/images/dudu-gift.png"
                    alt="Dudu in dark hoodie holding birthday gift"
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-amber-600/80 text-[11px] font-medium text-white shadow">
                    Dudu 🎁
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-serif font-semibold text-gold-300">
                    Dudu in Dark Hoodie
                  </p>
                  <p className="text-[10px] text-gold-200/70">
                    Holding black & gold surprise
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Confetti Celebration Button */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <button
              onClick={fireConfetti}
              className="gold-gradient-btn px-6 py-3 rounded-full text-sm sm:text-base font-semibold flex items-center gap-2 cursor-pointer shadow-gold-glow"
            >
              <PartyPopper className="w-4 h-4 text-obsidian-950" />
              <span>Celebrate With Confetti & Hearts!</span>
              <Sparkles className="w-4 h-4 text-obsidian-950" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Dudu's Glowing Heart Sign */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0, x: 30 } : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 flex flex-col items-center justify-center order-3"
        >
          <div className="relative glass-panel rounded-2xl p-5 border border-rose-500/30 w-full max-w-xs text-center shadow-lg hover:border-rose-400/60 transition-all">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full glass-panel-pink flex items-center justify-center text-rose-accent border border-rose-400/40 shadow-pink-glow animate-pulse">
              <Heart className="w-7 h-7 fill-rose-accent text-rose-200" />
            </div>

            <h3 className="font-script text-2xl text-rose-300 mb-1">
              {birthdayData.dudu.tagline}
            </h3>

            <p className="text-xs text-champagne/80 font-sans leading-relaxed">
              "To the sweetest girl in the universe, may this year bring you all the warmth and love you give to others!"
            </p>

            <div className="mt-4 pt-3 border-t border-rose-400/20 flex items-center justify-center gap-1.5 text-xs text-gold-300">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Dedicated to Bubu</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
