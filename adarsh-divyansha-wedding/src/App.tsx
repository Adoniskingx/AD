import React from 'react';
import Hero from './components/Hero';
import Functions from './components/Functions';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection'; // Import the video component
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

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
        <VideoSection /> {/* Render the video section right here */}
        <ThingsToKnow />
        <Footer />
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
