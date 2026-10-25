import React from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Carousel from './components/Carousel';
import Functions from './components/Functions';
import Video from './components/Video';
import ThingsToKnow from './components/ThingsToKnow';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-[#FDF8F0] overflow-x-hidden bg-stone-950">
      
      {/* Sacred Buddha Background Watermark */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url('/Buddha.png')` }}
      />
      
      {/* Dark Ambient Vignette Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(10,7,7,0.3)_0%,rgba(10,7,7,0.92)_100%)]" />

      {/* Main Streamlined Luxury Flow */}
      <main className="relative z-10 space-y-12 py-8 max-w-xl mx-auto px-4">
        <Hero />
        <Invitation />
        <Countdown />
        <Couple />
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
