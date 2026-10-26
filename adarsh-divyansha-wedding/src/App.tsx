import React, { useState } from 'react';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export function App() {
  // Hero Customization States
  const [heroFontSize, setHeroFontSize] = useState('115%'); // Large (+2) default
  const [heroImageShape, setHeroImageShape] = useState('rounded-t-[120px] rounded-b-2xl');
  const [heroImageSize, setHeroImageSize] = useState('w-64 md:w-76 h-80 md:h-96');

  return (
    <div className="min-h-screen relative overflow-x-hidden pt-16">
      
      {/* 🎛️ Fixed Sticky Studio Bar at the Top */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/95 border-b-2 border-amber-400 py-2.5 px-4 shadow-2xl backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs text-amber-100">
          <span className="font-serif text-amber-300 font-bold tracking-wider text-sm flex items-center gap-1">
            🎛️ Hero Studio:
          </span>

          {/* Hero Font Size Dropdown */}
          <div className="flex items-center gap-1.5 bg-[#1A1816] px-2.5 py-1 rounded-lg border border-amber-500/50">
            <label className="text-amber-200 font-medium">Font:</label>
            <select 
              value={heroFontSize} 
              onChange={(e) => setHeroFontSize(e.target.value)} 
              className="bg-black text-amber-100 border border-amber-500/40 rounded px-1.5 py-0.5 focus:outline-none"
            >
              <option value="85%">Compact</option>
              <option value="100%">Standard</option>
              <option value="115%">Large (+2)</option>
              <option value="130%">Extra Large (+4)</option>
            </select>
          </div>

          {/* Hero Image Shape Dropdown */}
          <div className="flex items-center gap-1.5 bg-[#1A1816] px-2.5 py-1 rounded-lg border border-amber-500/50">
            <label className="text-amber-200 font-medium">Shape:</label>
            <select 
              value={heroImageShape} 
              onChange={(e) => setHeroImageShape(e.target.value)} 
              className="bg-black text-amber-100 border border-amber-500/40 rounded px-1.5 py-0.5 focus:outline-none"
            >
              <option value="rounded-t-[120px] rounded-b-2xl">Arched Dome</option>
              <option value="rounded-full">Vertical Oval</option>
              <option value="rounded-2xl">Soft Rectangle</option>
            </select>
          </div>

          {/* Hero Image Size Dropdown */}
          <div className="flex items-center gap-1.5 bg-[#1A1816] px-2.5 py-1 rounded-lg border border-amber-500/50">
            <label className="text-amber-200 font-medium">Size:</label>
            <select 
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'sm') setHeroImageSize('w-48 md:w-56 h-60 md:h-72');
                if (val === 'md') setHeroImageSize('w-64 md:w-76 h-80 md:h-96');
                if (val === 'lg') setHeroImageSize('w-76 md:w-92 h-96 md:h-[450px]');
              }} 
              className="bg-black text-amber-100 border border-amber-500/40 rounded px-1.5 py-0.5 focus:outline-none"
              defaultValue="md"
            >
              <option value="sm">Compact</option>
              <option value="md">Standard</option>
              <option value="lg">Immersive</option>
            </select>
          </div>

        </div>
      </nav>

      {/* Background Layers */}
      <div className="sacred-bg-layer" />
      <div className="sacred-overlay-layer" />

      {/* Main Content Sections */}
      <div className="site-content-wrapper">
        <Hero fontSize={heroFontSize} imageShape={heroImageShape} imageSize={heroImageSize} />
        <Functions />
        <Gallery />
        <VideoSection />
        <ThingsToKnow />
        <Footer />
        <MusicPlayer />
      </div>

    </div>
  );
}

export default App;
