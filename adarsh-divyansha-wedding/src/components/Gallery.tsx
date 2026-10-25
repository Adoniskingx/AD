import React from 'react';
import { weddingData } from '../data/weddingData';

export const Gallery: React.FC = () => {
  const images = weddingData.galleryImages || weddingData.photos || [];
  if (images.length === 0) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto card-dark-gold rounded-2xl p-6 md:p-10 shadow-xl">
        <h2 className="text-3xl font-serif text-gold text-center mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img: string, idx: number) => (
            <div key={idx} className="overflow-hidden rounded-xl border border-amber-500/30 aspect-square">
              <img 
                src={img} 
                alt={`Wedding Photo ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
