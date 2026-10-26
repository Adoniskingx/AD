import React, { useState, useEffect } from 'react';

export const BackgroundSelector: React.FC = () => {
  const [bgStyle, setBgStyle] = useState('parallax-fixed');

  useEffect(() => {
    document.body.className = `bg-mode-${bgStyle}`;
  }, [bgStyle]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 border border-amber-500/50 p-2 rounded-xl shadow-2xl backdrop-blur-md">
      <label className="block text-xs font-serif text-amber-300 mb-1 px-1">
        🎨 Scrolling Background
      </label>
      <select 
        value={bgStyle}
        onChange={(e) => setBgStyle(e.target.value)}
        className="bg-[#1A1816] text-amber-100 text-xs border border-amber-500/40 rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
      >
        <option value="scroll-repeat-tile">2. Continuous Tiled Repeat</option>
<option value="scroll-vertical-pan">3. Smooth Vertical Flow</option>
<option value="scroll-momentum-drift">4. Dual-Layer Momentum Drift</option>
<option value="repeat-both">5. Full Grid Tile (X & Y Axis)</option>
<option value="repeat-space-fy">6. Balanced Space-Fit Tile</option>
<option value="repeat-compact-half">7. Compact Dense Repeating Tile</option>
<option value="repeat-wide-fit">8. Aspect-Ratio Banner Tile</option>
        <option value="repeat-aspect-y">9. Vertical Aspect-Ratio Banner Tile</option>
        
      </select>
    </div>
  );
};

export default BackgroundSelector;
