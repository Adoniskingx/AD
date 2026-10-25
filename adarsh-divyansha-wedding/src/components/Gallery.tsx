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
    <section className="py-12 px-4 min-h-[90vh] flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto card-dark-gold rounded-2xl p-6 md:p-12 shadow-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6 tracking-wide">Our Moments</h2>
        
        {/* Enlarged Carousel View */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-xl border border-amber-500/40 bg-black/60 shadow-2xl mb-6">
          <img 
            src={images[currentIndex]} 
            alt={`Wedding Memory ${currentIndex + 1}`} 
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-amber-300 p-3 rounded-full border border-amber-500/50 transition-colors shadow-xl"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-amber-300 p-3 rounded-full border border-amber-500/50 transition-colors shadow-xl"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-1.5 rounded-full text-sm text-amber-200 border border-amber-500/30 tracking-wider">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-6 gap-2 md:gap-3 max-w-xl mx-auto">
          {images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-xl overflow-hidden border-2 aspect-square transition-all ${
                currentIndex === idx ? 'border-amber-400 scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
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
