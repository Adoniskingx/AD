import React from 'react';
import { weddingData } from '../data/weddingData';
import { Sparkles } from 'lucide-react';

export const Invitation: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto text-center">
      <div className="card-dark-gold p-8 sm:p-12 rounded-3xl relative overflow-hidden">
        
        {/* Decorative Motif */}
        <div className="flex items-center justify-center gap-2 text-amber-400 mb-6">
          <span className="h-[1px] w-12 bg-amber-500/50" />
          <Sparkles className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.25em] font-serif text-amber-300">
            Auspicious Invitation
          </span>
          <Sparkles className="w-5 h-5" />
          <span className="h-[1px] w-12 bg-amber-500/50" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif text-amber-100 mb-4">
          {weddingData.invitation.greeting || "In the peaceful and sacred light of the Triratna"}
        </h2>

        <p className="text-stone-300 font-serif italic text-base sm:text-lg mb-8">
          {weddingData.invitation.message || "We cordially invite you to celebrate with us."}
        </p>

        <div className="w-24 h-[1px] bg-amber-500/40 mx-auto my-6" />

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-300/80 font-medium">
            Cordially Invited By
          </p>
          <p className="text-xl sm:text-2xl font-serif text-amber-100 font-medium">
            {weddingData.invitation.familyNames || "The Tabhane & Bagde Family"}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Invitation;
