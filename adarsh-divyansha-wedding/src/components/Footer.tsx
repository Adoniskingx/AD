import { weddingData } from "../data/weddingData";

export default function Footer() {
  return (
    <footer className="bg-ivory-100 px-6 py-16 text-center">
      <div className="editorial-rule mx-auto mb-8 w-32" />
      <p className="serif text-3xl text-maroon-700">{weddingData.footer.text}</p>
      <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-brown/45">{weddingData.weddingDateDisplay}</p>
    </footer>
  );
}