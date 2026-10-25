import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function Functions() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Wedding Events</h2>
          <div className="w-16 h-0.5 bg-amber-400/60 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {weddingData.functions.map((func) => (
            <div 
              key={func.id} 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 text-left"
            >
              <h3 className="text-2xl font-serif text-gray-900 mb-3">{func.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{func.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{func.time}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900">{func.venue}</p>
                <p className="text-sm text-gray-600 flex items-start gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{func.address}</span>
                </p>
              </div>

              <p className="text-gray-700 text-sm mb-6 italic">{func.description}</p>

              {func.mapUrl && (
                <a
                  href={func.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0047AB] text-white text-sm rounded-lg hover:bg-[#00388a] transition-colors shadow-sm"
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
