# Creative Showcase — Form+Fun Homepage Recreation

A recreation of **formandfun.co**’s homepage — rebuilt from scratch with a modern React stack and thoughtful motion design.

> **Live demo:**  
> **Repo:** https://github.com/Kudatee007/creative-showcase.git

---

## Why this exists

This project evaluates practical front‑end skills: **pixel accuracy**, **responsive design**, **animation craft**, **performance**, and **clean code & Git hygiene**. It’s built to be easy to read, easy to extend, and fast.

---

## Features

- **Design Implementation**
  - Precise typography scale with fluid display sizes (`clamp`) and tight leading
  - Monochrome UI (dark-on-light / light-on-dark)
  - Careful spacing & grid rhythm
- **Animations & Interactions**
  - scroll parallax on media
  - Sticky header scrim that **fades in** after a scroll threshold
  - Work cards with hover overlays (slide-up, non-blocking for hover-to-play video)
  - Optional carousel (Embla), drag + autoplay
- **Responsive Design**
  - Mobile-first, fluid type, safe breakpoints: 320 → 1920+
  - Touch-friendly
- **Code Quality**
  - TypeScript 
  - Centralized motion variants in `src/lib/anim.ts`
- **Git Practices**
  - Linear commits with meaningful messages

---

## Tech Stack

- **Build/UI:** Vite + React + TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Motion:** Framer Motion (variants, in-view, scroll transforms)
- **UX polish:** Lenis (smooth scrolling)
- **Media/Carousel:** Embla Carousel (+ Autoplay plugin)
- **Tooling:** ESLint, autoprefixer

---

## Getting Started

> Requires **Node 18+** (or 20+ recommended).

```bash
# 1) Install deps
npm i

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview build
npm run preview
```

### Scripts
- `dev` – Vite dev server
- `build` – TypeScript build + Vite production bundle
- `preview` – Serve the built assets locally
- `lint` – Run ESLint

---

## Project Structure

```
src/
  components/
    Header.tsx
    Hero.tsx
    WorkCard.tsx
    Carousel.tsx
    HoverVideo.tsx
  lib/
    anim.ts          # shared motion variants
    lenis.ts         # smooth scrolling init
  assets/            # images/video
  styles/
    index.css        # tailwind directives
```

---

## Design Tokens (Tailwind)

`tailwind.config.(ts|js):
```ts
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        black: "#1D1D1D",
        gray: "#9A9A9A",
      },
    },
  },
  plugins: [],
};
```

```

---

## Animations & Interactions

**Shared variants** (`src/lib/anim.ts`):
```

```

**Work card overlay (hover, slide-up):**
```html
<div class="group relative">
  <img … />
  <div class="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden lg:block">
    <div class="m-4 flex items-start justify-between opacity-0 translate-y-4
                transition-transform transition-opacity duration-300 ease-out
                group-hover:opacity-100 group-hover:translate-y-0">
      <div class="flex w-full gap-[20%]"><p>Title</p><span>TAG</span></div>
      <button class="pointer-events-auto h-8 w-8 rounded-full bg-white text-black">+</button>
    </div>
  </div>
</div>
```

**Hover‑to‑play video (reusable):** `src/components/HoverVideo.tsx`  
Plays on hover/focus, pauses on leave/blur, with touch fallback.

---

## Performance

- Images as **AVIF/WebP**, dimensioned to prevent CLS
- Video **muted + playsInline**, with `poster` fallback; size ≤ 10–20 MB
- Animations on **transform/opacity** only
- `prefers-reduced-motion` respected (shorter distances/durations)
- Tailwind JIT purge via `content` globs

> Optional: run Lighthouse/Pagespeed and attach `./docs/perf-report.md`.

---

## Accessibility

- Focus-visible rings on interactive elements
- Sufficient color contrast on text
- Keyboard and touch support for hover effects (e.g., videos play on focus)

---

## Cross‑browser Testing

Verified on:
- Chrome (latest), Safari (latest), Firefox (latest)
- iOS Safari (touch), Android Chrome

Notes:
- iOS blocks autoplay with sound; all previews/videos are **muted** and play inline.

---

## Challenges & Solutions

- **Hover overlays stopping hover-to-play**: overlay steals pointer → video pauses.  
  **Fix:** move play/pause to the **card wrapper** and set overlay `pointer-events-none`; re-enable on clickable bits only.
- **Display toggles don’t animate**: `display: none → flex` won’t transition.  
  **Fix:** keep element mounted; animate `opacity/transform`.

---

---

## How to Deploy

Any static host works (Vercel, Netlify, GitHub Pages). For Vercel:

1. Push to GitHub
2. Import the repo in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

---

## License

MIT © TIMILEHIN