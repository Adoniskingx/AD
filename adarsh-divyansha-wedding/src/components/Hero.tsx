import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-6 md:p-10 text-center relative overflow-hidden">
        
        {/* Top Motto / Atta Deep Bhava */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="h-[1px] w-12 bg-amber-400/50"></div>
          <span className="text-amber-300 tracking-widest text-xs md:text-sm uppercase font-semibold">
            {weddingData.hero.motto}
          </span>
          <div className="h-[1px] w-12 bg-amber-400/50"></div>
        </div>

        {/* Blessing Text */}
        <p className="text-amber-100/90 italic font-serif text-sm md:text-base mb-4">
          "{weddingData.hero.blessing}"
        </p>

        {/* Invitation Message */}
        <p className="text-[#FDF8F0]/80 text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-6">
          {weddingData.hero.invitationText}
        </p>

        {/* Names */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-amber-200 tracking-wide mb-1">
            {weddingData.couple.groom}
          </h2>
          <span className="text-amber-400/80 font-serif text-lg">&</span>
          <h2 className="text-2xl md:text-3xl font-serif text-amber-200 tracking-wide mt-1">
            {weddingData.couple.bride}
          </h2>
        </div>

        {/* Hashtag / Main Title */}
        <div className="my-6 py-4 border-y border-amber-500/20">
          <h1 className="text-3xl md:text-5xl font-serif text-gold tracking-wider">
            {weddingData.hero.title}
          </h1>
        </div>

        {/* Date Pill */}
        <div className="inline-block border border-amber-500/40 rounded-full px-6 py-2 my-4 bg-black/30">
          <span className="text-amber-200 text-sm md:text-base font-medium tracking-wide">
            {weddingData.hero.date}
          </span>
        </div>

        {/* Venue Box */}
        <div className="mt-6 pt-4 border-t border-amber-500/20 max-w-md mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 text-amber-100/90 text-xs md:text-sm bg-black/40 px-4 py-2.5 rounded-xl border border-amber-500/30 w-full">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">
              {weddingData.hero.locationName}, {weddingData.hero.locationCity}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
