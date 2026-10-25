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
        <h2 className="
          
