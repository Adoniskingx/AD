import React from 'react';
import { weddingData } from '../data/weddingData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <p className="text-xs uppercase tracking-widest text-amber-300/80 mb-2 font-serif">Awaiting to Welcome You</p>
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4 tracking-wide">
          {weddingData.footer?.familyNames || "The Tabhane & Bagde Family"}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
