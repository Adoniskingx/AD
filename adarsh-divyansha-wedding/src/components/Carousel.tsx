import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = weddingData.galleryImages;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto text-center relative z-10">
      <div className="mb-6">
        <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif mb-1">
          #DIVYADARSHAN
        </p>
        <h2 className="text-2xl md:text-3xl font-serif text-amber-100 font-medium">
          Our Moments
        </h2>
      </div>

      {/* Main Single Photo Viewer */}
      <div className="relative bg-stone-900/80 backdrop-blur-md border border-amber-500/30 rounded-3xl p-3 md:p-4 shadow-2xl">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-amber-500/20">
          <img
            src={photos[currentIndex]}
            alt={`Moment ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />

          {/* Navigation Overlay Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-amber-300 p-2 md:p-3 rounded-full border border-amber-500/40 backdrop-blur-sm transition-all active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-amber-300 p-2 md:p-3 rounded-full border border-amber-500/40 backdrop-blur-sm transition-all active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Counter & Dots */}
        <div className="mt-4 flex items-center justify-between px-2">
          <span className="text-xs font-serif text-amber-400/80 tracking-widest">
            {currentIndex + 1} / {photos.length}
          </span>

          <div className="flex gap-2">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-6 bg-amber-400' 
                    : 'w-2 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
