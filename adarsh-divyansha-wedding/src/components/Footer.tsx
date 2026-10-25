import React from 'react';
import { weddingData } from '../data/weddingData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-xl mx-auto card-dark-gold rounded-2xl p-8 shadow-xl border border-amber-500/30">
        <p className="text-amber-300 font-serif italic text-lg mb-2">
          {weddingData.footer.text}
        </p>
        <h3 className="text-2xl md:text-3xl font-serif text-gold tracking-wide mb-3">
          {weddingData.footer.family}
        </h3>
        <p className="text-amber-100/80 text-sm md:text-base tracking-widest uppercase">
          {weddingData.footer.weddingDateDisplay}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
