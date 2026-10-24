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
      {/* Sacred Background Layer via Public Asset URL */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: `url('/Buddha.png')` }}
      />
      
      {/* Soft Dark Radial Gradient Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(12,10,9,0.3)_0%,rgba(12,10,9,0.85)_100%)]" />

      {/* Main Site Content Wrapper */}
      <main className="relative z-10 space-y-12 py-6">
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
