import React, { useState } from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Carousel from './components/Carousel';
import Functions from './components/Functions';
import ThingsToKnow from './components/ThingsToKnow';
import Video from './components/Video';
import { Invitation } from './components/Invitation';
import Footer from './components/Footer';
import BackgroundSelector from './components/BackgroundSelector';

export const App: React.FC = () => {
  // Default to Theme 2 (Warm Golden Meditative), switchable via dropdown
  const [bgImage, setBgImage] = useState('/Photos/buddha-bg2.jpg');

  return (
    <div className="relative min-h-screen text-[#FDF8F0] overflow-x-hidden">
      {/* Dynamic Background Artwork Layer */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-all duration-700 z-0 opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Soft Dark Overlay to guarantee 100% text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0D0C0B]/75 via-[#0D0C0B]/88 to-[#0D0C0B]/96 pointer-events-none z-1" />

      {/* Main Site Content */}
      <main className="relative z-10 space-y-12 py-6">
        <Hero />
        <Couple />
        <Invitation />
        <Carousel />
        <Functions />
        <Video />
        <ThingsToKnow />
        <Footer />
      </main>

      {/* Interactive Background Theme Selector Widget */}
      <BackgroundSelector currentBg={bgImage} setBg={setBgImage} />
    </div>
  );
};

export default App;
