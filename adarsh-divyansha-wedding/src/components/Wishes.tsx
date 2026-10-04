import { FormEvent, useEffect, useState } from "react";
import { Heart } from "lucide-react";

type Wish = { id: string; name: string; message: string };

const key = "adarsh-divyansha-wishes";

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    try {
      setWishes(JSON.parse(localStorage.getItem(key) || "[]"));
    } catch {
      setWishes([]);
    }
  }, []);

  function addWish(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !message) return;
    const next = [{ id: crypto.randomUUID(), name, message }, ...wishes].slice(0, 30);
    setWishes(next);
    localStorage.setItem(key, JSON.stringify(next));
    e.currentTarget.reset();
  }

  return (
    <section className="bg-ivory-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Heart className="mx-auto h-5 w-5 text-gold" aria-hidden="true" />
        <h2 className="serif mt-4 text-center text-4xl text-maroon-950">Leave a wish</h2>
        <form onSubmit={addWish} className="mx-auto mt-10 max-w-xl space-y-4">
          <input name="name" aria-label="Your name" required placeholder="Your name" className="w-full border border-gold/35 bg-transparent px-4 py-3" />
          <textarea name="message" aria-label="Your wish" required placeholder="Write a blessing, memory or little note..." rows={4} className="w-full border border-gold/35 bg-transparent px-4 py-3" />
          <button className="w-full bg-maroon-700 px-5 py-4 text-sm uppercase tracking-[0.18em] text-white">Add to the wishes wall</button>
        </form>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {wishes.map((wish) => (
            <blockquote key={wish.id} className="border-l border-gold bg-ivory-100 p-6">
              <p className="serif text-xl leading-relaxed text-maroon-950">“{wish.message}”</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.18em] text-brown/55">— {wish.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}