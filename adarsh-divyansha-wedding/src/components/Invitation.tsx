import React from 'react';
import { weddingData } from '../data/weddingData';

export const Invitation: React.FC = () => {
  return (
    <section className="relative z-10 py-4 px-4 max-w-xl mx-auto text-center">
      <div className="bg-[#FAF7F2] text-stone-900 rounded-[2.5rem] p-6 md:p-8 shadow-2xl border-2 border-amber-400/40 space-y-4">
        
        <div className="space-y-1">
          <p className="text-amber-700 font-serif text-[11px] tracking-[0.3em] uppercase font-semibold">
            ✨ You Are Cordially Invited ✨
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-stone-900 tracking-wide pt-1">
            {weddingData.couple.groom} & {weddingData.couple.bride}
          </h2>
          <p className="text-amber-800 font-serif text-xs tracking-widest uppercase font-bold">
            {weddingData.couple.hashtag}
          </p>
        </div>

        <p className="text-stone-700 font-serif text-xs italic leading-relaxed max-w-md mx-auto pt-1">
          "{weddingData.eventDetails.blessingText}"
        </p>

        <div className="pt-2 border-t border-amber-200/60 max-w-xs mx-auto">
          <p className="text-stone-800 font-serif text-xs font-semibold pt-2">
            {weddingData.eventDetails.weddingDateDisplay}
          </p>
          <p className="text-stone-600 text-[11px] pt-0.5">
            {weddingData.venue.name}, {weddingData.venue.address}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Invitation;
