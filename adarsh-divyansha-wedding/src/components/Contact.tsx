import React from 'react';
import { weddingData } from '../data/weddingData';
import { Phone, Users } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto card-dark-gold rounded-2xl p-8 text-center shadow-xl">
        <h2 className="text-3xl font-serif text-gold mb-4">{weddingData.contact.label}</h2>
        <p className="text-amber-100/90 text-sm md:text-base mb-6">{weddingData.contact.description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-amber-200">
          <div className="inline-flex items-center space-x-2 bg-black/40 px-4 py-2.5 rounded-xl border border-amber-500/30">
            <Users className="w-4 h-4 text-amber-400" />
            <span>{weddingData.contact.name}</span>
          </div>
          {weddingData.contact.phone && (
            <div className="inline-flex items-center space-x-2 bg-black/40 px-4 py-2.5 rounded-xl border border-amber-500/30">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{weddingData.contact.phone}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
