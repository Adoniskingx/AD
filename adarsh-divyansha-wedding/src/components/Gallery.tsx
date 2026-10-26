import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';

export const Gallery: React.FC = () => {
  const images: string[] = weddingData.photos || [];
  const [selectedImage, setSelectedImage] = useState<string>(images[0] || '');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-6 md:p-10 shadow-2xl text-center flex flex-col justify-center">
        
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6 tracking-wide">
          Gallery 📸
        </h2>

        {/* Main active preview display */}
        <div className="mb-6 overflow-hidden rounded-xl border border-amber-500/40 shadow-2xl max-h-[400px] bg-black/50 flex items-center justify-center">
          <img 
            src={selectedImage} 
            alt="Wedding Preview" 
            className="w-full max-h-[380px] object-contain transition-all duration-300"
          />
        </div>

        {/* Enlarged Gallery Thumbnails */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 px-1">
          {images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all shrink-0 w-24 h-24 md:w-32 md:h-32 ${
                selectedImage === img ? 'border-amber-400 scale-105 shadow-lg shadow-amber-500/30' : 'border-amber-500/30 opacity-70 hover:opacity-100'
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
