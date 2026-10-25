import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Couple() {
  return (
    <section className="text-center">
      <div className="bg-[#FAF7F2] text-stone-900 rounded-[2.5rem] p-6 md:p-10 shadow-2xl border-2 border-amber-400/40 space-y-8">
        <div>
          <div className="flex items-center justify-center gap-2 mb-2 text-amber-600">
            <span>✨</span>
            <h2 className="text-3xl font-serif font-medium text-stone-900 tracking-wide">The Couple</h2>
            <span>✨</span>
          </div>
          <p className="text-stone-600 italic font-serif text-sm leading-relaxed mt-2">
            Two Souls. One Promise. A Lifetime Together
          </p>
        </div>

        {/* Featured Couple Image */}
        <div className="relative mx-auto max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.25)] border-4 border-amber-300/60 bg-stone-900">
          <img 
            src="/Photos/1.jpg" 
            alt="Adarsh & Divyansha" 
            className="w-full h-full object-cover" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>

        {/* Groom Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-amber-200/50 space-y-1">
          <h3 className="text-2xl font-serif font-semibold text-stone-900">{weddingData.couple.groom}</h3>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-semibold">Groom</p>
          <p className="text-sm text-stone-600 pt-1">{weddingData.couple.groomParents}</p>
        </div>

        {/* Bride Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-amber-200/50 space-y-1">
          <h3 className="text-2xl font-serif font-semibold text-stone-900">{weddingData.couple.bride}</h3>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-semibold">Bride</p>
          <p className="text-sm text-stone-600 pt-1">{weddingData.couple.brideParents}</p>
        </div>
      </div>
    </section>
  );
}
