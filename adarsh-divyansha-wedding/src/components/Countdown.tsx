import { useEffect, useMemo, useState } from "react";
import { weddingData } from "../data/weddingData";

function getRemaining() {
  const ms = Math.max(0, new Date(weddingData.weddingDateISO).getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining());
  useEffect(() => {
    const id = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const items = useMemo(() => Object.entries(remaining), [remaining]);

  return (
    <section className="bg-ivory-50 px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Until forever begins</p>
      <h2 className="serif mt-3 text-4xl text-maroon-950">Counting down with love</h2>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px border border-gold/30 bg-gold/30 sm:grid-cols-4" role="timer" aria-live="polite">
        {items.map(([label, value]) => (
          <div key={label} className="bg-ivory-50 px-4 py-8">
            <div className="serif text-4xl text-maroon-700">{String(value).padStart(2, "0")}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-brown/55">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}