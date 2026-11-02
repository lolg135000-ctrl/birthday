export interface MemoryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  dateTag: string;
  tagline: string;
}

export interface BirthdayConfig {
  bubu: {
    name: string;
    description: string;
    greeting: string;
    title: string;
    subtitle: string;
    nickname: string;
  };
  dudu: {
    name: string;
    description: string;
    tagline: string;
  };
  woodenSigns: string[];
  cakeSection: {
    title: string;
    subtitle: string;
    buttonText: string;
    relightButtonText: string;
    wishingStatus: string;
    wishGrantedTitle: string;
    wishGrantedMessage: string;
  };
  surpriseSection: {
    badge: string;
    title: string;
    subtitle: string;
    openBoxInstruction: string;
    letterHeader: string;
    letterSalutation: string;
    letterParagraphs: string[];
    letterClosing: string;
    letterSignature: string;
  };
  gallerySection: {
    badge: string;
    title: string;
    subtitle: string;
    items: MemoryItem[];
  };
  finaleSection: {
    title: string;
    blessingQuote: string;
    celebrationText: string;
    replayButtonText: string;
  };
  audio: {
    title: string;
    artist: string;
    src: string; // Soft acoustic birthday melody
  };
}

export const birthdayData: BirthdayConfig = {
  bubu: {
    name: "Bubu",
    description: "The sweetest girl bear who lights up every room with her warm smile and cute pink bow.",
    greeting: "Happy Birthday",
    title: "Happy Birthday Bubu!",
    subtitle: "May all your dreams come true... Stay happy, always! ♡",
    nickname: "My Cutest Panda-Bear",
  },
  dudu: {
    name: "Dudu",
    description: "The loyal boy bear in his comfy dark hoodie, always by Bubu's side with warmth and surprises.",
    tagline: "With lots of love ♥ - Dudu",
  },
  woodenSigns: [
    "Be Happy ♥",
    "Be Healthy ♥",
    "Be Loved ♥",
    "Always ♥",
  ],
  cakeSection: {
    title: "Make a Birthday Wish",
    subtitle: "Close your eyes, hold your wish tight in your heart, and blow out the candles together with Dudu!",
    buttonText: "✨ Make a Wish & Blow Candles ✨",
    relightButtonText: "🔥 Relight the Candles",
    wishingStatus: "Whispering your wish to the universe...",
    wishGrantedTitle: "✨ Your Wish Has Been Made! ✨",
    wishGrantedMessage: "May the upcoming year surround you with gentle blessings, laughter, and infinite love!",
  },
  surpriseSection: {
    badge: "A Special Gift For You",
    title: "Dudu's Birthday Surprise",
    subtitle: "A heartfelt gift wrapped in black and tied with golden ribbons, just for Bubu.",
    openBoxInstruction: "Tap the gift box to reveal your birthday letter",
    letterHeader: "My Dearest Bubu,",
    letterSalutation: "Happy Birthday to the most precious person in my world!",
    letterParagraphs: [
      "From the very first moment we shared laughs and stories, every single day has been brighter simply because you are in it. Your gentle kindness, your infectious giggles, and the way your eyes sparkle when you smile make everything in life feel special.",
      "Just like Bubu & Dudu, no matter where life leads us, I promise to always celebrate your victories, cheer you up on gloomy days, bring you your favorite treats, and protect your sweet smile with all my heart.",
      "Today is your day—a celebration of how wonderfully unique and lovely you are. May this new year of your life be filled with gentle peace, grand adventures, dreams accomplished, and endless reasons to smile."
    ],
    letterClosing: "With all my heart and infinite love,",
    letterSignature: "Yours always, Dudu ♥",
  },
  gallerySection: {
    badge: "Our Treasured Moments",
    title: "The Bubu & Dudu Memory Album",
    subtitle: "Little slices of sweet memories, cuddles, and heartwarming adventures together.",
    items: [
      {
        id: "1",
        image: "/images/memory-hug.png",
        title: "The Warmest Hugs",
        caption: "Whenever you feel tired, remember there is always a warm bear hug waiting for you.",
        dateTag: "Always & Forever",
        tagline: "Infinite Love",
      },
      {
        id: "2",
        image: "/images/memory-boba.png",
        title: "Sweet Boba Dates",
        caption: "Sharing sweet milk tea, silly jokes, and delicious desserts that make our hearts happy.",
        dateTag: "Sweet Cravings",
        tagline: "Sugar & Smiles",
      },
      {
        id: "3",
        image: "/images/memory-sleep.png",
        title: "Starry Night Lullaby",
        caption: "Tucking you under cozy blankets under the moon and stars for peaceful, sweet dreams.",
        dateTag: "Goodnight Wishes",
        tagline: "Cozy Night",
      },
      {
        id: "4",
        image: "/images/memory-candle.png",
        title: "Candlelight Wishes",
        caption: "Sitting side-by-side, sharing birthday cake and promising to cherish each other every day.",
        dateTag: "Celebration",
        tagline: "Together Always",
      },
      {
        id: "5",
        image: "/images/memory-cake-party.png",
        title: "Birthday Party Hats",
        caption: "Wearing cute colorful party hats and counting down to the happiest day of the year!",
        dateTag: "Party Time",
        tagline: "Pure Joy",
      },
      {
        id: "6",
        image: "/images/memory-snacks.png",
        title: "Treats & Piggy Cake",
        caption: "Unwrapping goodie boxes and cutting the cutest celebratory cake together with giant smiles.",
        dateTag: "Delicious Memories",
        tagline: "Yummy Moments",
      },
    ],
  },
  finaleSection: {
    title: "May All Your Wishes Come True",
    blessingQuote: "May your life always be filled with happiness, love and beautiful memories.",
    celebrationText: "Celebrate big today, Bubu! You deserve all the magic, joy, and wonderful gifts the world has to offer.",
    replayButtonText: "✨ Relive the Surprise ✨",
  },
  audio: {
    title: "Happy Birthday Piano Melody",
    artist: "Romantic Music Box",
    src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=happy-birthday-to-you-piano-version-13976.mp3",
  },
};
