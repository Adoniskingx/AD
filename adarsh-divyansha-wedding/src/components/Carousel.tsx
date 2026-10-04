import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const photos = weddingData.couple.photos;
  const move = (delta: number) => setIndex((i) => (i + delta + photos.length) % photos.length);

  return (
    <section className="bg-ivory-50 pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 bg-[#eadfce] sm:aspect-[16/10]">
          <AnimatePresence mode="wait">
            <motion.img
              key={photos[index]}
              src={photos[index]}
              alt={`Adarsh and Divyansha, photo ${index + 1}`}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .45 }}
              className="h-full w-full object-cover"
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                el.parentElement?.classList.add("grid", "place-items-center");
                if (el.parentElement) el.parentElement.dataset.fallback = "Add couple photos to /public/couple/";
              }}
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 grid place-items-center text-center text-sm text-brown/50 before:content-[attr(data-fallback)]" />
          <button aria-label="Previous photo" onClick={() => move(-1)} className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/70 bg-[#291C1A]/45 text-white backdrop-blur-sm">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button aria-label="Next photo" onClick={() => move(1)} className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/70 bg-[#291C1A]/45 text-white backdrop-blur-sm">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2" aria-label="Photo carousel pagination">
          {photos.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Show photo ${i + 1}`} aria-current={i === index} className={`h-1.5 w-8 ${i === index ? "bg-maroon-700" : "bg-gold/35"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}