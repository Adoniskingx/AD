import React, { useState } from 'react';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export function App() {
  // Font Size States per Section (pre-configured to your requested layout)
  const [heroFontSize, setHeroFontSize] = useState('115%');     // Large (+2)
  const [functionsFontSize, setFunctionsFontSize] = useState('100%'); // Standard (Normal)
  const [galleryFontSize, setGalleryFontSize] = useState('115%');   // Large (+2)
  const [videoFontSize, setVideoFontSize] = useState('115%');       // Large (+2)
  const [thingsFontSize, setThingsFontSize] = useState('85%');     // Compact (Small)
  const [footerFontSize, setFooterFontSize] = useState('100%');  // Standard (Normal)

  // Layout Studio Dropdown States for Images, Video, and Sections
  const [heroImageShape, setHeroImageShape] = useState('rounded-t-[120px] rounded-b-2xl');
  const [heroImageSize, setHeroImageSize] = useState('w-64 md:w-76 h-80 md:h-96');
  const [videoSize, setVideoSize] = useState('aspect-video');
  const [gallerySize, setGallerySize] = useState('h-[350px] md:h-[420px]');
  const [sectionSpacing, setSectionSpacing] = useState('py-12');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      {/* 🎛️ Clean Collapsible Studio Bar for Sizes & Shapes */}
      <div className="bg-black/90 border-b border-amber-500/40 p-4 relative z-50 text-xs text-amber-100 shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4">
          <span className="font-serif text-amber-300 font-bold tracking-wider">🎛️ Layout Studio:</span>

          {/* Hero Image Shape Dropdown */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Hero Image Shape:</label>
            <select 
              value={heroImageShape} 
              onChange={(e) => setHeroImageShape(e.target.value)} 
              className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1"
            >
              <option value="rounded-t-[120px] rounded-b-2xl">Arched Dome-Top</option>
              <option value="rounded-full">Vertical Oval</option>
              <option value="rounded-2xl">Soft Rectangle</option>
            </select>
          </div>

          {/* Hero Image Size Dropdown */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Hero Image Size:</label>
            <select 
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'sm') setHeroImageSize('w-48 md:w-56 h-60 md:h-72');
                if (val === 'md') setHeroImageSize('w-64 md:w-76 h-80 md:h-96');
                if (val === 'lg') setHeroImageSize('w-76 md:w-92 h-96 md:h-[450px]');
              }} 
              className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1"
              defaultValue="md"
            >
              <option value="sm">Compact</option>
              <option value="md">Standard</option>
              <option value="lg">Immersive Large</option>
            </select>
          </div>

          {/* Video Box Size Dropdown */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Video Box Size:</label>
            <select 
              value={videoSize} 
              onChange={(e) => setVideoSize(e.target.value)} 
              className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1"
            >
              <option value="aspect-video">Standard Cinematic</option>
              <option value="h-[250px] md:h-[350px]">Compact Height</option>
              <option value="h-[400px] md:h-[550px]">Large Immersive</option>
            </select>
          </div>

          {/* Gallery Size Dropdown */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Gallery Size:</label>
            <select 
              value={gallerySize} 
              onChange={(e) => setGallerySize(e.target.value)} 
              className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1"
            >
              <option value="h-[280px] md:h-[340px]">Compact View</option>
              <option value="h-[350px] md:h-[420px]">Standard View</option>
              <option value="h-[450px] md:h-[550px]">Immersive View</option>
            </select>
          </div>

          {/* Section Spacing Dropdown */}
          <div className="flex items-center gap-1.5">
            <label className="text-amber-200">Section Spacing:</label>
            <select 
              value={sectionSpacing} 
              onChange={(e) => setSectionSpacing(e.target.value)} 
              className="bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-md p-1"
            >
              <option value="py-6">Compact Spacing</option>
              <option value="py-12">Standard Spacing</option>
              <option value="py-20">Relaxed Spacing</option>
            </select>
          </div>

        </div>
      </div>

      {/* Background Layers */}
      <div className="sacred-bg-layer" />
      <div className="sacred-overlay-layer" />

      {/* Main Content Sections with Applied Sizes, Shapes, and Font Scales */}
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
