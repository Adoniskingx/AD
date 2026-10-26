import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images = weddingData.galleryImages || weddingData.photos || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-5 md:p-8 shadow-2xl text-center flex flex-col justify-between h-[88vh] md:h-[85vh]">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-2 tracking-wide">
          Our Moments 📸
        </h2>
        
        {/* Main Carousel Image View (Optimized height for single-screen fit) */}
        <div className="relative w-full flex-1 max-h-[55vh] overflow-hidden rounded-xl border border-amber-500/40 bg-black/60 shadow-2xl my-2 flex items-center justify-center">
          <img 
            src={images[currentIndex]} 
            alt={`Wedding Memory ${currentIndex + 1}`} 
            loading="lazy"
            className="w-full h-full object-contain transition-all duration-500"
          />

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-amber-300 p-2.5 rounded-full border border-amber-500/50 transition-colors shadow-xl"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-amber-300 p-2.5 rounded-full border border-amber-500/50 transition-colors shadow-xl"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Counter Badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-xs text-amber-200 border border-amber-500/30 tracking-wider">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-6 gap-2 max-w-md mx-auto mt-2">
          {images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-lg overflow-hidden border-2 aspect-square transition-all ${
                currentIndex === idx ? 'border-amber-400 scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
