import React from 'react';
import { weddingData } from '../data/weddingData';
import { MapPin, Calendar, Clock } from 'lucide-react';

export const Functions: React.FC = () => {
  // Fallback-safe event list accessor to prevent TypeScript property errors
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
        {eventsList.map((event: any, index: number)
      
