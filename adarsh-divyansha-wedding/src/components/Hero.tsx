import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-400 via-sky-200 to-white flex flex-col items-center justify-between py-12 px-4">
      {/* Top Header Content */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 mt-6"
      >
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-royalBlue font-semibold mb-2">
          {weddingData.hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-darkCharcoal font-bold tracking-tight">
          {weddingData.hero.title}
        </h1>
        <p className="mt-3 text-lg md:text-xl font-medium text-royalBlue">
          {weddingData.hero.date}
        </p>
      </motion.div>

      {/* Central Stupa Artwork Area */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative w-full max-w-lg h-72 md:h-96 flex items-center justify-center my-auto"
      >
        <div className="absolute inset-0 bg-radial from-white/80 to-transparent rounded-full filter blur-xl" />
        <div className="relative z-10 text-center text-darkCharcoal/70 font-serif italic border border-gold/40 p-8 rounded-2xl bg-white/60 backdrop-blur-md shadow-xl">
          <p className="text-base font-semibold text-royalBlue">Deekshabhoomi Stupa & Torana Gateway</p>
          <p className="text-xs mt-2 text-darkCharcoal/60">Nagpur, Maharashtra</p>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="z-10 flex flex-col items-center text-darkCharcoal/80 cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest mb-1 font-medium">Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};
