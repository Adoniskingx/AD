import React, { useState, useEffect } from 'react';

export const CustomizerPanel: React.FC = () => {
  // Font Size States per Section
  const [heroFontSize, setHeroFontSize] = useState('normal');
  const [functionsFontSize, setFunctionsFontSize] = useState('normal');
  const [galleryFontSize, setGalleryFontSize] = useState('normal');
  const [videoFontSize, setVideoFontSize] = useState('normal');
  const [thingsFontSize, setThingsFontSize] = useState('normal');
  const [footerFontSize, setFooterFontSize] = useState('normal');

  // Image, Video & Gallery Shape/Size States
  const [heroImageShape, setHeroImageShape] = useState('arch');
  const [heroImageSize, setHeroImageSize] = useState('md');
  const [videoSize, setVideoSize] = useState('standard');
  const [gallerySize, setGallerySize] = useState('standard');

  useEffect(() => {
    // Apply classes to root body for global control
    document.body.className = `
      hero-font-${heroFontSize} 
      func-font-${functionsFontSize} 
      gallery-font-${galleryFontSize} 
      video-font-${videoFontSize} 
      things-font-${thingsFontSize} 
      footer-font-${footerFontSize}
      hero-shape-${heroImageShape}
      hero-imgsize-${heroImageSize}
      video-size-${videoSize}
      gallery-size-${gallerySize}
    `;
  }, [heroFontSize, functionsFontSize, galleryFontSize, videoFontSize, thingsFontSize, footerFontSize, heroImageShape, heroImageSize, videoSize, gallerySize]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/95 border border-amber-500/70 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md w-72 max-h-[85vh] overflow-y-auto space-y-3 text-xs text-amber-100">
      <p className="text-center font-serif text-amber-300 font-bold tracking-wider border-b border-amber-500/30 pb-2 text-sm">
        🎛️ Live Layout & Font Studio
      </p>

      {/* Hero Section Font Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Hero Section Font Size</label>
        <select value={heroFontSize} onChange={(e) => setHeroFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="sm">Compact (Small)</option>
          <option value="normal">Standard (Normal)</option>
          <option value="lg">Large (+2)</option>
          <option value="xl">Extra Large (+4)</option>
        </select>
      </div>

      {/* Functions Section Font Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Functions Font Size</label>
        <select value={functionsFontSize} onChange={(e) => setFunctionsFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="sm">Compact (Small)</option>
          <option value="normal">Standard (Normal)</option>
          <option value="lg">Large (+2)</option>
          <option value="xl">Extra Large (+4)</option>
        </select>
      </div>

      {/* Gallery Section Font Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Gallery Font Size</label>
        <select value={galleryFontSize} onChange={(e) => setGalleryFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="sm">Compact (Small)</option>
          <option value="normal">Standard (Normal)</option>
          <option value="lg">Large (+2)</option>
          <option value="xl">Extra Large (+4)</option>
        </select>
      </div>

      {/* Video Section Font Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Video Section Font Size</label>
        <select value={videoFontSize} onChange={(e) => setVideoFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="sm">Compact (Small)</option>
          <option value="normal">Standard (Normal)</option>
          <option value="lg">Large (+2)</option>
          <option value="xl">Extra Large (+4)</option>
        </select>
      </div>

      {/* Things to Know Font Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Things to Know Font Size</label>
        <select value={thingsFontSize} onChange={(e) => setThingsFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="sm">Compact (Small)</option>
          <option value="normal">Standard (Normal)</option>
          <option value="lg">Large (+2)</option>
          <option value="xl">Extra Large (+4)</option>
        </select>
      </div>

      {/* Footer Font Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Footer Font Size</label>
        <select value={footerFontSize} onChange={(e) => setFooterFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="sm">Compact (Small)</option>
          <option value="normal">Standard (Normal)</option>
          <option value="lg">Large (+2)</option>
          <option value="xl">Extra Large (+4)</option>
        </select>
      </div>

      <hr className="border-amber-500/30 my-2" />

      {/* Hero Image Shape */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">🖼️ Hero Image Shape</label>
        <select value={heroImageShape} onChange={(e) => setHeroImageShape(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="arch">Arched Dome-Top</option>
          <option value="oval">Vertical Oval</option>
          <option value="rounded">Soft Rounded Rectangle</option>
          <option value="circle">Perfect Circle</option>
        </select>
      </div>

      {/* Hero Image Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">🔍 Hero Image Size</label>
        <select value={heroImageSize} onChange={(e) => setHeroImageSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="sm">Compact</option>
          <option value="md">Standard (Balanced)</option>
          <option value="lg">Large & Immersive</option>
        </select>
      </div>

      {/* Video Box Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">🎬 Video Box Size</label>
        <select value={videoSize} onChange={(e) => setVideoSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="compact">Compact Height</option>
          <option value="standard">Standard Cinematic</option>
          <option value="large">Large Immersive</option>
        </select>
      </div>

      {/* Gallery Display Size */}
      <div>
        <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📸 Gallery Display Size</label>
        <select value={gallerySize} onChange={(e) => setGallerySize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
          <option value="compact">Compact View</option>
          <option value="standard">Standard View</option>
          <option value="immersive">Immersive Large View</option>
        </select>
      </div>
    </div>
  );
};

export default CustomizerPanel;
