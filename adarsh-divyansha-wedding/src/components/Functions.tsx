import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Calendar, Clock } from 'lucide-react';

export const Functions: React.FC = () => {
  // Pulling events safely based on your weddingData structure
  const eventsList = (weddingData as any).events || [
    {
      name: "Haldi Ceremony",
      time: "7:00 PM Onwards",
      date: "Friday, 13 November 2026",
      venue: "Groom's Residence",
      address: "Plot No. 9, Rathi Layout, Layout No. 2, Godhani Road, Nagpur",
      mapLink: "#"
    },
    {
      name: "Wedding & Reception",
      time: "7:00 PM Onwards",
      date: "Saturday, 14 November 2026",
      venue: "The Grand Jashan Lawn",
      address: "Kamptee Road, Khairy, Nagpur, Maharashtra",
      mapLink: "#"
    }
  ];

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
        {eventsList.map((event: any, index: number) => (
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
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-stone-900 shadow" />
                  <div className="flex items-center gap-2 text-amber-200 font-serif text-sm">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-stone-900 shadow" />
                  <div className="flex items-center gap-2 text-amber-200 font-serif text-sm">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-stone-900 shadow" />
                  <div className="flex items-start gap-2 text-stone-200 font-serif text-sm">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-100">{event.venue}</p>
                      <p className="text-xs text-stone-300 mt-0.5">{event.address}</p>
                    </div>
                  </div>
                </div>

              </div>

              {event.mapLink && event.mapLink !== '#' && (
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-serif font-semibold py-2.5 rounded-xl shadow transition-colors text-xs uppercase tracking-wider"
                >
                  Get Directions
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Functions;
