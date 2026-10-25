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
    <section className="py-12 px-4 max-w-xl mx-auto text-center relative z-10">
      <div className="mb-6">
        <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif mb-1">
          {weddingData.couple.hashtag}
        </p>
        <h2 className="text-2xl md:text-3xl font-serif text-amber-100 font-medium">
          Our Moments
        </h2>
      </div>

      <div className="bg-[#FAF7F2] text-stone-900 rounded-[2.5rem] p-4 md:p-6 shadow-2xl border-2 border-amber-400/40 space-y-6">
        
        {/* Main Active Photo Display */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md border-2 border-amber-300/50 bg-stone-950">
          <img
            src={photos[currentIndex]}
            alt={`Moment ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-amber-300 p-2.5 rounded-full border border-amber-400/40 backdrop-blur-sm transition-all active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-amber-300 p-2.5 rounded-full border border-amber-400/40 backdrop-blur-sm transition-all active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Scrollable Thumbnail Preview Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-amber-300">
          {photos.map((photoUrl, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  isSelected 
                    ? 'ring-4 ring-amber-500 scale-105 shadow-md opacity-100' 
                    : 'opacity-60 hover:opacity-90 ring-1 ring-amber-300/50'
                }`}
              >
                <img
                  src={photoUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
