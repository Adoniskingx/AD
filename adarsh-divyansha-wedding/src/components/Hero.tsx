import { motion, type MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { weddingData } from "../data/weddingData";

function TempleHalf({ side, x, scale, opacity }: {
  side: "left" | "right";
  x: MotionValue<string>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  const clip = side === "left" ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)";
  return (
    <motion.img
      src={weddingData.hero.templeAsset}
      alt=""
      aria-hidden="true"
      className="absolute bottom-0 left-1/2 w-[118vw] max-w-none -translate-x-1/2 object-contain object-bottom sm:w-[900px]"
      style={{ clipPath: clip, x, scale, opacity, transformOrigin: "50% 100%" }}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 0.65], [1, 1.42]);
  const leftX = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "-42%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "42%"]);
  const visualOpacity = useTransform(scrollYProgress, [0.72, 1], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.38, 0.72, 1], [0, 0.85, 0]);

  return (
    <section ref={ref} className="relative h-[115svh] overflow-hidden bg-[#80C8F5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(255,255,255,.9)_0_5%,transparent_13%),radial-gradient(circle_at_68%_12%,rgba(255,255,255,.88)_0_6%,transparent_16%),radial-gradient(circle_at_84%_26%,rgba(255,255,255,.76)_0_5%,transparent_15%)] opacity-80" />
      <motion.div style={reduced ? undefined : { opacity: textOpacity }} className="relative z-20 mx-auto flex h-[64svh] max-w-5xl flex-col items-center px-5 pt-[14svh] text-center text-white">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.34em] sm:text-xs">{weddingData.hero.eyebrow}</p>
        <h1 className="serif max-w-[12ch] text-5xl font-medium leading-[0.98] drop-shadow-sm sm:text-7xl lg:text-8xl">
          {weddingData.couple.display}
        </h1>
        <p className="mt-6 text-sm tracking-[0.18em] sm:text-base">{weddingData.weddingDateDisplay}</p>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[76svh]">
        {reduced ? (
          <img
            src={weddingData.hero.templeAsset}
            alt="Illustrated Indian temple and wedding mandap"
            className="absolute bottom-0 left-1/2 w-[118vw] max-w-none -translate-x-1/2 object-contain object-bottom sm:w-[900px]"
          />
        ) : (
          <>
            <motion.div
              className="absolute bottom-[5%] left-1/2 h-52 w-28 -translate-x-1/2 rounded-full bg-[#FFE4A7] blur-3xl"
              style={{ opacity: glowOpacity }}
            />
            <TempleHalf side="left" x={leftX} scale={scale} opacity={visualOpacity} />
            <TempleHalf side="right" x={rightX} scale={scale} opacity={visualOpacity} />
          </>
        )}
      </div>

      <motion.div
        style={reduced ? undefined : { opacity: textOpacity }}
        className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 text-center text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">{weddingData.hero.scrollCue}</span>
        <ChevronDown className="mx-auto mt-2 h-4 w-4 animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  );
}