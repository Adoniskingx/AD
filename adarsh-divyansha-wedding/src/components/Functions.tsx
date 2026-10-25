import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function Functions() {
  return (
    <section className="py-12 px-4 max-w-xl mx-auto space-y-6">
      {weddingData.functions.map((func) => (
        <div 
          key={func.id} 
          className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 text-stone-800 space-y-4"
        >
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-serif text-stone-900 font-medium leading-tight">
            {func.title}
          </h3>

          {/* Date & Time */}
          <div className="space-y-2 text-stone-600 text-sm">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-amber-700/80 flex-shrink-0" />
              <span>{func.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-amber-700/80 flex-shrink-0" />
              <span>{func.time}</span>
            </div>
          </div>

          {/* Venue & Address */}
          <div className="pt-2 space-y-1">
            <p className="font-bold text-stone-900 text-base">
              {func.venue}
            </p>
            <div className="flex items-start gap-2 text-stone-600 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-amber-700/80 flex-shrink-0 mt-1" />
              <span>{func.address}</span>
            </div>
          </div>

          {/* Description */}
          {func.description && (
            <p className="text-stone-600 text-sm pt-1">
              {func.description}
            </p>
          )}

          {/* Map Button */}
          {func.mapUrl && (
            <div className="pt-2">
              <a
                href={func.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#113E94] hover:bg-[#0E3279] text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
