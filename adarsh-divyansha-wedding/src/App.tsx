import React from 'react';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

export function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Layers */}
      <div className="sacred-bg-layer" />
      <div className="sacred-overlay-layer" />

      {/* Main Content Sections */}
      <div className="site-content-wrapper">
        <Hero />
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
