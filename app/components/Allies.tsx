"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { src: "/allies/kulzer.webp",                              alt: "Kulzer" },
  { src: "/allies/heraceram-image-640w-360h.png",            alt: "Heraceram" },
  { src: "/allies/Ivoclar_Vivadent.svg",                     alt: "Ivoclar Vivadent" },
  { src: "/allies/Dentsply_sirona_logo.svg.png",             alt: "Dentsply Sirona" },
  { src: "/allies/anycubic-logo.avif",                       alt: "Anycubic" },
  { src: "/allies/Elegoo-logo.webp",                         alt: "Elegoo" },
  { src: "/allies/63a9f8c9be456f0a84bd4093_leafbig.png",     alt: "Aliado" },
  { src: "/allies/cropped-cropped-Logo_2019_web.png",        alt: "Aliado" },
];

const track = [...logos, ...logos];

export default function Allies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="allies"
      className="relative bg-black py-12 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative overflow-hidden w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "max-content",
            gap: "clamp(3rem, 6vw, 5rem)",
            paddingLeft: "clamp(2.5rem, 5vw, 4.5rem)",
          }}
        >
          {track.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              style={{
                height: "clamp(28px, 3.5vw, 42px)",
                width: "auto",
                maxWidth: "140px",
                objectFit: "contain",
                flexShrink: 0,
                filter: "brightness(0) invert(1)",
                opacity: 0.45,
                transition: "opacity 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.45"; }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
