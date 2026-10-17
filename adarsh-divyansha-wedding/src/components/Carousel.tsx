import React from 'react';
import { weddingData } from '../data/weddingData';

export const Carousel: React.FC = () => {
  const photos = weddingData.photos || weddingData.galleryImages || [];

  return (
    <section className="py-12 bg-amber-50/50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-amber-800 mb-8">Our Moments</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((imgSrc: string, i: number) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md h-72 border-2 border-amber-100 bg-white">
              <img 
                src={imgSrc} 
                alt={`Wedding memory ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
