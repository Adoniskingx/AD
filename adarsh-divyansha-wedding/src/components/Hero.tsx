import React from 'react';
import { weddingData } from '../data/weddingData';
import { Sparkles, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 text-center overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto w-full bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-wedding border-2 border-amber-200/60">
        
        {/* Top Decorative Motif */}
        <div className="flex items-center justify-center gap-2 text-amber-700 mb-4">
          <span className="h-[1px] w-12 bg-amber-300" />
          <Sparkles className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.2em] font-serif">Atta Deep Bhava</span>
          <Sparkles className="w-5 h-5" />
          <span className="h-[1px] w-12 bg-amber-300" />
        </div>

        {/* Main Hashtag & Couple Names */}
        <p className="text-sm uppercase tracking-widest text-amber-800 font-medium mb-2">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </p>
        
        <h1 className="text-4xl sm:text-6xl font-serif text-stone-900 tracking-tight mb-4">
          {weddingData.couple.hashtag}
        </h1>

        <div className="inline-block px-6 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-serif text-lg mb-8 shadow-sm">
          {weddingData.eventDetails.weddingDateDisplay || "Saturday, 14 November 2026"}
        </div>

        {/* Location Card */}
        <div className="flex items-center justify-center gap-2 text-stone-600 bg-stone-50 py-3 px-4 rounded-xl border border-stone-200/60 text-sm">
          <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>{weddingData.hero?.locationName || "Deekshabhoomi Stupa & Torana Gateway"}, {weddingData.hero?.locationCity || "Nagpur, Maharashtra"}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
