import { weddingData } from "../data/weddingData";

export default function Couple() {
  return (
    <section className="bg-ivory-50 px-6 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">The two of us</p>
        <h2 className="serif mt-3 text-5xl text-maroon-700 sm:text-6xl">
          {weddingData.couple.groom} <span className="text-gold">&</span> {weddingData.couple.bride}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-brown/70">{weddingData.couple.note}</p>
      </div>
    </section>
  );
}