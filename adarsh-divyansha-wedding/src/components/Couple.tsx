import React from 'react';
import { weddingData } from '../data/weddingData';
import { OrnateDivider } from './OrnateDivider';
import { Heart, Sparkles } from 'lucide-react';

export const Couple: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center relative">
      <OrnateDivider />
      
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-festive border-2 border-amber-300/80 relative overflow-hidden">
        {/* Background decorative corner flourishes */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-200/40 to-transparent pointer-events-none rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-200/40 to-transparent pointer-events-none rounded-tl-full" />

        <div className="flex items-center justify-center gap-2 text-amber-700 mb-6">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">The Couple</h2>
          <Sparkles className="w-5 h-5 text-amber-600" />
        </div>

        <p className="text-stone-600 italic font-serif mb-10 max-w-lg mx-auto">
          {weddingData.couple.note || "Two Souls. One Promise • A Lifetime Together"}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Framed Photo Backdrop */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50">
              <img 
                src={weddingData.couple.coupleImage || "/Photos/1 (1).jpg"} 
                alt={`${weddingData.couple.groom} & ${weddingData.couple.bride}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Couple Details with Rich Typography */}
          <div className="text-center md:text-left space-y-6 max-w-md">
            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200/60 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-stone-900">{weddingData.couple.groom}</h3>
              <p className="text-xs uppercase tracking-wider text-amber-800 font-medium mt-1">Groom</p>
              <p className="text-sm text-stone-600 mt-2">Son of <br/><span className="font-medium text-stone-800">{weddingData.couple.groomParents}</span></p>
            </div>

            <div className="flex justify-center md:justify-start text-amber-700">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shadow-inner border border-amber-300">
                <Heart className="w-5 h-5 fill-amber-700 text-amber-700" />
              </div>
            </div>

            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200/60 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-stone-900">{weddingData.couple.bride}</h3>
              <p className="text-xs uppercase tracking-wider text-amber-800 font-medium mt-1">Bride</p>
              <p className="text-sm text-stone-600 mt-2">Daughter of <br/><span className="font-medium text-stone-800">{weddingData.couple.brideParents}</span></p>
            </div>
          </div>

        </div>
      </div>
      
      <OrnateDivider />
    </section>
  );
};

export default Couple;
