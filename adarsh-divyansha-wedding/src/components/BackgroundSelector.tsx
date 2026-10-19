import React from 'react';
import { Palette } from 'lucide-react';

interface BackgroundSelectorProps {
  currentBg: string;
  setBg: (bg: string) => void;
}

export const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({ currentBg, setBg }) => {
  const themes = [
    { id: '/Photos/buddha-bg1.jpeg', name: 'Theme 1: Sacred & Cultural (Ambedkar & Buddha)' },
    { id: '/Photos/buddha-bg2.jpeg', name: 'Theme 2: Warm Golden Meditative' },
    { id: '/Photos/buddha-bg3.jpg', name: 'Theme 3: Modern Minimalist Halo' },
    { id: '/Photos/buddha-bg4.jpg', name: 'Theme 4: Cinematic Chiaroscuro' },
     { id: '/Photos/buddha-bg.jpg', name: 'Theme 5: Buddha Dark' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-stone-900/90 backdrop-blur-md border border-amber-500/50 p-3 rounded-2xl shadow-2xl flex items-center gap-2">
      <Palette className="w-5 h-5 text-amber-400 flex-shrink-0" />
      <select 
        value={currentBg} 
        onChange={(e) => setBg(e.target.value)}
        aria-label="Select background theme"
        className="bg-stone-950 text-amber-200 text-xs sm:text-sm font-serif py-2 px-3 rounded-xl border border-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>
    </div>
  );
};

export default BackgroundSelector;
