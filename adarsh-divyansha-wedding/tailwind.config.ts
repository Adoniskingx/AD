import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F0E3',
          light: '#FFF9EF',
          dark: '#EADFC9',
        },
        royalBlue: {
          DEFAULT: '#1E3A8A',
          dark: '#0F172A',
          light: '#3B82F6',
        },
        saffron: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
        },
        gold: {
          DEFAULT: '#B5965A',
          light: '#D4AF37',
        },
        darkCharcoal: '#291C1A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
