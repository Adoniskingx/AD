import { FormEvent, useState } from "react";
import { Check, X } from "lucide-react";

type Choice = "yes" | "no" | null;

export default function RSVP() {
  const [choice, setChoice] = useState<Choice>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const guests = Number(form.get("guests") || 1);
    if (!name) return setError("Please enter your name.");
    if (choice === "yes" && (!Number.isFinite(guests) || guests < 1 || guests > 8)) return setError("Please enter between 1 and 8 guests.");
    setError("");
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="bg-maroon-950 px-6 py-24 text-ivory-50">
      <div className="mx-auto max-w-2xl">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gold">Kindly reply</p>
        <h2 className="serif mt-3 text-center text-4xl sm:text-5xl">Will you join us?</h2>

        {!submitted ? (
          <>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <button onClick={() => setChoice("yes")} className={`border px-4 py-4 ${choice === "yes" ? "border-gold bg-gold text-maroon-950" : "border-gold/40"}`}>
                <Check className="mx-auto mb-2 h-5 w-5" aria-hidden="true" /> Joyfully, yes
              </button>
              <button onClick={() => setChoice("no")} className={`border px-4 py-4 ${choice === "no" ? "border-gold bg-gold text-maroon-950" : "border-gold/40"}`}>
                <X className="mx-auto mb-2 h-5 w-5" aria-hidden="true" /> Regretfully, no
              </button>
            </div>

            {choice && (
              <form onSubmit={submit} className="mt-8 space-y-5" noValidate>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold">Your name</span>
                  <input name="name" required className="w-full border border-gold/35 bg-transparent px-4 py-3 text-ivory-50 placeholder:text-ivory-50/35" placeholder="Full name" />
                </label>
                {choice === "yes" && (
                  <>
                    <label className="block">
                      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold">Number of guests</span>
                      <input name="guests" type="number" min="1" max="8" defaultValue="1" className="w-full border border-gold/35 bg-transparent px-4 py-3" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold">Dietary note</span>
                      <textarea name="dietary" rows={3} className="w-full border border-gold/35 bg-transparent px-4 py-3" placeholder="Optional" />
                    </label>
                  </>
                )}
                {error && <p role="alert" className="text-sm text-[#F2C8C8]">{error}</p>}
                <button type="submit" className="w-full bg-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-maroon-950">Send RSVP</button>
              </form>
            )}
          </>
        ) : (
          <div className="mt-12 border border-gold/40 p-8 text-center">
            <p className="serif text-3xl">Thank you for replying.</p>
            <p className="mt-3 text-sm text-ivory-100/70">Your response has been noted on this device.</p>
          </div>
        )}
      </div>
    </section>
  );
}