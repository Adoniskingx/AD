import { useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      try {
        await audio.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audio} src={weddingData.music.src} loop preload="none" />
      <button onClick={toggle} aria-label={playing ? "Pause wedding music" : "Play wedding music"} className="grid h-12 w-12 place-items-center border border-gold/60 bg-ivory-50 text-maroon-700 shadow-soft">
        {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
    </div>
  );
}