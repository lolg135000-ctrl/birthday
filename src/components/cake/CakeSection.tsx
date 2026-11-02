import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sparkles, Flame, Heart, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayData } from '../../config/birthdayData';

export const CakeSection: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [isWishing, setIsWishing] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMakeWish = () => {
    if (!candlesLit || isWishing) return;

    setIsWishing(true);

    // 2-second romantic pause to make a wish before blowing
    setTimeout(() => {
      setCandlesLit(false);
      setIsWishing(false);
      setWishMade(true);

      // Golden celebratory burst
      confetti({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFB300', '#FF758F', '#FFF'],
        zIndex: 1000,
      });
    }, 1800);
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setWishMade(false);
  };

  return (
    <section id="cake" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium mb-3 shadow-gold-glow"
        >
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Section 3 • Cake Celebration</span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-300 text-glow-gold"
        >
          {birthdayData.cakeSection.title}
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-champagne/80 text-sm sm:text-base max-w-xl mx-auto"
        >
          {birthdayData.cakeSection.subtitle}
        </motion.p>
      </div>

      {/* Cake Interactive Display */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-full max-w-md mx-auto">
          
          {/* Candle Flame Overlay positioned above the cake image */}
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-gold-400/30 p-4 shadow-glass-card">
            
            {/* Candle Flames Anchor */}
            <div className="absolute top-7 left-0 right-0 z-20 flex justify-center items-center pointer-events-none">
              <div className="w-[180px] sm:w-[220px] flex justify-between px-2">
                {[0, 1, 2, 3].map((candleIndex) => (
                  <div key={candleIndex} className="relative flex flex-col items-center">
                    <AnimatePresence>
                      {candlesLit && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0, y: -15 }}
                          transition={{ duration: 0.4 }}
                          className="relative flex flex-col items-center"
                        >
                          {/* Inner Candle Flame */}
                          <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white candle-flame shadow-candle-glow" />
                          {/* Golden halo glow */}
                          <div className="absolute -inset-2 rounded-full bg-amber-400/30 blur-sm pointer-events-none animate-pulse" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {!candlesLit && (
                      <motion.div
                        initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                        animate={{ opacity: 0, y: -24, scale: 1.5 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="w-1.5 h-1.5 rounded-full bg-gray-300/60 blur-[1px]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Birthday Cake Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-obsidian-900/60 to-obsidian-950">
              <img
                src="/images/cake-clean.png"
                alt="Bubu & Dudu Birthday Cake"
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
              />

              {/* Heart Plaque Ribbon Label */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full glass-panel border-gold-400/40 text-gold-300 text-xs font-serif flex items-center gap-1.5 shadow">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                <span>Sweet Strawberry & Chocolate Cake for Bubu</span>
              </div>
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {candlesLit ? (
              <button
                onClick={handleMakeWish}
                disabled={isWishing}
                className="gold-gradient-btn px-8 py-3.5 rounded-full text-base font-semibold flex items-center gap-2.5 shadow-gold-glow cursor-pointer disabled:opacity-75 disabled:cursor-wait"
              >
                {isWishing ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin text-obsidian-950" />
                    <span>{birthdayData.cakeSection.wishingStatus}</span>
                  </>
                ) : (
                  <>
                    <Flame className="w-5 h-5 text-amber-900 fill-amber-700" />
                    <span>{birthdayData.cakeSection.buttonText}</span>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleRelight}
                className="px-6 py-3 rounded-full glass-panel text-gold-300 border border-gold-400/50 hover:bg-gold-500/20 transition-all flex items-center gap-2 font-medium cursor-pointer shadow-gold-glow"
              >
                <RotateCcw className="w-4 h-4 text-gold-400" />
                <span>{birthdayData.cakeSection.relightButtonText}</span>
              </button>
            )}
          </div>

          {/* Wish Granted Modal / Notification */}
          <AnimatePresence>
            {wishMade && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="mt-6 p-6 rounded-2xl glass-panel-pink border border-rose-400/50 text-center shadow-pink-glow max-w-md mx-auto"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300">
                  <Heart className="w-6 h-6 fill-rose-400 text-rose-300 animate-bounce" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-gold-300 font-semibold mb-2">
                  {birthdayData.cakeSection.wishGrantedTitle}
                </h4>
                <p className="text-sm text-champagne/90 leading-relaxed font-sans">
                  {birthdayData.cakeSection.wishGrantedMessage}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-rose-200">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Dudu is cheering for every dream you wished for!</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
