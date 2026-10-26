import React, { useEffect, useState } from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [guest, setGuest] = useState(weddingData.hero.guestName);

  useEffect(() => {
    // Automatically read the 'to' parameter from the URL (e.g., ?to=Rahul)
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get('to');
    if (recipient) {
      setGuest(decodeURIComponent(recipient.replace(/[-+]/g, ' ')));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-6 md:p-12 text-center relative overflow-hidden shadow-2xl">
        
        {/* Dynamic Personalized Guest Invitation Banner */}
        {guest && (
          <div className="mb-6 inline-block bg-amber-500/15 border border-amber-400/40 px-6 py-2 rounded-full shadow-inner">
            <p className="text-xs uppercase tracking-widest text-amber-300/80 mb-0.5 font-serif">Dear</p>
            <p className="text-base md:text-lg font-serif text-amber-200 font-semibold tracking-wide">
              {guest}
            </p>
          </div>
        )}

        {/* Top Motto: Single-line alignment with sparkles */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="h-[1px] w-8 md:w-12 bg-amber-400/50"></div>
          <span className="text-amber-300 tracking-wider text-xs md:text-sm uppercase font-semibold whitespace-nowrap">
            ✨ {weddingData.hero.motto} ✨
          </span>
          <div className="h-[1px] w-8 md:w-12 bg-amber-400/50"></div>
        </div>

        {/* Blessing Text */}
        <p className="text-amber-100/90 italic font-serif text-base md:text-lg mb-4">
          {weddingData.hero.blessing} 🪷
        </p>

        {/* Invitation Message */}
        <p className="text-[#FDF8F0]/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6">
          {weddingData.hero.invitationText} 🌸
        </p>

        {/* Adarsh Name */}
        <div className="mt-4 mb-2">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 tracking-wider">
            {weddingData.couple.groom}
          </h2>
        </div>

        {/* Optimized Couple Photo Sized to Fit First Screen */}
        {weddingData.hero.image && (
          <div className="my-3 flex justify-center">
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-amber-400/65 shadow-2xl p-1 bg-black/40">
              <img 
                src={weddingData.hero.image} 
                alt="Adarsh & Divyansha" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        )}

        {/* Divyansha Name */}
        <div className="mt-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 tracking-wider">
            {weddingData.couple.bride}
          </h2>
        </div>

        {/* Parent Names with Emojis */}
        <div className="mt-4 pt-4 border-t border-amber-500/20 text-sm md:text-base text-amber-100/90 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400/80 mb-0.5">🌿 Groom's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.groomParents}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400/80 mb-0.5">🌸 Bride's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.hero.brideParents}</p>
            </div>
          </div>
        </div>

        {/* Hashtag / Main Title (Bradley Hand style font) */}
        <div className="my-6 py-4 border-y border-amber-500/25">
          <h1 className="text-4xl md:text-5xl font-script text-gold tracking-wider">
            {weddingData.hero.title} 💖
          </h1>
        </div>

        {/* Date & Venue Info with Emojis */}
        <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="inline-block border border-amber-500/40 rounded-full px-6 py-2 bg-black/30">
            <span className="text-amber-200 text-sm md:text-base font-medium tracking-wide flex items-center gap-2">
              📅 {weddingData.hero.date}
            </span>
          </div>
          <div className="inline-flex items-center space-x-2 text-amber-100/90 text-xs md:text-sm bg-black/40 px-4 py-2.5 rounded-xl border border-amber-500/30">
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
