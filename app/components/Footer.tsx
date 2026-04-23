"use client";

import { useState } from "react";

const pages = ["Historia", "Servicios", "Tecnología", "Certificaciones", "Contáctanos"];
const social = ["Instagram", "Facebook", "LinkedIn", "WhatsApp"];

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.6rem] font-bold tracking-[0.16em] uppercase text-white/30 mb-5">
      {children}
    </p>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <li>
      <a href="#" className="text-[0.95rem] text-white/65 no-underline transition-colors duration-200 hover:text-white">
        {label}
      </a>
    </li>
  );
}

function NewsletterWidget() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3 className="text-[1.1rem] font-semibold text-white mb-2">Mantente al día</h3>
      <p className="text-[0.82rem] text-white/45 leading-relaxed mb-5">
        Recibe novedades sobre técnicas, materiales y casos clínicos de alta especialidad.
      </p>

      {/* Input + button */}
      <div className="flex rounded-lg overflow-hidden border border-white/15 mb-3">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/5 text-white/70 text-[0.82rem] px-4 py-3 outline-none placeholder:text-white/25 min-w-0"
        />
        <button className="bg-white text-[#1F2C43] text-[0.78rem] font-semibold px-4 py-3 shrink-0 hover:bg-white/90 transition-colors duration-200">
          Suscribirse
        </button>
      </div>

      {/* Privacy note */}
      <p className="text-[0.7rem] text-white/25 leading-relaxed mb-6">
        ✦ Al suscribirte aceptas nuestra{" "}
        <a href="#" className="text-white/40 underline hover:text-white/60 transition-colors duration-200">
          Política de privacidad
        </a>
        .
      </p>

      </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#76849b] overflow-hidden">

      {/* ── Main grid ── */}
      <div className="
        max-w-[1200px] mx-auto
        px-[clamp(1.5rem,4vw,3rem)] pt-20 pb-12
        grid gap-y-12 gap-x-16
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.6fr]
      ">
        {/* Pages */}
        <div>
          <ColHead>Páginas</ColHead>
          <ul className="list-none flex flex-col gap-[0.65rem]">
            {pages.map((l) => <NavLink key={l} label={l} />)}
          </ul>
        </div>

        {/* Social */}
        <div>
          <ColHead>Social</ColHead>
          <ul className="list-none flex flex-col gap-[0.65rem]">
            {social.map((l) => <NavLink key={l} label={l} />)}
          </ul>
        </div>

        {/* Newsletter + Schedule */}
        <NewsletterWidget />
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/[0.07] mx-[clamp(1.5rem,4vw,3rem)]" />

      {/* ── Locations row ── */}
      <div className="
        max-w-[1200px] mx-auto
        px-[clamp(1.5rem,4vw,3rem)] pt-10 pb-12
        grid gap-8
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      ">
        <div>
          <ColHead>Ubicación</ColHead>
          <p className="text-[0.9rem] font-medium text-white/80 mb-[0.35rem]">Toluca, México</p>
          <p className="text-[0.8rem] text-white/30 leading-[1.7]">
            C. Manuel J. Clouthier 209<br />Col. Cuauhtémoc, C.P. 50040
          </p>
        </div>
        <div>
          <ColHead>Horario</ColHead>
          <p className="text-[0.9rem] font-medium text-white/80 mb-[0.35rem]">Lun – Vie</p>
          <p className="text-[0.8rem] text-white/30 leading-[1.7]">9:00 – 18:00 hrs</p>
        </div>
        <div>
          <ColHead>Contacto</ColHead>
          <p className="text-[0.9rem] font-medium text-white/80 mb-[0.35rem]">hola@newsmile.mx</p>
          <p className="text-[0.8rem] text-white/30 leading-[1.7]">+52 (722) 000 0000</p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.07] py-5 px-[clamp(1.5rem,4vw,3rem)]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-3">
          <span className="text-[0.72rem] text-white/20 tracking-[0.04em]">
            {new Date().getFullYear()} · New Smile Dental Lab · Toluca, México
          </span>
          <a
            href="#"
            className="text-[0.72rem] text-white/20 no-underline tracking-[0.08em] uppercase hover:text-white/50 transition-colors duration-200"
          >
            Política de privacidad
          </a>
          <a
            href="mailto:hola@newsmile.mx"
            className="text-[0.72rem] text-white/20 no-underline hover:text-white/50 transition-colors duration-200"
          >
            hola@newsmile.mx
          </a>
          <a
            href="https://rmsindustries.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] text-white/20 no-underline tracking-[0.08em] uppercase hover:text-white/50 transition-colors duration-200"
          >
            Powered by RMS
          </a>
        </div>
      </div>

      {/* ── Oversized brand watermark ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/newsmile text.svg"
        alt=""
        aria-hidden="true"
        className="block w-[100%] mx-auto opacity-[0.7] select-none pointer-events-none"
      />

    </footer>
  );
}
