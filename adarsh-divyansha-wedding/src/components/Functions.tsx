import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

export const Functions: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-amber-100 mb-2">Functions & Ceremonies</h2>
        <p className="text-amber-300/80 text-sm tracking-widest uppercase">Awaiting to Welcome You</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {weddingData.functions.map((func) => (
          <div key={func.id} className="card-dark-gold p-8 rounded-3xl relative flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
                {func.date}
              </span>
              <h3 className="text-2xl font-serif text-amber-100 mt-2 mb-3">
                {func.title}
              </h3>
              <p className="text-stone-300 text-sm mb-4 font-medium">{func.time}</p>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                {func.address}
              </p>
            </div>
            {func.mapUrl && (
              <a
                href={func.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                <MapPin className="w-4 h-4" />
                <span>View Location Map</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Add default export to support default imports in App.tsx
export default Functions;
