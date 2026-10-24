import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Couple() {
  return (
    <section className="py-12 px-4 max-w-xl mx-auto text-center relative z-10">
      <div className="bg-[#FAF7F2] text-stone-900 rounded-[2.5rem] p-6 md:p-10 shadow-2xl border-2 border-amber-400/40 space-y-8">
        
        {/* Header Title & Note */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-2 text-amber-600">
            <span>✨</span>
            <h2 className="text-3xl font-serif font-medium text-stone-900 tracking-wide">The Couple</h2>
            <span>✨</span>
          </div>
          {weddingData.couple.note && (
            <p className="text-stone-600 italic font-serif text-sm md:text-base leading-relaxed whitespace-pre-line mt-2">
              {weddingData.couple.note}
            </p>
          )}
        </div>

        {/* Featured Image with Glow */}
        <div className="relative mx-auto max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.25)] border-4 border-amber-300/60 bg-stone-900">
          <img 
            src={weddingData.couple.coupleImage} 
            alt={`${weddingData.couple.groom} & ${weddingData.couple.bride}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Groom Details Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-amber-200/50 space-y-1">
          <h3 className="text-2xl font-serif font-semibold text-stone-900">
            {weddingData.couple.groom}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-semibold">
            Groom
          </p>
          <p className="text-sm text-stone-600 pt-1">
            Son of {weddingData.couple.groomParents}
          </p>
        </div>

        {/* Bride Details Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-amber-200/50 space-y-1">
          <h3 className="text-2xl font-serif font-semibold text-stone-900">
            {weddingData.couple.bride}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-semibold">
            Bride
          </p>
          <p className="text-sm text-stone-600 pt-1">
            Daughter of {weddingData.couple.brideParents}
          </p>
        </div>

      </div>
    </section>
  );
}
