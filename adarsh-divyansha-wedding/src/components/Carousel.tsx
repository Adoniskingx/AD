import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="py-16 bg-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-amber-800 mb-2">Our Moments</h2>
        <p className="text-gray-600 mb-8 italic">Glimpses of our journey together #DIVYADARSHAN</p>

        {/* Carousel Container */}
        <div className="relative bg-black/90 rounded-2xl shadow-xl overflow-hidden border-4 border-amber-200">
          {/* Main Active Image Display with Subtle Blur Backdrop */}
          <div className="relative h-[400px] sm:h-[550px] w-full flex items-center justify-center overflow-hidden">
            {/* Blurred background layer to fill empty margins gracefully */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-40 scale-110"
              style={{ backgroundImage: `url(${photos[currentIndex]})` }}
            />

            {/* Actual Image fitted fully without any cropping */}
            <img 
              src={photos[currentIndex]} 
              alt={`Wedding memory ${currentIndex + 1}`}
              className="relative z-10 max-h-full max-w-full object-contain transition-all duration-500 ease-in-out drop-shadow-lg"
            />

            {/* Left Arrow Button */}
            <button 
              onClick={prevSlide}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors shadow-lg focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow Button */}
            <button 
              onClick={nextSlide}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors shadow-lg focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full tracking-wider backdrop-blur-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Thumbnail Preview Navigation */}
          <div className="p-4 bg-amber-50/90 flex items-center justify-center gap-3 overflow-x-auto">
            {photos.map((photo: string, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to photo ${index + 1}`}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none flex-shrink-0 bg-white ${
                  currentIndex === index 
                    ? 'border-amber-600 scale-105 shadow-md ring-2 ring-amber-400' 
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
