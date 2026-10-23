import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Clock, Calendar, Sparkles } from 'lucide-react';

export default function Functions() {
  return (
    <section className="py-20 px-4 bg-stone-950/40 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif mb-2">
            "Atta Deep Bhava"
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 mb-4">
            Functions & Ceremonies
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto"></div>
          <p className="text-stone-300 text-sm italic font-serif mt-3">
            Two Souls. One Promise • A Lifetime Together
          </p>
        </div>

        <div className="space-y-8">
          {weddingData.functions.map((func) => (
            <div 
              key={func.id} 
              className="card-dark-gold p-6 md:p-8 rounded-2xl relative shadow-xl border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-medium">Auspicious Celebration</span>
              </div>

              <h3 className="text-2xl font-serif text-amber-100 mb-3">{func.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-300 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{func.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{func.time}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-amber-200 font-serif text-lg">{func.venue}</p>
                <p className="text-sm text-stone-300 flex items-start gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{func.address}</span>
                </p>
              </div>

              <p className="text-stone-300/80 text-sm mb-6 italic">{func.description}</p>

              {func.mapUrl && (
                <a
                  href={func.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-stone-950 font-medium text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View on Google Maps</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
