import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Carousel from './components/Carousel';
import Functions from './components/Functions';
import ThingsToKnow from './components/ThingsToKnow';
import Video from './components/Video';
import { Invitation } from './components/Invitation';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-[#FDF8F0] overflow-x-hidden bg-stone-950">
      {/* 1. Sacred Background Layer */}
      <div className="sacred-bg-layer" />
      
      {/* 2. Soft Dark Overlay Layer */}
      <div className="sacred-overlay-layer" />

      {/* 3. Main Site Content */}
      <main className="site-content-wrapper space-y-12 py-6">
        <Hero />
        <Countdown />
        <Couple />
        <Invitation />
        <Carousel />
        <Functions />
        <Video />
        <ThingsToKnow />
        <Footer />
      </main>
    </div>
  );
};

export default App;
