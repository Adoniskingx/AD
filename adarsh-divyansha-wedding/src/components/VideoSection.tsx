import React from 'react';
import { weddingData } from '../data/weddingData';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const youtubeUrl = weddingData.video?.youtubeEmbedUrl;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl mx-auto card-dark-gold rounded-2xl p-6 md:p-10 shadow-2xl text-center flex flex-col justify-between min-h-[85vh] md:min-h-[88vh]">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4 tracking-wide">
          {weddingData.video?.title || "Our Story"} 🎬
        </h2>

        {/* Enlarged Video Frame Container */}
        <div className="relative w-full flex-1 max-h-[68vh] overflow-hidden rounded-xl border border-amber-500/40 bg-black/80 shadow-2xl my-auto flex items-center justify-center">
          {youtubeUrl ? (
            <iframe 
              src={youtubeUrl} 
              title="Wedding Video" 
              className="w-full h-full min-h-[350px] md:min-h-[450px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-amber-200/70 space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-lg">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <p className="font-serif italic text-sm md:text-base">Video coming soon...</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
