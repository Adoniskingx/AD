import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Functions: React.FC = () => {
  const functionsList = weddingData.functions || [
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      date: 'Friday, 13 November 2026',
      time: '7:00 PM Onwards',
      venue: 'Residence',
      address: 'Plot No 9, Rathi Layout, Layout No 2, Godhani Road, Nagpur 440030',
      description: 'Haldi Ceremony & Rituals',
      mapUrl: 'https://maps.google.com/?q=Plot+No+9+Rathi+Layout+Godhani+Road+Nagpur',
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      date: 'Saturday, 14 November 2026',
      time: '7:00 PM Onwards',
      venue: 'The Grand Jashan',
      address: 'Kamptee Road, Khairy, Nagpur 440029',
      description: 'Wedding Ceremony & Reception',
      mapUrl: 'https://maps.google.com/?q=The+Grand+Jashan+Kamptee+Road+Khairy+Nagpur',
    },
  ];

  return (
    <section className="py-8 px-4 max-w-md mx-auto space-y-6">
      {functionsList.map((event, index) => {
        // Fallbacks for data compatibility
        const title = event.title;
        const date = event.date;
        const time = event.time;
        const venue = (event as any).venue || '';
        const address = event.address;
        const description = (event as any).description || '';
        const mapUrl = (event as any).mapUrl || (event as any).mapLink || '#';

        return (
          <div
            key={event.id || index}
            className="bg-white rounded-[28px] p-6 text-gray-900 space-y-4 text-left shadow-lg border border-gray-100"
          >
            {/* Ceremony Title */}
            <h3 className="text-2xl font-serif font-medium text-gray-900 tracking-wide">
              {title}
            </h3>

            {/* Date & Time */}
            <div className="space-y-1.5 text-sm text-amber-900/80">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-amber-800/70 shrink-0" />
                <span className="font-normal">{date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-800/70 shrink-0" />
                <span className="font-normal">{time}</span>
              </div>
            </div>

            {/* Venue & Location Address */}
            <div className="space-y-1 pt-1">
              {venue && (
                <h4 className="font-semibold text-gray-900 text-base">
                  {venue}
                </h4>
              )}
              <div className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                <MapPin className="w-4 h-4 text-amber-800/70 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
            </div>

            {/* Subtitle / Description */}
            {description && (
              <p className="text-sm text-gray-500 pt-1">
                {description}
              </p>
            )}

            {/* Google Maps Button */}
            <div className="pt
            
