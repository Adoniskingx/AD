import React from 'react';
import { Hero } from './components/Hero';
import { Functions } from './components/Functions';
import { Gallery } from './components/Gallery';
import { Venue } from './components/Venue';
import { ThingsToKnow } from './components/ThingsToKnow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';

export function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Fixed Sacred Background Layer */}
      <div className="sacred-bg-layer" />
      <div className="sacred-overlay-layer" />

      {/* Main Content */}
      <div className="site-content-wrapper">
        <Hero />
        <Functions />
        <Gallery />
        <Venue />
        <ThingsToKnow />
        <Contact />
        <Footer />
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
