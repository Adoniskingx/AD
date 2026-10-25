import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function DateReveal() {
  const [revealed, setRevealed] = useState(false);
  return (
    <section className="bg-ivory-100 px-6 py-20 text-center sm:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Save the date</p>
      <h2 className="serif mt-3 text-4xl text-maroon-950 sm:text-5xl">Reveal the Date</h2>
      <button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        aria-expanded={revealed}
        className="mx-auto mt-10 flex min-h-48 w-full max-w-sm items-center justify-center border border-gold/60 bg-ivory-50 px-8 transition hover:bg-white focus-visible:outline-gold"
      >
        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div key="date" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <CalendarDays className="mx-auto mb-5 h-6 w-6 text-gold" aria-hidden="true" />
              <p className="serif text-3xl text-maroon-700">{weddingData.weddingDateDisplay}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-brown/60">A Saturday to remember</p>
            </motion.div>
          ) : (
            <motion.div key="prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="serif text-2xl text-maroon-700">Tap to unveil</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-brown/55">our wedding day</p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </section>
  );
}