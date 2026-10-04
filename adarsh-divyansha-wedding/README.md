# Adarsh weds Divyansha — Wedding Website

A mobile-first luxury Indian wedding invitation built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Run

```bash
npm install
npm run dev
```

## Required assets

Add these files to `public/`:

- `public/temple-mandap.png` — transparent temple/mandap artwork used in the cinematic hero.
- `public/couple/couple-1.jpg`
- `public/couple/couple-2.jpg`
- `public/couple/couple-3.jpg`
- `public/music/wedding-theme.mp3`
- `public/og-wedding.jpg`

The code gracefully falls back if the image assets are not present.

## Edit wedding details

All editable content is centralized in:

`src/data/weddingData.ts`

Replace placeholder venue/contact/video details there.

## Portal transition

The hero uses normal document scrolling—no scroll lock and no fake runway. Framer Motion reads natural scroll progress to:
- scale the temple artwork,
- split it into clipped left and right halves,
- open the halves outward,
- reveal a warm center glow,
- fade into the ivory invitation section.

`prefers-reduced-motion` disables the portal effect and leaves a static temple.

## Notes

RSVP is validated client-side but is not sent to a backend. Wishes are stored locally in `localStorage` for the current browser/device.