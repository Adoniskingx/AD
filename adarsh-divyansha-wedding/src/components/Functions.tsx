import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Functions() {
  return (
    <section className="py-12 px-4 max-w-xl mx-auto relative z-10 space-y-8">
      <div className="text-center space-y-2">
        <span className="text-amber-400 text-xs uppercase tracking-[0.3em] font-serif block">
          Events & Schedule
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#FDF8F0]">
          Wedding Festivities
        </h2>
      </div>

      <div className="space-y-6">
        {weddingData.functions.map((func, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-[#800020] via-[#5c0017] to-[#3b000f] text-[#FDF8F0] rounded-3xl p-6 md:p-8 shadow-xl border border-amber-500/30 space-y-5 relative overflow-hidden"
          >
            <h3 className="text-2xl font-serif font-medium text-amber-200 border-b border-amber-500/20 pb-3">
              {func.title}
            </h3>

            <div className="space-y-3 font-serif text-sm md:text-base text-stone-200">
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-0.5">🕒</span>
                <div>
                  <p className="font-medium text-[#FDF8F0]">{func.time}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-0.5">📅</span>
                <div>
                  <p className="font-medium text-[#FDF8F0]">{func.date}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-0.5">📍</span>
                <div>
                  <p className="font-semibold text-amber-200">{func.venue}</p>
                  <p className="text-xs text-stone-300 mt-0.5">{func.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={func.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-amber-400 hover:bg-amber-300 text-stone-950 font-medium py-3 px-4 rounded-xl shadow-md transition duration-200 font-sans tracking-wide text-sm uppercase"
              >
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
