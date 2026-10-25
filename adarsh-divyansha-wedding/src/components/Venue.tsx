import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

export const Venue: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto card-dark-gold rounded-2xl p-8 text-center shadow-xl">
        <h2 className="text-3xl font-serif text-gold mb-4">{weddingData.venue.label || "Venue Details"}</h2>
        <h3 className="text-xl font-serif text-amber-200 mb-2">{weddingData.venue.name}</h3>
        <p className="text-amber-100/90 text-sm md:text-base mb-6">{weddingData.venue.address}</p>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(weddingData.venue.name + ' ' + weddingData.venue.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg"
        >
          <MapPin className="w-5 h-5" />
          <span>Open in Google Maps</span>
        </a>
      </div>
    </section>
  );
};

export default Venue;
