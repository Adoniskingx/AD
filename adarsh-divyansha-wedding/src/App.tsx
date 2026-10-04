import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import DateReveal from "./components/DateReveal";
import Functions from "./components/Functions";
import Couple from "./components/Couple";
import Carousel from "./components/Carousel";
import Instagram from "./components/Instagram";
import Video from "./components/Video";
import Countdown from "./components/Countdown";
import ThingsToKnow from "./components/ThingsToKnow";
import RSVP from "./components/RSVP";
import Wishes from "./components/Wishes";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Invitation />
      <DateReveal />
      <Functions />
      <Couple />
      <Carousel />
      <Instagram />
      <Video />
      <Countdown />
      <ThingsToKnow />
      <RSVP />
      <Wishes />
      <Footer />
      <MusicPlayer />
    </main>
  );
}