"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center w-full h-dvh bg-[#070707] text-white overflow-hidden">

      {/* Text — staggered fade-up */}
      <div className="flex flex-col items-center text-center pt-28 px-6 shrink-0">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="block font-light text-white/50 text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.05] tracking-[-0.03em]"
        >
          Arte protésico
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="block font-bold text-white text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.05] tracking-[-0.03em] mb-8"
        >
          al más alto nivel.
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease }}
          className="flex gap-3 flex-wrap justify-center"
        >
          <button className="px-6 py-3 rounded-full bg-[#F3EEE4] text-black text-sm font-semibold hover:bg-white transition-colors cursor-pointer">
            Solicitar cotización
          </button>
          <button className="px-6 py-3 rounded-full bg-white/8 text-white text-sm border border-white/12 hover:bg-white/14 transition-colors cursor-pointer">
            Ver trabajos
          </button>
        </motion.div>
      </div>

      {/* Visual — subtle rise with slight scale */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.18, ease }}
        className="relative flex-1 w-full min-h-0 max-w-160 mt-6 -mb-[8%]"
      >
        <Image
          src="/iconglow.svg"
          alt=""
          fill
          priority
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none bg-linear-to-t from-black via-black/70 to-transparent" />

    </section>
  );
}
