import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Video() {
  return (
    <section className="text-center space-y-4 max-w-xl mx-auto px-4">
      <div>
        <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif mb-1">Pre-Wedding Film</p>
        <h2 className="text-2xl md:text-3xl font-serif text-amber-100 font-medium">Our Journey</h2>
      </div>

      <div className="bg-[#16100F]/90 backdrop-blur-md rounded-[2.5rem] p-6 border-2 border-amber-500/40 shadow-2xl overflow-hidden">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-stone-950 border border-amber-500/30 flex items-center justify-center">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Pre-Wedding Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
