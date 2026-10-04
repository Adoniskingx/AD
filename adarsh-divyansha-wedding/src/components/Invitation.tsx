import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Invitation() {
  return (
    <section className="indian-pattern relative overflow-hidden bg-ivory-50 px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full border border-gold/50 text-gold" aria-hidden="true">
          <span className="serif text-3xl">☸</span>
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-maroon-700">{weddingData.invitation.blessing}</p>
        <div className="editorial-rule mx-auto my-8 w-32" />
        <p className="serif text-2xl italic text-maroon-950">{weddingData.invitation.familyOne}</p>
        <p className="my-2 text-[11px] uppercase tracking-[0.32em] text-gold">{weddingData.invitation.invite}</p>
        <p className="serif text-2xl italic text-maroon-950">{weddingData.invitation.familyTwo}</p>
        <h2 className="serif mt-12 text-5xl leading-tight text-maroon-700 sm:text-6xl">
          {weddingData.couple.groom}<span className="mx-3 text-gold">&</span>{weddingData.couple.bride}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-brown/75">{weddingData.invitation.line}</p>
      </motion.div>
    </section>
  );
}