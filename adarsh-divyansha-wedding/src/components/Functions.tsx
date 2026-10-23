export const Functions = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-amber-100 mb-2">Functions & Ceremonies</h2>
        <p className="text-amber-300/80 text-sm tracking-widest uppercase">Awaiting to Welcome You</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Haldi Card */}
        <div className="card-dark-gold p-8 rounded-3xl relative">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">13 November 2026</span>
          <h3 className="text-2xl font-serif text-amber-100 mt-2 mb-3">Haldi</h3>
          <p className="text-stone-300 text-sm mb-4">7:00 PM Onwards[span_16](start_span)[span_16](end_span)</p>
          <p className="text-stone-300 text-sm leading-relaxed">
            Plot No 9, Rathi Layout, Layout No 2, Godhani Rd, Nagpur 440030[span_17](start_span)[span_17](end_span)
          </p>
        </div>

        {/* Wedding Card */}
        <div className="card-dark-gold p-8 rounded-3xl relative border-amber-400/60">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">14 November 2026[span_18](start_span)[span_18](end_span)</span>
          <h3 className="text-2xl font-serif text-amber-100 mt-2 mb-3">Wedding Ceremony & Rituals[span_19](start_span)[span_19](end_span)</h3>
          <p className="text-stone-300 text-sm mb-4">7:00 PM Onwards[span_20](start_span)[span_20](end_span)</p>
          <p className="text-stone-300 text-sm leading-relaxed">
            The Grand Jashan Lawn, Kamptee Rd, Khairy, Nagpur 440029[span_21](start_span)[span_21](end_span)
          </p>
        </div>
      </div>
    </section>
  );
};
