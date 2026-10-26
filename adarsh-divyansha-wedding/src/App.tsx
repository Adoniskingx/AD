import React, { useState } from 'react';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export function App() {
  // Font Size States per Section
  const [heroFontSize, setHeroFontSize] = useState('18px');
  const [functionsFontSize, setFunctionsFontSize] = useState('18px');
  const [galleryFontSize, setGalleryFontSize] = useState('18px');
  const [videoFontSize, setVideoFontSize] = useState('18px');
  const [thingsFontSize, setThingsFontSize] = useState('18px');
  const [footerFontSize, setFooterFontSize] = useState('18px');

  // Image, Video & Gallery Shape/Size States
  const [heroImageShape, setHeroImageShape] = useState('rounded-t-[120px] rounded-b-2xl');
  const [heroImageWidth, setHeroImageWidth] = useState('w-64 md:w-76');
  const [heroImageHeight, setHeroImageHeight] = useState('h-80 md:h-96');
  const [videoHeight, setVideoHeight] = useState('aspect-video');
  const [galleryHeight, setGalleryHeight] = useState('h-[350px] md:h-[420px]');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      {/* 🎛️ Floating Live Layout & Font Studio Dropdowns */}
      <div className="fixed top-4 right-4 z-50 bg-black/95 border border-amber-500/70 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md w-72 max-h-[85vh] overflow-y-auto space-y-3 text-xs text-amber-100">
        <p className="text-center font-serif text-amber-300 font-bold tracking-wider border-b border-amber-500/30 pb-2 text-sm">
          🎛️ Live Layout Studio
        </p>

        {/* Hero Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Hero Font Size</label>
          <select value={heroFontSize} onChange={(e) => setHeroFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="15px">Compact (Small)</option>
            <option value="18px">Standard (Normal)</option>
            <option value="20px">Large (+2)</option>
            <option value="23px">Extra Large (+4)</option>
          </select>
        </div>

        {/* Functions Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Functions Font Size</label>
          <select value={functionsFontSize} onChange={(e) => setFunctionsFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="15px">Compact (Small)</option>
            <option value="18px">Standard (Normal)</option>
            <option value="20px">Large (+2)</option>
            <option value="23px">Extra Large (+4)</option>
          </select>
        </div>

        {/* Gallery Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Gallery Font Size</label>
          <select value={galleryFontSize} onChange={(e) => setGalleryFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="15px">Compact (Small)</option>
            <option value="18px">Standard (Normal)</option>
            <option value="20px">Large (+2)</option>
            <option value="23px">Extra Large (+4)</option>
          </select>
        </div>

        {/* Video Section Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Video Font Size</label>
          <select value={videoFontSize} onChange={(e) => setVideoFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="15px">Compact (Small)</option>
            <option value="18px">Standard (Normal)</option>
            <option value="20px">Large (+2)</option>
            <option value="23px">Extra Large (+4)</option>
          </select>
        </div>

        {/* Things to Know Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Things to Know Font Size</label>
          <select value={thingsFontSize} onChange={(e) => setThingsFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="15px">Compact (Small)</option>
            <option value="18px">Standard (Normal)</option>
            <option value="20px">Large (+2)</option>
            <option value="23px">Extra Large (+4)</option>
          </select>
        </div>

        {/* Footer Font Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📏 Footer Font Size</label>
          <select value={footerFontSize} onChange={(e) => setFooterFontSize(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="15px">Compact (Small)</option>
            <option value="18px">Standard (Normal)</option>
            <option value="20px">Large (+2)</option>
            <option value="23px">Extra Large (+4)</option>
          </select>
        </div>

        <hr className="border-amber-500/30 my-2" />

        {/* Hero Image Shape */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">🖼️ Hero Image Shape</label>
          <select value={heroImageShape} onChange={(e) => setHeroImageShape(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="rounded-t-[120px] rounded-b-2xl">Arched Dome-Top</option>
            <option value="rounded-full">Vertical Oval / Circle</option>
            <option value="rounded-2xl">Soft Rounded Rectangle</option>
          </select>
        </div>

        {/* Hero Image Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">🔍 Hero Image Size</label>
          <select onChange={(e) => {
            const val = e.target.value;
            if (val === 'sm') { setHeroImageWidth('w-48 md:w-56'); setHeroImageHeight('h-60 md:h-72'); }
            if (val === 'md') { setHeroImageWidth('w-64 md:w-76'); setHeroImageHeight('h-80 md:h-96'); }
            if (val === 'lg') { setHeroImageWidth('w-76 md:w-92'); setHeroImageHeight('h-96 md:h-[450px]'); }
          }} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="md">Standard (Balanced)</option>
            <option value="sm">Compact</option>
            <option value="lg">Large & Immersive</option>
          </select>
        </div>

        {/* Video Box Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">🎬 Video Box Size</label>
          <select onChange={(e) => setVideoHeight(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5">
            <option value="aspect-video">Standard Cinematic</option>
            <option value="h-[250px] md:h-[350px]">Compact Height</option>
            <option value="h-[400px] md:h-[550px]">Large Immersive</option>
          </select>
        </div>

        {/* Gallery Display Size */}
        <div>
          <label className="block text-[11px] font-serif text-amber-200/90 mb-1">📸 Gallery Display Size</label>
          <select onChange={(e) => setGalleryGalleryHeight(e.target.value)} className="w-full bg-[#1A1816] text-amber-100 border border-amber-500/40 rounded-lg p-1.5" defaultValue="h-[350px] md:h-[420px]" ref={(node) => {
            // helper ref or handler
          }} onChangeCapture={(e) => setGalleryHeight((e.target as HTMLSelectElement).value)}>
            <option value="h-[280px] md:h-[340px]">Compact View</option>
            <option value="h-[350px] md:h-[420px]">Standard View</option>
            <option value="h-[450px] md:h-[550px]">Immersive Large View</option>
          </select>
        </div>
      </div>

      {/* Background Layers */}
      <div className="sacred-bg-layer" />
      <div className="sacred-overlay-layer" />

      {/* Main Content Sections with Live Custom Styles */}
      <div className="site-content-wrapper">
        <div style={{ fontSize: heroFontSize }}>
          <Hero customShape={heroImageShape} customWidth={heroImageWidth} customHeight={heroImageHeight} />
        </div>
        <div style={{ fontSize: functionsFontSize }}>
          <Functions />
        </div>
        <div style={{ fontSize: galleryFontSize }}>
          <Gallery customHeight={galleryHeight} />
        </div>
        <div style={{ fontSize: videoFontSize }}>
          <VideoSection customHeight={videoHeight} />
        </div>
        <div style={{ fontSize: thingsFontSize }}>
          <ThingsToKnow />
        </div>
        <div style={{ fontSize: footerFontSize }}>
          <Footer />
        </div>
        <MusicPlayer />
      </div>

    </div>
  );
}

export default App;
