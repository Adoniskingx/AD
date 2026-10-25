import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  '/Photos/1.jpg',
  '/Photos/4.jpg',
  '/Photos/5.jpg',
  '/Photos/10.jpg'
];

export default function Carousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const selectPhoto = (idx: number) => {
    setActiveIdx(idx);
  };

  const prevPhoto = () => {
    setActiveIdx(activeIdx === 0 ? photos.length - 1 : activeIdx - 1);
  };

  const nextPhoto = () => {
    setActiveIdx(activeIdx === photos.length - 1 ? 0 : activeIdx + 1);
  };

  return (
    <section className="text-center space-y-4 max-w-xl mx-auto px-4">
      <div className="mb-2">
        <p className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif mb-1">#DIVYADARSHAN</p>
        <h2 className="text-2xl md:text-3xl font-serif text-amber-100 font-medium">Our Moments</h2>
      </div>

      <div className="bg-[#FAF7F2] text-stone-900 rounded-[2.5rem] p-4 md:p-6 shadow-2xl border-2 border-amber-400/40 space-y-6">
        {/* Main Carousel Display */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md border-2 border-amber-300/50 bg-stone-950">
          <img 
            
