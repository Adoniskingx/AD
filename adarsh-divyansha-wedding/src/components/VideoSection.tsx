import React from 'react';
import { weddingData } from '../data/weddingData';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  // Check if a video source or YouTube link is provided in weddingData
  const videoUrl = weddingData.video?.url;
  const youtubeUrl = weddingData.video?.youtubeEmbedUrl;

  return (
    <section className="py-12 px-4 min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto card-dark-gold rounded-2xl p-6 md:p-12 text-center shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6 tracking-wide">
          {weddingData.video?.title || "Our Story in Motion"}
        </h2>

        <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-amber-500/40 bg-black/80 shadow-2xl flex items-center justify-center">
          {youtubeUrl ? (
            <iframe 
              src={youtubeUrl} 
              title="Wedding Video" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          ) : videoUrl ? (
            <video 
              controls 
              className="w-full h-full object-cover"
              poster={weddingData.video?.thumbnail}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            /* Placeholder state if no video link is added yet */
            <div className="flex flex-col items-center justify-center p-8 text-amber-200/70 space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-lg">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <p className="font-serif italic text-sm md:text-base">Video coming soon...</p>
              <p className="text-xs text-amber-400/60 max-w-xs">
                Upload your video file to your repository's <code className="bg-black/50 px-1.5 py-0.5 rounded text-amber-300">public/</code> folder or add a YouTube embed link in your configuration.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
