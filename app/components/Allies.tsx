"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
          {track.map((logo, i) =>
            logo.src.endsWith(".svg") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={42}
                className="ally-logo"
                style={{
                  height: "clamp(28px, 3.5vw, 42px)",
                  width: "auto",
                  maxWidth: "140px",
                  objectFit: "contain",
                  flexShrink: 0,
                  filter: "brightness(0) invert(1)",
                }}
              />
            ) : (
              <div
                key={i}
                className="ally-logo-wrap"
                style={{
                  position: "relative",
                  height: "clamp(28px, 3.5vw, 42px)",
                  width: "140px",
                  flexShrink: 0,
                  filter: "brightness(0) invert(1)",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="140px"
                />
              </div>
            )
          )}
        </div>
      </motion.div>
      <style>{`
        .ally-logo, .ally-logo-wrap { opacity: 0.45; transition: opacity 0.25s ease; }
        .ally-logo:hover, .ally-logo-wrap:hover { opacity: 0.85; }
      `}</style>
    </section>
  );
}
