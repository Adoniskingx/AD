import React, { useEffect, useState } from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

interface HeroProps {
  fontSize?: string;
  imageShape?: string;
  imageSize?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  fontSize = '100%', 
  imageShape = 'rounded-t-[120px] rounded-b-2xl', 
  imageSize = 'w-64 md:w-76 h-80 md:h-96' 
}) => {
  const [guest, setGuest] = useState(weddingData.hero.guestName);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get('to');
    if (recipient) {
      setGuest(decodeURIComponent(recipient.replace(/[-+]/g, ' ')));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 py-6 md:py-12" style={{ fontSize }}>
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-5 md:p-12 text-center relative overflow-hidden shadow-2xl">
        
        {guest && (
          <div className="mb-4 inline-block bg-amber-500/15 border border-amber-400/40 px-5 py-1.5 rounded-full shadow-inner">
            <p className="text-[10px] uppercase tracking-widest text-amber-300/80 mb-0.5 font-serif">Dear</p>
            <p className="text-base md:text-lg font-serif text-amber-200 font-semibold tracking-wide">
              {guest}
            </p>
          </div>
        )}

        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="h-[1px] w-6 md:w-12 bg-amber-400/50"></div>
          <span className="text-amber-300 tracking-wider text-xs md:text-sm uppercase font-semibold whitespace-nowrap">
            ✨ {weddingData.hero.motto} ✨
          </span>
          <div className="h-[1px] w-6 md:w-12 bg-amber-400/50"></div>
        </div>

        <p className="text-amber-100/90 italic font-serif text-base md:text-lg mb-3">
          {weddingData.hero.blessing} 🪷
        </p>

        <p className="text-[#FDF8F0]/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-4">
          {weddingData.hero.invitationText} 🌸
        </p>

        <div className="mt-2 mb-1">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 tracking-wider">
            {weddingData.couple.groom}
          </h2>
        </div>

        {/* Dynamic Image Shape & Size Container */}
        {weddingData.hero.image && (
          <div className="my-3 flex justify-center">
            <div className={`relative ${imageSize} ${imageShape} overflow-hidden border-2 border-amber-400/65 shadow-2xl p-1 bg-black/40 transition-all duration-300 mx-auto`}>
              <img 
                src={weddingData.hero.image} 
                alt="Adarsh & Divyansha" 
                className="w-full h-full object-cover"
                style={{ borderRadius: 'inherit' }}
              />
            </div>
          </div>
        )}

        <div className="mt-1 mb-3">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 tracking-wider">
            {weddingData.couple.bride}
          </h2>
        </div>

        <div className="mt-3 pt-3 border-t border-amber-500/20 text-xs md:text-base text-amber-100/90 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-400/80 mb-0.5">🌿 Groom's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.groomParents}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-400/80 mb-0.5">🌸 Bride's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.brideParents}</p>
            </div>
          </div>
        </div>

        <div className="my-4 py-3 border-y border-amber-500/25">
          <h1 className="text-4xl md:text-5xl font-script text-gold tracking-wider">
            {weddingData.hero.title} 💖
          </h1>
        </div>

        <div className="mt-4 pt-4 border-t border-amber-500/20 flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="inline-block border border-amber-500/40 rounded-full px-5 py-1.5 bg-black/30">
            <span className="text-amber-200 text-sm md:text-base font-medium tracking-wide flex items-center gap-2">
              📅 {weddingData.hero.date}
            </span>
          </div>
          <div className="inline-flex items-center space-x-2 text-amber-100/90 text-xs md:text-sm bg-black/40 px-4 py-2 rounded-xl border border-amber-500/30">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {weddingData.hero.locationName}, {weddingData.hero.locationCity} 📍
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
