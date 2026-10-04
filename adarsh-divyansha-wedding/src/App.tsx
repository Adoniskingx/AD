import React from 'react';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import DateReveal from './components/DateReveal';
import Functions from './components/Functions';
import Couple from './components/Couple';
import Carousel from './components/Carousel';
import Instagram from './components/Instagram';
import Video from './components/Video';
import Countdown from './components/Countdown';
import ThingsToKnow from './components/ThingsToKnow';
import RSVP from './components/RSVP';
import Wishes from './components/Wishes';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-ivory text-darkCharcoal selection:bg-gold/30">
      <MusicPlayer />
      <Hero />
      <Invitation />
      <DateReveal />
      <Functions />
      <Couple />
      <Carousel />
      <Countdown />
      <ThingsToKnow />
      <Video />
      <Instagram />
      <RSVP />
      <Wishes />
      <Footer />
    </div>
  );
}

export default App;
