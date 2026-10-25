import React from 'react';
import { Sparkles } from 'lucide-react';

export const Invitation: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-xl mx-auto relative z-10 text-center">
      <div className="bg-stone-900/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-amber-500/30 text-[#FDF8F0] space-y-6 relative overflow-hidden">
        
        {/* Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Header Motto */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-serif font-medium">
              Atta Deep Bhava
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Sacred Light Intro */}
        <p className="text-amber-200/90 font-serif italic text-sm md:text-base leading-relaxed">
          "In the peaceful and sacred light of the Triratna, we cordially invite your esteemed presence and blessings with family on the auspicious occasion of the wedding ceremony of"
        </p>

        {/* Couple Names */}
        <div className="py-2 space-y-2">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-100 font-medium tracking-wide">
            Adarsh
          </h2>
          <span className="text-amber-400 font-serif text-xl block">&</span>
          <h2 className="text-4xl md:text-5xl font-serif text-amber-100 font-medium tracking-wide">
            Divyansha
          </h2>
        </div>

        {/* Hashtag */}
        <div className="pt-2">
          <span className="inline-block bg-amber-500/10 border border-amber-400/30 text-amber-300 font-serif tracking-widest text-sm py-1.5 px-6 rounded-full">
            #DIVYADARSHAN
          </span>
        </div>

        {/* Date & Venue Summary */}
        <div className="border-t border-stone-800 pt-6 space-y-3 font-serif text-stone-300">
          <p className="text-amber-200 font-medium text-base">
            Saturday, 14 November 2026
          </p>
          <p className="text-xs text-stone-400 leading-relaxed max-w-sm mx-auto">
            The Grand Jashan, Kamptee Road, Khairy, Nagpur 440029
          </p>
        </div>

      </div>
    </section>
  );
};

export default Invitation;
