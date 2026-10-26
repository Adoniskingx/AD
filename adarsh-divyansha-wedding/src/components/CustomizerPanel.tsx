import React, { useState, useEffect } from 'react';

export const CustomizerPanel: React.FC = () => {
  const [cardTheme, setCardTheme] = useState('dark-gold');
  const [textSize, setTextSize] = useState('normal');
  const [fontStyle, setFontStyle] = useState('serif-custom');

  useEffect(() => {
    document.body.classList.remove('theme-dark-gold', 'theme-royal-navy', 'theme-maroon', 'theme-emerald', 'theme-ivory', 'theme-midnight');
    document.body.classList.add(`theme-${cardTheme}`);
  }, [cardTheme]);

  useEffect(() => {
    document.body.classList.remove('text-scale-sm', 'text-scale-normal', 'text-scale-lg', 'text-scale-xl');
    document.body.classList.add(`text-scale-${textSize}`);
  }, [textSize]);

  useEffect(() => {
    document.body.classList.remove('font-mode-serif-custom', 'font-mode-sans', 'font-mode-script', 'font-mode-classic', 'font-mode-playfair', 'font-mode-cormorant');
    document.body.classList.add(`font-mode-${fontStyle}`);
  }, [fontStyle]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/90 border border-amber-500/60 p-3 rounded-xl shadow-2xl backdrop-blur-md max-w-xs space-y-2.5">
      <p className="text-xs font-serif text-amber-300 font-semibold tracking-wider text-center border-b border-amber-500/30 pb-1.5">
        🛠️ Invitation Customizer
      </p>

      {/* 1. Color Theme & Opacity Dropdown */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/80 mb-1">
          🎨 Card Color & Theme
        </label>
        <select 
          value={cardTheme}
          onChange={(e) => setCardTheme(e.target.value)}
          className="w-full bg-[#1A1816] text-amber-100 text-xs border border-amber-500/40 rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
        >
          <option value="dark-gold">Dark Gold (Default Elegant)</option>
          <option value="royal-navy">Royal Navy Blue (Deep)</option>
          <option value="maroon">Royal Velvet Maroon</option>
          <option value="emerald">Deep Emerald Green</option>
          <option value="ivory">Classic Ivory & Gold</option>
          <option value="midnight">Midnight Obsidian Black</option>
        </select>
      </div>

      {/* 2. Text Size Dropdown */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/80 mb-1">
          📏 Website Text Size
        </label>
        <select 
          value={textSize}
          onChange={(e) => setTextSize(e.target.value)}
          className="w-full bg-[#1A1816] text-amber-100 text-xs border border-amber-500/40 rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
        >
          <option value="sm">Compact (Small)</option>
          <option value="normal">Standard (Normal)</option>
          <option value="lg">Expanded (Large)</option>
          <option value="xl">Magnified (Extra Large)</option>
        </select>
      </div>

      {/* 3. Font Style Dropdown */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/80 mb-1">
          ✍️ Website Font Style
        </label>
        <select 
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
          className="w-full bg-[#1A1816] text-amber-100 text-xs border border-amber-500/40 rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
        >
          <option value="serif-custom">Traditional Serif (Default)</option>
          <option value="playfair">Playfair Display (Luxury)</option>
          <option value="cormorant">Cormorant Garamond (Royal)</option>
          <option value="sans">Modern Clean (Sans-Serif)</option>
          <option value="script">Handwritten Script</option>
          <option value="classic">Classic Editorial</option>
        </select>
      </div>
    </div>
  );
};

export default CustomizerPanel;
