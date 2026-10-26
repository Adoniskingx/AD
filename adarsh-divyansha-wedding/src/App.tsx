import React, { useState } from 'react';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export function App() {
  // Font Size States per Section (percentage scale)
  const [heroFontSize, setHeroFontSize] = useState('100%');
  const [functionsFontSize, setFunctionsFontSize] = useState('100%');
  const [galleryFontSize, setGalleryFontSize] = useState('100%');
  const [videoFontSize, setVideoFontSize] = useState('100%');
  const [thingsFontSize, setThingsFontSize] = useState('100%');
  const [footerFontSize, setFooterFontSize] = useState('100%');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      {/* 🎛️ Floating Live Layout & Font Studio Dropdowns */}
      <div className="fixed top-4 right-4 z-50 bg-black/95 border border-amber-500/70 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md w-72 max-h-[85vh] overflow-y-auto space-y-3 text-xs text-amber-100">
        <p className="text-center font-serif text-amber-300 font-bold tracking-wider border-b border-amber-500/30 pb-2 text-sm">
          🎛️ Live Font Studio
        </p>

        {/* Hero Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Hero Font Size</label>
          <select value={heroFontSize} onChange={(e) => setHeroFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="85%">Compact (Small)</option>
            <option value="100%">Standard (Normal)</option>
            <option value="115%">Large (+2)</option>
            <option value="130%">Extra Large (+4)</option>
          </select>
        </div>

        {/* Functions Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Functions Font Size</label>
          <select value={functionsFontSize} onChange={(e) => setFunctionsFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="85%">Compact (Small)</option>
            <option value="100%">Standard (Normal)</option>
            <option value="115%">Large (+2)</option>
            <option value="130%">Extra Large (+4)</option>
          </select>
        </div>

        {/* Gallery Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Gallery Font Size</label>
          <select value={galleryFontSize} onChange={(e) => setGalleryFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="85%">Compact (Small)</option>
            <option value="100%">Standard (Normal)</option>
            <option value="115%">Large (+2)</option>
            <option value="130%">Extra Large (+4)</option>
          </select>
        </div>

        {/* Video Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Video Font Size</label>
          <select value={videoFontSize} onChange={(e) => setVideoFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="85%">Compact (Small)</option>
            <option value="100%">Standard (Normal)</option>
            <option value="115%">Large (+2)</option>
            <option value="130%">Extra Large (+4)</option>
          </select>
        </div>

        {/* Things to Know Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Things to Know Font Size</label>
          <select value={thingsFontSize} onChange={(e) => setThingsFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="85%">Compact (Small)</option>
            <option value="100%">Standard (Normal)</option>
            <option value="115%">Large (+2)</option>
            <option value="130%">Extra Large (+4)</option>
          </select>
        </div>

        {/* Footer Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Footer Font Size</label>
          <select value={footerFontSize} onChange={(e) => setFooterFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="85%">Compact (Small)</option>
            <option value="100%">Standard (Normal)</option>
            <option value="115%">Large (+2)</option>
            <option value="130%">Extra Large (+4)</option>
          </select>
        </div>
      </div>

      {/* Background Layers */}
      <div className="sacred-bg-layer" />
      <div className="sacred-overlay-layer" />

      {/* Main Content Sections with Direct CSS Scaling */}
      <div className="site-content-wrapper">
        <div style={{ zoom: heroFontSize }}>
          <Hero />
        </div>
        <div style={{ zoom: functionsFontSize }}>
          <Functions />
        </div>
        <div style={{ zoom: galleryFontSize }}>
          <Gallery />
        </div>
        <div style={{ zoom: videoFontSize }}>
          <VideoSection />
        </div>
        <div style={{ zoom: thingsFontSize }}>
          <ThingsToKnow />
        </div>
        <div style={{ zoom: footerFontSize }}>
          <Footer />
        </div>
        <MusicPlayer />
      </div>

    </div>
  );
}

export default App;
