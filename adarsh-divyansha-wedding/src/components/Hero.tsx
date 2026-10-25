import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-6 md:p-12 text-center relative overflow-hidden shadow-2xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6 tracking-wide">
          {weddingData.hero.heading}
        </h2>

        {/* Invitation Message */}
        <p className="text-[#FDF8F0]/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
          {weddingData.hero.message}
        </p>

        {/* Names */}
        <div className="my-8">
          <h3 className="text-4xl md:text-5xl font-serif text-amber-200 tracking-wider mb-2">
            {weddingData.couple.groom}
          </h3>
          <span className="text-amber-400 font-serif text-2xl italic">&</span>
          <h3 className="text-4xl md:text-5xl font-serif text-amber-200 tracking-wider mt-2">
            {weddingData.couple.bride}
          </h3>
        </div>

        {/* Family Details */}
        <div className="mt-8 pt-6 border-t border-amber-500/20 text-sm md:text-base text-amber-100/80 space-y-4">
          <p className="font-serif italic text-amber-300">{weddingData.hero.familyNames}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400/70 mb-1">Groom's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.groomParents}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400/70 mb-1">Bride's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.brideParents}</p>
            </div>
          </div>
        </div>

        {/* Date & Venue Pill / Info */}
        <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="inline-block border border-amber-500/40 rounded-full px-6 py-2 bg-black/30">
            <span className="text-amber-200 text-sm md:text-base font-medium tracking-wide">
              {weddingData.hero.date}
            </span>
          </div>
          <div className="inline-flex items-center space-x-2 text-amber-100/90 text-xs md:text-sm bg-black/40 px-4 py-2.5 rounded-xl border border-amber-500/30">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {weddingData.hero.locationName}, {weddingData.hero.locationCity}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
