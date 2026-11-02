import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sparkles, Heart, Camera, X, Maximize2 } from 'lucide-react';
import { birthdayData, MemoryItem } from '../../config/birthdayData';

export const MemoryGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MemoryItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-pink border-rose-400/40 text-rose-300 text-xs sm:text-sm font-medium mb-3 shadow-pink-glow"
        >
          <Camera className="w-4 h-4 text-rose-accent" />
          <span>Section 5 • {birthdayData.gallerySection.badge}</span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-300 text-glow-gold"
        >
          {birthdayData.gallerySection.title}
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-champagne/80 text-sm sm:text-base max-w-xl mx-auto"
        >
          {birthdayData.gallerySection.subtitle}
        </motion.p>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {birthdayData.gallerySection.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer rounded-2xl glass-panel p-3.5 border border-gold-400/25 hover:border-gold-400/70 shadow-glass-card hover:shadow-gold-glow transition-all duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-obsidian-900 border border-gold-400/20">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

              {/* Tag / Badge */}
              <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full glass-panel-pink border-rose-300/40 text-rose-200 text-[11px] font-medium flex items-center gap-1 shadow">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                <span>{item.dateTag}</span>
              </div>

              {/* Zoom Indicator */}
              <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full glass-panel flex items-center justify-center text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Card Details */}
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-gold-400/80 font-medium mb-1">
                  <span>{item.tagline}</span>
                  <Sparkles className="w-3 h-3 text-gold-400" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-gold-200 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-champagne/75 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gold-400/15 flex items-center justify-between text-[11px] text-rose-300">
                <span>Bubu & Dudu Memoir</span>
                <span className="font-serif italic text-gold-300/90 group-hover:translate-x-1 transition-transform">
                  View Story →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl rounded-3xl glass-panel-pink border-2 border-gold-400/50 p-5 sm:p-7 shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass-panel text-champagne hover:text-white hover:bg-rose-500/30 transition-colors cursor-pointer border border-gold-400/30 z-20"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image View */}
              <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/3] bg-obsidian-950 border border-gold-400/30">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Modal Details */}
              <div className="mt-5 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-rose-300 mb-2 border border-rose-400/30">
                  <Heart className="w-3.5 h-3.5 fill-rose-400" />
                  <span>{selectedItem.dateTag} • {selectedItem.tagline}</span>
                </div>
                
                <h3 className="font-serif text-2xl text-gold-300 font-semibold mb-2">
                  {selectedItem.title}
                </h3>
                
                <p className="text-sm text-champagne/90 leading-relaxed max-w-md mx-auto">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="gold-gradient-btn px-6 py-2 rounded-full text-xs sm:text-sm font-semibold cursor-pointer"
                >
                  Close Photo
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
