import React from 'react';

export const Invitation: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center py-4 px-4 max-w-xl mx-auto text-center space-y-4">
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
      
      <p className="text-amber-400 font-serif text-xs tracking-[0.3em] uppercase">
        In the peaceful and sacred light of the Triratna
      </p>
      
      <div className="space-y-1">
        <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-medium tracking-wide">
          Adarsh & Divyansha
        </h2>
        <p className="text-amber-500 font-serif text-sm tracking-widest uppercase">
          #DIVYADARSHAN
        </p>
      </div>

      <p className="text-stone-300 font-serif text-sm italic max-w-md mx-auto">
        "Atta Deep Bhava — Be a light unto yourself."
      </p>

      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
    </section>
  );
};

export default Invitation;
