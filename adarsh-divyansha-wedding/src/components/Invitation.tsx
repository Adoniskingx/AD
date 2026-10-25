import React from 'react';
import { weddingData } from '../data/weddingData';

export const Invitation: React.FC = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-3xl mx-auto card-dark-gold rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6 tracking-wide">
          {weddingData.invitation.heading}
        </h2>

        {/* Invitation Message */}
        <p className="text-[#FDF8F0]/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
          {weddingData.invitation.message}
        </p>

        {/* Couple Names */}
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
        <div className="mt-8 pt-6 border-t border-amber-500/20 text-sm md:text-base text-amber-100/80 space-y-2">
          <p className="font-serif italic text-amber-300 mb-4">{weddingData.invitation.familyNames}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400/70 mb-1">Groom's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.invitation.groomParents}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400/70 mb-1">Bride's Parents</p>
              <p className="font-medium text-amber-100">{weddingData.invitation.brideParents}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Invitation;
