import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Gift, Sparkles, Heart, X, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayData } from '../../config/birthdayData';

export const SurpriseSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleOpenGift = () => {
    setIsOpen(true);
    // Sparkly celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#FFD700', '#DFAC46', '#FF758F', '#FFF0BD'],
      zIndex: 2000,
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="surprise" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-rose-500/10 via-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium mb-3 shadow-gold-glow"
        >
          <Gift className="w-4 h-4 text-rose-accent" />
          <span>Section 4 • {birthdayData.surpriseSection.badge}</span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-300 text-glow-gold"
        >
          {birthdayData.surpriseSection.title}
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-champagne/80 text-sm sm:text-base max-w-xl mx-auto"
        >
          {birthdayData.surpriseSection.subtitle}
        </motion.p>
      </div>

      {/* Interactive 3D Luxury Gift Box Card */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.04, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpenGift}
          className="group relative cursor-pointer"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 via-rose-500/25 to-gold-400/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

          {/* Gift Box Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl glass-panel p-6 flex flex-col items-center justify-center border-2 border-gold-400/50 shadow-glass-card group-hover:border-gold-300 transition-all duration-300">
            
            {/* Hanging Tag */}
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/30 text-gold-200 text-xs font-serif shadow">
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
              <span>For Bubu</span>
            </div>

            {/* Animated Luxury Gift Box Illustration */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Box Base (Black obsidian with gold ribbons) */}
              <div className="relative w-28 h-28 bg-gradient-to-b from-[#1c1626] to-[#0d0914] rounded-2xl border border-gold-400/60 shadow-2xl flex items-center justify-center">
                
                {/* Vertical Gold Ribbon */}
                <div className="absolute top-0 bottom-0 w-6 bg-gradient-to-r from-gold-300 via-amber-400 to-gold-600 shadow-sm" />
                
                {/* Horizontal Gold Ribbon */}
                <div className="absolute left-0 right-0 h-6 bg-gradient-to-b from-gold-300 via-amber-400 to-gold-600 shadow-sm" />
                
                {/* Center Wax Seal / Bow */}
                <div className="relative z-10 w-11 h-11 rounded-full bg-gradient-to-tr from-rose-600 via-rose-400 to-amber-300 shadow-pink-glow flex items-center justify-center border border-white/40 group-hover:rotate-12 transition-transform">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Sparkle effects around the box */}
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
              >
                <Sparkles className="absolute top-0 left-2 w-5 h-5 text-gold-300 animate-pulse" />
                <Sparkles className="absolute bottom-2 right-2 w-4 h-4 text-rose-300 animate-pulse" />
              </motion.div>
            </div>

            {/* Tap instruction */}
            <div className="mt-4 text-center">
              <span className="text-sm font-medium text-gold-300 group-hover:text-gold-200 transition-colors flex items-center justify-center gap-1.5">
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span>{birthdayData.surpriseSection.openBoxInstruction}</span>
              </span>
              <p className="text-[11px] text-champagne/60 mt-1">
                Click to open your special surprise
              </p>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Birthday Love Letter Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Letter Content Card */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl my-8 rounded-3xl glass-panel-pink border-2 border-gold-400/50 p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full glass-panel text-champagne hover:text-white hover:bg-rose-500/30 transition-colors cursor-pointer border border-gold-400/30"
                aria-label="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Header */}
              <div className="text-center mb-6 pb-4 border-b border-gold-400/30">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-gold-300 text-xs mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>A Special Letter from Dudu</span>
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                </div>
                <h3 className="font-script text-3xl sm:text-4xl text-rose-300 text-glow-pink">
                  {birthdayData.surpriseSection.letterHeader}
                </h3>
                <p className="font-serif italic text-gold-300/90 text-sm mt-1">
                  {birthdayData.surpriseSection.letterSalutation}
                </p>
              </div>

              {/* Letter Body Paragraphs */}
              <div className="space-y-4 font-serif text-sm sm:text-base leading-relaxed text-champagne/95">
                {birthdayData.surpriseSection.letterParagraphs.map((para, i) => (
                  <p key={i} className="indent-4 sm:indent-6">
                    {para}
                  </p>
                ))}
              </div>

              {/* Letter Sign-off & Stamp */}
              <div className="mt-8 pt-6 border-t border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center">
                    <Heart className="w-5 h-5 fill-rose-accent text-rose-300" />
                  </div>
                  <div>
                    <p className="text-xs text-champagne/70 font-sans">
                      {birthdayData.surpriseSection.letterClosing}
                    </p>
                    <p className="font-script text-2xl text-gold-300 font-bold">
                      {birthdayData.surpriseSection.letterSignature}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="gold-gradient-btn px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer shadow-gold-glow"
                >
                  Keep in My Heart ♡
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
