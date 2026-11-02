# Bubu & Dudu Luxury Birthday Surprise Website 🎂✨

A premium, interactive birthday celebration website dedicated to **Bubu**, accompanied by **Dudu**, built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed with a luxury black & golden aesthetic, champagne accents, glowing fairy lights, floating golden particle orbs, romantic pink highlights, and smooth interactive animations.

---

## 🐻 The Characters & Theme

* **Bubu (Girl Bear)**: Cute pink bow and pastel pink dress, holding a bouquet of pink roses.
* **Dudu (Boy Bear)**: Cute dark hoodie, holding a black & gold wrapped gift box.
* **Luxury Theme**: Obsidian black backdrop (`#08060B`), warm fairy lights, champagne gold typography, and rose pink neon glows.

---

## 🌟 Interactive Website Sections

1. **Introduction (Hero)**
   * Animated greeting: *"Happy Birthday Bubu!"* with neon pink glow and golden crown.
   * Floating hero card showcasing Bubu and Dudu together beside the birthday cake.
   * Direct scroll trigger into the celebration.

2. **Birthday Celebration**
   * Bubu holding flowers and Dudu holding his gift box.
   * Iconic wish boards: *"Be Happy ♥ / Be Healthy ♥ / Be Loved ♥ / Always ♥"*.
   * Glowing neon heart: *"With lots of love ♥ - Dudu"*.
   * Interactive golden & rose confetti cannon.

3. **Cake Celebration ("Make a Wish")**
   * 2-tier chocolate & vanilla cake with pink frosting roses and glowing candles.
   * Interactive **"Make a Wish"** button:
     * Countdown and whispering pause.
     * Candle flames extinguish with rising smoke effect.
     * Golden celebration explosion.
     * Wish granted confirmation card with option to relight candles anytime!

4. **Special Surprise (Gift Box & Letter)**
   * Luxury 3D-styled black & gold gift box with silk ribbons and wax seal.
   * Interactive unboxing animation revealing a romantic birthday letter modal for Bubu.
   * Smooth backdrop blur and customizable paragraphs.

5. **Memory Gallery**
   * Polaroid-style glassmorphism cards showcasing Bubu & Dudu memories (starry night lullaby, boba milk tea dates, warm hugs, cake time).
   * Interactive lightbox modal with full image view, captions, and date tags.

6. **Final Celebration**
   * Grand finale featuring celebratory stickers, balloons, and cake.
   * Heartfelt blessing: *"May your life always be filled with happiness, love and beautiful memories."*
   * Replay button to smoothly re-experience the surprise.

7. **Floating Ambient Controls**
   * Realistic golden hanging fairy lights with pulsing bulbs.
   * HTML5 canvas particle system with floating stars, golden orbs, and pink hearts.
   * Floating vinyl audio controller with play/pause and mute toggle.

---

## ✏️ How to Edit Text & Customizations

All text, letters, dates, and memory cards are centralized in one single file:
👉 **[src/config/birthdayData.ts](file:///D:/PROJECT/BITHDAY/src/config/birthdayData.ts)**

You can easily customize:
* `bubu.name`, `bubu.title`, and `bubu.subtitle`
* `dudu.tagline`
* `surpriseSection.letterParagraphs` (edit your personalized birthday letter)
* `gallerySection.items` (add/modify memory photo cards, dates, and captions)
* `finaleSection.blessingQuote`
* `audio.src` (change background music URL)

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the URL shown in terminal).

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## ☁️ Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository (`BITHDAY`).
4. Framework preset will automatically be detected as **Vite**.
5. Click **"Deploy"**. The included [vercel.json](file:///D:/PROJECT/BITHDAY/vercel.json) handles client-side routing rewrites automatically.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<REPO_NAME>/'`.
2. Run `npm run build` and publish the `dist` folder to your `gh-pages` branch.
