"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 700ms ease, transform 700ms ease`,
        transitionDelay: on ? "0ms" : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col">

      {/* Background */}
      <Image
        src="/bgheronew.png"
        alt=""
        fill
        priority
        quality={75}
        className="object-cover z-0"
        sizes="100vw"
      />

      {/* Bottom gradient */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Hero copy — anchored to bottom */}
        <main className="flex-1 flex flex-col justify-end px-5 md:px-10 pb-10 md:pb-14">
          <div className="flex items-end justify-between gap-6">

            {/* Left */}
            <div className="max-w-xl">
              <FadeUp delay={150}>
                <h1
                  className="font-normal leading-[1.05] mb-3"
                  style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.04em" }}
                >
                  Protésica de alta<br />
                  especialidad para<br />
                  <em style={{ fontStyle: "normal", fontWeight: 300, opacity: 0.65 }}>tu consultorio.</em>
                </h1>
              </FadeUp>

              <FadeUp delay={450}>
                <p className="text-[0.9rem] text-white/55 mb-5 leading-relaxed">
                  El laboratorio que te acompaña en diagnóstico, materiales y resultado final — caso por caso.
                </p>
              </FadeUp>

              <FadeUp delay={700}>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/527225123187?text=Hola%2C%20me%20interesa%20cotizar%20un%20caso%20con%20New%20Smile%20Dental%20Lab."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2.5 rounded-lg text-[0.82rem] font-medium hover:bg-gray-100 transition-colors"
                    style={{ textDecoration: "none", display: "inline-block" }}
                  >
                    Enviar mi caso
                  </a>
                  <button
                    onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
                    className="liquid-glass border border-white/20 text-white px-6 py-2.5 rounded-lg text-[0.82rem] font-medium hover:bg-white/10 transition-colors"
                  >
                    Ver servicios
                  </button>
                </div>
              </FadeUp>
            </div>

            {/* Right tag */}
            <FadeUp delay={900} className="hidden md:block shrink-0">
              <div className="liquid-glass border border-white/15 px-5 py-2.5 rounded-xl">
                <span className="text-[0.95rem] font-light text-white/80">
                  Laboratorio · Toluca, México
                </span>
              </div>
            </FadeUp>

          </div>
        </main>
      </div>
    </div>
  );
}
