import React from 'react';

interface InvitationProps {
  onOpen?: () => void;
}

export const Invitation: React.FC<InvitationProps> = ({ onOpen }) => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center py-6 px-4 max-w-xl mx-auto text-center">
      <div className="relative w-full max-w-md bg-[#16100F]/90 backdrop-blur-md rounded-[2.5rem] p-8 border-2 border-amber-500/40 shadow-[0_0_40px_rgba(217,119,6,0.15)] space-y-6">
        
        {/* Top Decorative Header */}
        <div className="space-y-2">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-2" />
          <p className="text-amber-400 font-serif text-[11px] tracking-[0.3em] uppercase">
            Two Souls. One Promise. A Lifetime Together
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-amber-100 font-medium">
            Adarsh & Divyansha
          </h2>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-300 tracking-wider">
            #DIVYADARSHAN
          </h1>
          <p className="text-stone-300 font-serif text-xs italic pt-1">
            "Atta Deep Bhava — Be a light unto yourself."
          </p>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2" />
        </div>

        {/* Date & Venue Quick Snippet */}
        <div className="space-y-3 pt-2">
          <div className="inline-block px-6 py-2 rounded-full bg-stone-900/80 border border-amber-500/40 text-amber-200 font-serif text-sm tracking-widest shadow-inner">
            14 November 2026
          </div>
          <div className="flex items-center justify-center gap-2 text-stone-300 text-xs font-serif pt-1">
            <span className="text-amber-400">📍</span>
            <span>The Grand Jashan Lawn, Nagpur</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Invitation;
