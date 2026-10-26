import React, { useState, useEffect } from 'react';

export const BackgroundSelector: React.FC = () => {
  const [bgStyle, setBgStyle] = useState('fixed-cover');

  useEffect(() => {
    // Apply background style class to body or root wrapper
    document.body.className = `bg-mode-${bgStyle}`;
  }, [bgStyle]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 border border-amber-500/50 p-2 rounded-xl shadow-2xl backdrop-blur-md">
      <label className="block text-xs font-serif text-amber-300 mb-1 px-1">
        🎨 Background Style
      </label>
      <select 
        value={bgStyle}
        onChange={(e) => setBgStyle(e.target.value)}
        className="bg-[#1A1816] text-amber-100 text-xs border border-amber-500/40 rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
      >
        <option value="fixed-cover">1. Fixed Full Cover (Cinematic)</option>
        <option value="scroll-fit-screen">2. Single-Screen Fit & Scroll</option>
        <option value="scroll-stretched">3. Elongated Seamless Fill</option>
        <option value="parallax-fixed">4. Parallax Depth Layer</option>
        <option value="centered-watermark">5. Centered Top Watermark</option>
        <option value="gradient-fade">6. Smooth Gradient Blend</option>
      </select>
    </div>
  );
};

export default BackgroundSelector;
