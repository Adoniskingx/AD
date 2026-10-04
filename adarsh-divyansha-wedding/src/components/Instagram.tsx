import { Instagram as InstagramIcon } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function Instagram() {
  return (
    <section className="border-y border-gold/25 bg-ivory-100 px-6 py-20 text-center">
      <InstagramIcon className="mx-auto h-6 w-6 text-maroon-700" aria-hidden="true" />
      <h2 className="serif mt-5 text-4xl text-maroon-950">{weddingData.instagram.title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-brown/70">{weddingData.instagram.text}</p>
      <p className="serif mt-6 text-3xl text-maroon-700">{weddingData.instagram.handle}</p>
    </section>
  );
}