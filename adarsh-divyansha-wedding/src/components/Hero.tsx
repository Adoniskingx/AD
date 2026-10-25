import React from 'react';
import { weddingData } from '../data/weddingData';
import { Sparkles, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-16 text-center overflow-hidden">
      
      {/* Glassmorphic Dark-Gold Card */}
      <div className="relative z-10 max-w-2xl mx-auto w-full bg-stone-900/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-festive border-2 border-amber-500/50">
        
        {/* Top Decorative Motif */}
        <div className="flex items-center justify-center gap-2 text-amber-400 mb-4">
          <span className="h-[1px] w-12 bg-amber-500/60" />
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-xs uppercase tracking-[0.25em] font-serif text-amber-300">
            {weddingData.eventDetails.motto || "Atta Deep Bhava"}
          </span>
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="h-[1px] w-12 bg-amber-500/60" />
        </div>

        {/* Main Hashtag & Couple Names */}
        <p className="text-sm uppercase tracking-widest text-amber-200/90 font-serif mb-2">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </p>
        
        <h1 className="text-4xl sm:text-6xl font-serif text-amber-100 tracking-tight mb-4 drop-shadow-md">
          {weddingData.couple.hashtag}
        </h1>

        <p className="text-stone-300 font-serif italic text-sm sm:text-base mb-6">
          "{weddingData.eventDetails.blessingText}"
        </p>

        <div className="inline-block px-6 py-2 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 font-serif text-lg mb-8 shadow-inner">
          {weddingData.eventDetails.weddingDateDisplay || weddingData.weddingDateDisplay}
        </div>

        {/* Location Card */}
        <div className="flex items-center justify-center gap-2 text-stone-300 bg-stone-950/60 py-3 px-4 rounded-xl border border-amber-500/30 text-sm">
          <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{weddingData.hero.locationName}, {weddingData.hero.locationCity}</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
