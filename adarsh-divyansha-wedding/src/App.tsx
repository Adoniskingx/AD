import React, { useState } from 'react';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export function App() {
  // Font Size States per Section (Defaulting to your precise requested sizes)
  const [heroFontSize, setHeroFontSize] = useState('115%');     // Large (+2)
  const [functionsFontSize, setFunctionsFontSize] = useState('100%'); // Standard (Normal)
  const [galleryFontSize, setGalleryFontSize] = useState('115%');   // Large (+2)
  const [videoFontSize, setVideoFontSize] = useState('115%');       // Large (+2)
  const [thingsFontSize, setThingsFontSize] = useState('85%');     // Compact (Small)
  const [footerFontSize, setFooterFontSize] = useState('100%');  // Standard (Normal)

  // Layout Studio Dropdown States
  const [sectionSpacing, setSectionSpacing] = useState('py-12');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      {/* 🎛️ Live Layout Studio Bar */}
      <div className="bg-black/90 border-b border-amber-500/40 p-4 relative z-50 text-xs text-amber-100 shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6">
          <span className="font-serif text-amber-300 font-bold tracking-wider">🎛️ Live Font Studio:</span>

          {/* Hero Font Size */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Hero Font:</label>
            <select value={heroFontSize} onChange={(e) => setHeroFontSize(e.target.value)} className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1">
              <option value="85%">Compact</option>
              <option value="100%">Standard</option>
              <option value="115%">Large (+2)</option>
              <option value="130%">Extra Large (+4)</option>
            </select>
          </div>

          {/* Functions Font Size */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Functions Font:</label>
            <select value={functionsFontSize} onChange={(e) => setFunctionsFontSize(e.target.value)} className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1">
              <option value="85%">Compact</option>
              <option value="100%">Standard</option>
              <option value="115%">Large (+2)</option>
              <option value="130%">Extra Large (+4)</option>
            </select>
          </div>

          {/* Gallery Font Size */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Gallery Font:</label>
            <select value={galleryFontSize} onChange={(e) => setGalleryFontSize(e.target.value)} className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1">
              <option value="85%">Compact</option>
              <option value="100%">Standard</option>
              <option value="115%">Large (+2)</option>
              <option value="130%">Extra Large (+4)</option>
            </select>
          </div>

          {/* Video Font Size */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Video Font:</label>
            <select value={videoFontSize} onChange={(e) => setVideoFontSize(e.target.value)} className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1">
              <option value="85%">Compact</option>
              <option value="100%">Standard</option>
              <option value="115%">Large (+2)</option>
              <option value="130%">Extra Large (+4)</option>
            </select>
          </div>

          {/* Things to Know Font Size */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Things Font:</label>
            <select value={thingsFontSize} onChange={(e) => setThingsFontSize(e.target.value)} className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1">
              <option value="85%">Compact</option>
              <option value="100%">Standard</option>
              <option value="115%">Large (+2)</option>
              <option value="130%">Extra Large (+4)</option>
            </select>
          </div>

          {/* Footer Font Size */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Footer Font:</label>
            <select value={footerFontSize} onChange={(e) => setFooterFontSize(e.target.value)} className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1">
              <option value="85%">Compact</option>
              <option value="100%">Standard</option>
              <option value="115%">Large (+2)</option>
              <option value="130%">Extra Large (+4)</option>
            </select>
          </div>

          {/* Section Spacing */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Spacing:</label>
            <select value={sectionSpacing} onChange={(e) => setSectionSpacing(e.target.value)} className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1">
              <option value="py-6">Compact</option>
              <option value="py-12">Standard</option>
              <option value="py-20">Relaxed</option>
            </select>
          </div>

        </div>
      </div>

      {/* Background Layers */}
      <div className="sacred-bg-layer" />
      <div className="sacred-overlay-layer" />

      {/* Main Content Sections with Forced Inline Scaling */}
      <div className="site-content-wrapper">
        <div style={{ fontSize: heroFontSize }} className={sectionSpacing}>
          <Hero />
        </div>
        <div style={{ fontSize: functionsFontSize }} className={sectionSpacing}>
          <Functions />
        </div>
        <div style={{ fontSize: galleryFontSize }} className={sectionSpacing}>
          <Gallery />
        </div>
        <div style={{ fontSize: videoFontSize }} className={sectionSpacing}>
          <VideoSection />
        </div>
        <div style={{ fontSize: thingsFontSize }} className={sectionSpacing}>
          <ThingsToKnow />
        </div>
        <div style={{ fontSize: footerFontSize }} className={sectionSpacing}>
          <Footer />
        </div>
        <MusicPlayer />
      </div>

    </div>
  );
}

export default App;
