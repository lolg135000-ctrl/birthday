import React from 'react';
import { FloatingCanvas } from './components/common/FloatingCanvas';
import { FairyLights } from './components/common/FairyLights';
import { MusicPlayer } from './components/common/MusicPlayer';
import { HeroSection } from './components/hero/HeroSection';
import { CelebrationSection } from './components/celebration/CelebrationSection';
import { CakeSection } from './components/cake/CakeSection';
import { SurpriseSection } from './components/surprise/SurpriseSection';
import { MemoryGallery } from './components/gallery/MemoryGallery';
import { FinalCelebration } from './components/finale/FinalCelebration';
import { Heart, Sparkles } from 'lucide-react';
import { birthdayData } from './config/birthdayData';

export const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-champagne selection:bg-rose-500/30 selection:text-gold-200">
      {/* Dynamic Floating Particles Canvas */}
      <FloatingCanvas />

      {/* Hanging Golden Fairy Lights */}
      <FairyLights />

      {/* Floating Music Controller */}
      <MusicPlayer />

      {/* Luxury Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 pointer-events-none">
        <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Logo Badge */}
          <div
            onClick={handleReplay}
            className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 border border-gold-400/30 cursor-pointer hover:border-gold-400/60 transition-all shadow-glass-card"
          >
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            <span className="font-script text-xl text-rose-300">
              Bubu & Dudu
            </span>
            <Heart className="w-3.5 h-3.5 fill-rose-accent text-rose-400" />
          </div>

          {/* Nav Links Pill */}
          <nav className="hidden md:flex items-center gap-1.5 glass-panel px-4 py-1.5 rounded-full border border-gold-400/25 shadow-glass-card text-xs font-medium text-champagne/90">
            <button
              onClick={() => scrollToSection('celebration')}
              className="px-3 py-1 rounded-full hover:text-gold-300 hover:bg-gold-500/10 transition-colors cursor-pointer"
            >
              Celebration
            </button>
            <button
              onClick={() => scrollToSection('cake')}
              className="px-3 py-1 rounded-full hover:text-gold-300 hover:bg-gold-500/10 transition-colors cursor-pointer"
            >
              Make a Wish
            </button>
            <button
              onClick={() => scrollToSection('surprise')}
              className="px-3 py-1 rounded-full hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer"
            >
              Surprise Gift
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="px-3 py-1 rounded-full hover:text-gold-300 hover:bg-gold-500/10 transition-colors cursor-pointer"
            >
              Memories
            </button>
          </nav>

          {/* Date / Dedication Pill */}
          <div className="glass-panel px-3.5 py-1.5 rounded-full border border-gold-400/30 text-xs font-serif text-gold-300 flex items-center gap-1.5 shadow">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">Dedicated to</span>
            <span className="font-semibold text-rose-300">{birthdayData.bubu.name}</span>
          </div>
        </div>
      </header>

      {/* Main Sections Content */}
      <main className="relative z-20 space-y-8 sm:space-y-16">
        {/* Section 1: Introduction Greeting */}
        <HeroSection onExploreClick={() => scrollToSection('celebration')} />

        {/* Section 2: Celebration (Flowers, Gift, Confetti) */}
        <CelebrationSection />

        {/* Section 3: Interactive Birthday Cake & Make a Wish */}
        <CakeSection />

        {/* Section 4: Special Surprise Gift Box & Letter */}
        <SurpriseSection />

        {/* Section 5: Memory Gallery with Lightbox */}
        <MemoryGallery />

        {/* Section 6: Final Celebration & Blessing */}
        <FinalCelebration onReplay={handleReplay} />
      </main>
    </div>
  );
};

export default App;
