import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Carousel() {
  return (
    <section className="py-12 px-2 md:px-4 max-w-5xl mx-auto">
      {/* Title with frosted backdrop so text never merges with background */}
      <div className="text-center mb-8">
        <div className="section-title-pill">
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif mb-1">
            #DIVYADARSHAN
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-amber-100 font-medium">
            Our Moments
          </h2>
        </div>
      </div>

      {/* Grid with tight gaps and smooth rounded photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {weddingData.galleryImages.map((imgUrl, index) => (
          <div 
            key={index} 
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-amber-500/20 shadow-md group"
          >
            <img
              src={imgUrl}
              alt={`Gallery moment ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle dark vignette on each image to make it blend naturally */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          </div>
        ))}
      </div>
    </section>
  );
}
