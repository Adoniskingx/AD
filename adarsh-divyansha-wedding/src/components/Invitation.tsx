import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export const Invitation: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-ivory text-darkCharcoal relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center border-y border-gold/40 py-16 px-6 relative bg-white/40 backdrop-blur-sm shadow-sm rounded-xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-saffron font-semibold block mb-4">
            Auspicious Invitation
          </span>
          
          <h2 className="text-2xl md:text-3xl font-serif text-royalBlue mb-6">
            {weddingData.invitation.greeting}
          </h2>

          <p className="text-base md:text-lg font-light leading-relaxed text-darkCharcoal/80 max-w-2xl mx-auto mb-10">
            {weddingData.invitation.message}
          </p>

          <div className="pt-6 border-t border-gold/20">
            <p className="text-sm uppercase tracking-widest text-gold font-medium mb-2">Cordially Invited By</p>
            <p className="text-lg font-serif italic text-darkCharcoal">{weddingData.invitation.familyNames}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
