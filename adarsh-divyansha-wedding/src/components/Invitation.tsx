import React from 'react';

export const Invitation: React.FC = () => {
  return (
    <section className="text-center py-6 px-4 space-y-3 relative z-10 max-w-xl mx-auto">
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-2" />
      
      <p className="text-amber-400 font-serif text-xs tracking-[0.3em] uppercase">
        In the peaceful and sacred light of the Triratna
      </p>
      
      <p className="text-stone-300 font-serif text-sm italic leading-relaxed max-w-md mx-auto">
        "Atta Deep Bhava" — Be a light unto yourself.
      </p>

      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mt-2" />
    </section>
  );
};

export default Invitation;
