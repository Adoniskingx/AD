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
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto card-dark-gold rounded-2xl p-6 md:p-10 shadow-xl text-center">
        <h2 className="text-3xl font-serif text-gold mb-6">Our Moments</h2>
        
        {/* Carousel View */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl border border-amber-500/40 bg-black/50 shadow-2xl mb-6">
          <img 
            src={images[currentIndex]} 
            alt={`Wedding Memory ${currentIndex + 1}`} 
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-amber-300 p-2.5 rounded-full border border-amber-500/40 transition-colors shadow-lg"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-amber-300 p-2.5 rounded-full border border-amber-500/40 transition-colors shadow-lg"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-xs text-amber-200 border border-amber-500/30">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-6 gap-2 max-w-lg mx-auto">
          {images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-lg overflow-hidden border-2 aspect-square transition-all ${
                currentIndex === idx ? 'border-amber-400 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-150'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
