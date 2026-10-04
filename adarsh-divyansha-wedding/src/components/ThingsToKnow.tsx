import { MapPin, Phone, Bell } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function ThingsToKnow() {
  const items = [
    { icon: MapPin, title: weddingData.venue.name, text: weddingData.venue.address },
    { icon: Phone, title: weddingData.contact.label, text: weddingData.contact.phone },
    { icon: Bell, title: weddingData.reminder.label, text: weddingData.reminder.text },
  ];
  return (
    <section className="bg-ivory-100 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="serif text-center text-4xl text-maroon-950">Things to Know</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border border-gold/35 bg-ivory-50 p-7">
              <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="serif mt-5 text-2xl text-maroon-700">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-brown/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}