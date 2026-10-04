import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Functions() {
  return (
    <section className="bg-maroon-950 px-6 py-24 text-ivory-50 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gold">Wedding week</p>
        <h2 className="serif mt-3 text-center text-4xl sm:text-5xl">The Celebrations</h2>
        <div className="mt-14 grid gap-px border border-gold/30 bg-gold/30 md:grid-cols-3">
          {weddingData.functions.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="bg-maroon-950 p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold">{item.date}</p>
              <h3 className="serif mt-4 text-3xl">{item.title}</h3>
              <p className="mt-2 text-sm text-ivory-100/70">{item.time}</p>
              <p className="mt-6 text-sm leading-7 text-ivory-100/70">{item.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}