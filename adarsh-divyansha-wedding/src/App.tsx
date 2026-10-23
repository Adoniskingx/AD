import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown'; // Added back
import Couple from './components/Couple';
import Carousel from './components/Carousel';
import Functions from './components/Functions';
import ThingsToKnow from './components/ThingsToKnow';
import Video from './components/Video';
import { Invitation } from './components/Invitation';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-[#FDF8F0] overflow-x-hidden">
      {/* Sacred Background Layer */}
      <div className="sacred-bg-layer" />
      
      {/* Soft Dark Gradient Overlay */}
      <div className="sacred-overlay-layer" />

      {/* Main Site Content */}
      <main className="site-content-wrapper space-y-12 py-6">
        <Hero />
        <Countdown /> {/* Countdown / Reveal Section restored here */}
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
