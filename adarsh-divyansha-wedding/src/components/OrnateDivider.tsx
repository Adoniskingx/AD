import React from 'react';

export const OrnateDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-10 px-4 text-amber-700">
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-amber-400 to-amber-600" />
      <span className="mx-4 text-amber-600 font-serif tracking-widest text-sm sm:text-base">❖ 🪷 ❖</span>
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-l from-transparent via-amber-400 to-amber-600" />
    </div>
  );
};

export default OrnateDivider;
