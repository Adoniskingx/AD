// src/components/Carousel.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  '/Photos/1.jpg',
  '/Photos/4.jpg',
  '/Photos/5.jpg',
  '/Photos/10.jpg'
];

export default function Carousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const selectPhoto = (idx: number) => {
    setActiveIdx(idx);
  };

  const prevPhoto = () => {
    setActiveIdx(activeIdx === 0 ? photos.length - 1 : activeIdx - 1);
  };

  const nextPhoto = () => {
    setActiveIdx(activeIdx === photos.length - 1 ? 0 : activeIdx + 1);
  };

  return (
    <section className="text-center space-y-4 max-w-xl mx-auto px-4">
      <div className="mb-4">
        <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif mb-1">#DIVYADARSHAN</p>
        <h2 className="text-2xl md:text-3xl font-serif text-amber-100 font-medium">Our Moments</h2>
      </div>

      <div className="bg-[#FAF7F2] text-stone-900 rounded-[2.5rem] p-4 md:p-6 shadow-2xl border-2 border-amber-400/40 space-y-6">
        {/* Main Featured Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md border-2 border-amber-300/50 bg-stone-950">
          <img 
            src={photos[activeIdx]} 
            alt="Active Moment" 
            className="w-full h-full object-cover transition-all duration-500" 
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }} 
          />
          
          <button onClick={prevPhoto} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-amber-300 p-2 rounded-full border border-amber-400/40 hover:bg-black/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextPhoto} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-amber-300 p-2 rounded-full border border-amber-400/40 hover:bg-black/80 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => selectPhoto(idx)}
              className={`relative flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                idx === activeIdx 
                  ? 'ring-4 ring-amber-500 scale-105 shadow-md opacity-100' 
                  : 'opacity-60 hover:opacity-90 ring-1 ring-amber-300/50'
              }`}
            >
              <img src={photo} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
          }
