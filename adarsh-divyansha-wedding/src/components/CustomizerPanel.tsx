import React, { useState, useEffect } from 'react';

export const CustomizerPanel: React.FC = () => {
  const [cardStyle, setCardStyle] = useState('rgba(26, 24, 22, 0.88)');
  const [textSize, setTextSize] = useState('text-normal');
  const [fontStyle, setFontStyle] = useState('font-serif-custom');

  useEffect(() => {
    // Apply card style (color & opacity) globally via CSS variable
    document.documentElement.style.setProperty('--card-bg', cardStyle);
  }, [cardStyle]);

  useEffect(() => {
    // Apply text size scale class to root body
    document.body.classList.remove('text-scale-sm', 'text-scale-normal', 'text-scale-lg', 'text-scale-xl');
    document.body.classList.add(`text-scale-${textSize}`);
  }, [textSize]);

  useEffect(() => {
    // Apply font family class to root body
    document.body.classList.remove('font-mode-serif', 'font-mode-sans', 'font-mode-script', 'font-mode-classic');
    document.body.classList.add(`font-mode-${fontStyle}`);
  }, [fontStyle]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/90 border border-amber-500/60 p-3 rounded-xl shadow-2xl backdrop-blur-md max-w-xs space-y-2.5">
      <p className="text-xs font-serif text-amber-300 font-semibold tracking-wider text-center border-b border-amber-500/30 pb-1.5">
        🛠️ Live Customizer
      </p>

      {/* 1. Card Color & Opacity Dropdown */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/80 mb-1">
          🎨 Card Color & Opacity
        </label>
        <select 
          value={cardStyle}
          onChange={(e) => setCardStyle(e.target.value)}
          className="w-full bg-[#1A1816] text-amber-100 text-xs border border-amber-500/40 rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
        >
          <option value="rgba(26, 24, 22, 0.88)">Dark Gold (Default 88%)</option>
          <option value="rgba(26, 24, 22, 0.65)">Dark Gold (Transparent 65%)</option>
          <option value="rgba(26, 24, 22, 0.98)">Dark Gold (Solid 98%)</option>
          <option value="rgba(15, 23, 42, 0.90)">Deep Royal Navy (90%)</option>
          <option value="rgba(40, 20, 20, 0.90)">Rich Maroon Tone (90%)</option>
          <option value="rgba(0, 0, 0, 0.85)">Pure Midnight Black (85%)</option>
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
          <option value="sans">Modern Clean (Sans-Serif)</option>
          <option value="script">Handwritten Script</option>
          <option value="classic">Classic Editorial</option>
        </select>
      </div>
    </div>
  );
};

export default CustomizerPanel;
