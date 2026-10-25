import React, { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-11-14T19:00:00+05:30').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 max-w-xl mx-auto px-4 text-center space-y-4">
      <h3 className="text-amber-100 font-serif text-xl md:text-2xl font-medium tracking-wide drop-shadow">
        Counting down with love
      </h3>

      <div className="bg-[#16100F]/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border-2 border-amber-500/40 shadow-2xl space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          
          <div className="bg-stone-950/80 p-4 rounded-2xl border border-amber-500/20 shadow-inner">
            <span className="text-3xl font-serif text-amber-200 font-bold block">{timeLeft.days}</span>
            <p className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] mt-1 font-serif">Days</p>
          </div>

          <div className="bg-stone-950/80 p-4 rounded-2xl border border-amber-500/20 shadow-inner">
            <span className="text-3xl font-serif text-amber-200 font-bold block">{timeLeft.hours}</span>
            <p className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] mt-1 font-serif">Hours</p>
          </div>

          <div className="bg-stone-950/80 p-4 rounded-2xl border border-amber-500/20 shadow-inner">
            <span className="text-3xl font-serif text-amber-200 font-bold block">{timeLeft.minutes}</span>
            <p className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] mt-1 font-serif">Minutes</p>
          </div>

          <div className="bg-stone-950/80 p-4 rounded-2xl border border-amber-500/20 shadow-inner">
            <span className="text-3xl font-serif text-amber-200 font-bold block">{timeLeft.seconds}</span>
            <p className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] mt-1 font-serif">Seconds</p>
          </div>

        </div>
      </div>
    </section>
  );
}
