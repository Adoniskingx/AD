import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventItem {
  id?: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description?: string;
  mapLink: string;
}

interface FunctionsSectionProps {
  functions?: EventItem[];
}

const defaultFunctions: EventItem[] = [
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    date: 'Friday, 13 November 2026',
    time: '7:00 PM Onwards',
    venue: 'Residence',
    address: 'Plot No 9, Rathi Layout, Layout No 2, Godhani Road, Nagpur 440030',
    description: 'Haldi Ceremony & Rituals',
    mapLink: 'https://maps.google.com/?q=Plot+No+9+Rathi+Layout+Godhani+Road+Nagpur',
  },
  {
    id: 'wedding',
    title: 'Wedding Ceremony',
    date: 'Saturday, 14 November 2026',
    time: '7:00 PM Onwards',
    venue: 'The Grand Jashan',
    address: 'Kamptee Road, Khairy, Nagpur 440029',
    description: 'Wedding Ceremony & Reception',
    mapLink: 'https://maps.google.com/?q=The+Grand+Jashan+Kamptee+Road+Khairy+Nagpur',
  },
];

export const FunctionsSection: React.FC<FunctionsSectionProps> = ({ functions = defaultFunctions }) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 space-y-6">
      {functions.map((event, index) => (
        <div
          key={event.id || index}
          className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 text-gray-800 space-y-4 text-left"
        >
          {/* Title */}
          <h3 className="text-2xl font-serif font-medium text-gray-900 tracking-wide">
            {event.title}
          </h3>

          {/* Date & Time */}
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{event.time}</span>
            </div>
          </div>

          {/* Venue & Address */}
          <div className="space-y-1.5 pt-1">
            <h4 className="font-semibold text-gray-900 text-base">
              {event.venue}
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{event.address}</span>
            </div>
          </div>

          {/* Event Description */}
          {event.description && (
            <p className="text-sm text-gray-500 pt-1">
              {event.description}
            </p>
          )}

          {/* View on Google Maps Button */}
          <div className="pt-2">
            <a
              href={event.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0047AB] hover:bg-[#003380] text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
