import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Couple() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center relative z-10">
      <div className="bg-stone-900/70 backdrop-blur-md border border-amber-500/30 rounded-3xl p-8 shadow-xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-medium">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </h2>
        
        {/* whitespace-pre-line renders \n cleanly as new lines */}
        {weddingData.couple.note && (
          <p className="text-stone-300 italic font-serif text-base md:text-lg leading-relaxed whitespace-pre-line">
            {weddingData.couple.note}
          </p>
        )}

        <div className="relative mx-auto max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl">
          <img 
            src={weddingData.couple.coupleImage} 
            alt={`${weddingData.couple.groom} & ${weddingData.couple.bride}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-stone-300 text-sm md:text-base space-y-1 pt-2 font-serif">
          <p><span className="text-amber-400 font-semibold">{weddingData.couple.groom}</span> — Son of {weddingData.couple.groomParents}</p>
          <p><span className="text-amber-400 font-semibold">{weddingData.couple.bride}</span> — Daughter of {weddingData.couple.brideParents}</p>
        </div>
      </div>
    </section>
  );
}
