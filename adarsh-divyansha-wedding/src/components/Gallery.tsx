import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images: string[] = weddingData.photos || [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectedImage = images[currentIndex] || '';

  return (
    <section className="relative py-10 px-3 md:px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-6 md:p-12 shadow-2xl text-center flex flex-col justify-center">
        
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6 tracking-wide">
          Gallery 📸
        </h2>

        {/* Main Active Preview Display using object-contain to show full images */}
        <div className="relative mb-5 overflow-hidden rounded-xl border border-amber-500/40 shadow-2xl h-[340px] md:h-[460px] bg-black/80 flex items-center justify-center group">
          <img 
            src={selectedImage} 
            alt="Wedding Preview" 
            className="w-full h-full object-contain transition-all duration-500"
          />

          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-600/90 text-amber-200 p-2.5 rounded-full border border-amber-500/50 backdrop-blur-md transition-all shadow-xl"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-600/90 text-amber-200 p-2.5 rounded-full border border-amber-500/50 backdrop-blur-md transition-all shadow-xl"
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Proportional Thumbnails */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto py-2 px-1">
          {images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all shrink-0 w-16 h-16 md:w-24 md:h-24 ${
                currentIndex === idx ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/40' : 'border-amber-500/30 opacity-70 hover:opacity-100'
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
