import { weddingData } from "../data/weddingData";

export default function Video() {
  return (
    <section className="bg-maroon-700 px-6 py-24 text-ivory-50 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Pre-wedding film</p>
        <h2 className="serif mt-3 text-4xl sm:text-5xl">{weddingData.video.title}</h2>
        <div className="mt-10 aspect-video overflow-hidden border border-gold/40 bg-maroon-950">
          <iframe
            className="h-full w-full"
            src={weddingData.video.youtubeEmbedUrl}
            title="Adarsh and Divyansha pre-wedding video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}