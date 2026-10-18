import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export const Carousel: React.FC = () => {
  const photos = weddingData.photos || weddingData.galleryImages || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!photos.length) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 text-amber-700 mb-2">
          <Heart className="w-4 h-4 fill-amber-700" />
          <span className="text-xs uppercase tracking-widest font-serif">Memories</span>
          <Heart className="w-4 h-4 fill-amber-700" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3">Our Moments</h2>
        <p className="text-stone-600 mb-10 italic font-serif">Glimpses of our journey together {weddingData.couple.hashtag}</p>

        {/* Rich Framed Carousel Container */}
        <div className="relative bg-stone-900 rounded-3xl shadow-wedding overflow-hidden border-4 border-amber-200/80">
          
          {/* Main Active Image Display */}
          <div className="relative h-[420px] sm:h-[550px] w-full flex items-center justify-center overflow-hidden bg-black/80">
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 scale-110"
              style={{ backgroundImage: `url(${photos[currentIndex]})` }}
            />

            <img 
              src={photos[currentIndex]} 
              alt={`Wedding memory ${currentIndex + 1}`}
              className="relative z-10 max-h-full max-w-full object-contain transition-all duration-500 ease-in-out drop-shadow-2xl"
            />

            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-stone-900/70 hover:bg-amber-800 text-white p-3 rounded-full transition-all shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-stone-900/70 hover:bg-amber-800 text-white p-3 rounded-full transition-all shadow-lg backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-4 right-4 z-20 bg-stone-900/80 text-amber-200 text-xs px-4 py-1.5 rounded-full tracking-widest border border-amber-500/30 backdrop-blur-md">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Thumbnail Preview Strip */}
          <div className="p-4 bg-amber-50/95 border-t border-amber-200/60 flex items-center justify-center gap-3 overflow-x-auto">
            {photos.map((photo: string, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to photo ${index + 1}`}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 bg-white shadow-sm ${
                  currentIndex === index 
                    ? 'border-amber-700 scale-105 ring-2 ring-amber-400/50 shadow-md' 
                    : 'border-amber-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={photo} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Carousel;
