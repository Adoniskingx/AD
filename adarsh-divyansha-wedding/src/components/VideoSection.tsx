import React from 'react';
import { weddingData } from '../data/weddingData';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const youtubeUrl = weddingData.video?.youtubeEmbedUrl;

  return (
    <section className="relative py-8 px-3 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto card-dark-gold rounded-2xl p-5 md:p-10 shadow-2xl text-center flex flex-col justify-center">
        
        <h2 className="text-2xl md:text-4xl font-serif text-gold mb-5 tracking-wide">
          {weddingData.video?.title || "Our Story"} 🎬
        </h2>

        {/* Responsive Video Box */}
        <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-amber-500/40 bg-black shadow-2xl">
          {youtubeUrl ? (
            <iframe 
              src={`${youtubeUrl}?autoplay=0&mute=0&controls=1`} 
              title="Wedding Video" 
              className="w-full h-full absolute inset-0 border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-amber-200/70 space-y-2 h-full">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-lg">
                <Play className="w-7 h-7 ml-1" />
              </div>
              <p className="font-serif italic text-xs md:text-sm">Video coming soon...</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
