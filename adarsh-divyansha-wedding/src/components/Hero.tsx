import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-6 md:p-12 text-center relative overflow-hidden shadow-2xl">
        
        {/* Top Motto */}
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

        {/* Adarsh Name */}
        <div className="mt-4 mb-2">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 tracking-wider">
            {weddingData.couple.groom}
          </h2>
        </div>

        {/* Couple Photo (Image 10) - Increased Size & Incorporating '&' */}
        {weddingData.hero.image && (
          <div className="my-4 flex justify-center relative">
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-xl p-1 bg-black/40">
              <img 
                src={weddingData.hero.image} 
                alt="Adarsh & Divyansha" 
                className="w-full h-full object-cover rounded-full"
              />
              {/* Incorporated '&' Badge */}
              <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-9 h-9 md:w-10 md:h-10 bg-[#1A1816] border border-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-amber-300 font-serif italic text-base md:text-lg">&</span>
              </div>
            </div>
          </div>
        )}

        {/* Divyansha Name */}
        <div className="mt-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 tracking-wider">
            {weddingData.couple.bride}
          </h2>
        </div>

        {/* Hashtag / Main Title (Reduced font size & italicized) */}
        <div className="my-6 py-4 border-y border-amber-500/25">
          <h1 className="text-2xl md:text-3xl font-serif text-gold tracking-wider italic">
            {weddingData.hero.title}
          </h1>
        </div>

        {/* Family Details */}
        <div className="mt-6 pt-4 border-t border-amber-500/20 text-xs md:text-sm text-amber-100/80 space-y-3">
          <p className="font-serif italic text-amber-300">{weddingData.hero.familyNames}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-400/70 mb-0.5">Groom's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.groomParents}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-400/70 mb-0.5">Bride's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.brideParents}</p>
            </div>
          </div>
        </div>

        {/* Date & Venue Info */}
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
