import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Calendar, Clock } from 'lucide-react';

export const Functions: React.FC = () => {
  return (
    <section className="py-8 px-4 max-w-xl mx-auto space-y-8 relative z-10">
      <div className="text-center space-y-1">
        <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif">
          Events & Schedule
        </p>
        <h2 className="text-3xl font-serif text-amber-100 font-medium">
          Wedding Festivities
        </h2>
      </div>

      <div className="space-y-8">
        {weddingData.events.map((event, index) => (
          <div key={index} className="space-y-3">
            
            {/* Crimson Banner */}
            <div className="relative bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-amber-200 p-3.5 rounded-2xl border border-amber-500/40 shadow-xl text-center">
              <h3 className="text-2xl font-serif tracking-wide text-amber-100">
                {event.name}
              </h3>
            </div>

            {/* Crimson Lace Card */}
            <div className="relative bg-red-950/90 backdrop-blur-md rounded-3xl p-6 border-2 border-amber-500/40 shadow-2xl text-stone-100 space-y-5">
              
              {/* Monogram Badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-amber-300 shadow-md flex items-center justify-center">
                <span className="font-serif text-[10px] font-bold text-amber-200">A&D</span>
              </div>

              {/* Connected Nodes Timeline */}
              <div className="relative pl-6 border-l-2 border-amber-500/50 space-y-5">
                
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded
                  
