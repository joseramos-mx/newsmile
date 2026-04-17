"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Edit testimonials here ──────────────────────────────────────────────────
// Fields:
//   quote   → the testimonial text
//   author  → full name
//   role    → job title and location
//   imgSrc  → URL to a square avatar photo (150×150 recommended)
export const TESTIMONIALS = [
  {
    id: 0,
    quote:
      "Tenía casos de alta complejidad que otros laboratorios no podían atender a tiempo ni con la calidad que exijo. Con NewSmile encontré al verdadero aliado que mis pacientes merecen.",
    author: "Dr. Roberto Garza",
    role: "Rehabilitador Oral · Ciudad de México",
    imgSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 1,
    quote:
      "Lo que me cambió la vida clínica fue el acompañamiento en el diagnóstico. Ya no estoy solo frente a los casos difíciles. Me asesoran en materiales, adhesión, protocolo… y siempre responden.",
    author: "Dra. Claudia Mendoza",
    role: "Especialista en Implantología · Estado de México",
    imgSrc: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    quote:
      "Gracias a su soporte coloqué 3 coronas en una hora. El diagnóstico certero, la elección de materiales y su seguimiento continuo lo hicieron realidad.",
    author: "Dr. Fernando Ríos",
    role: "Odontólogo Estético · Veracruz",
    imgSrc: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 3,
    quote:
      "Mis pacientes notaron de inmediato la diferencia estética. Las carillas tienen una translucidez que nunca vi en otro laboratorio. Sin ajustes desde la primera prueba.",
    author: "Dra. Alejandra Vega",
    role: "Diseñadora de Sonrisas · Guerrero",
    imgSrc: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: 4,
    quote:
      "Probé varios laboratorios en el Estado de México y ninguno me daba certeza ni puntualidad. Con NewSmile sé exactamente cuándo llega el trabajo y siempre cumple lo acordado.",
    author: "Dr. Marcos Santillán",
    role: "Especialista en Prótesis · Toluca",
    imgSrc: "https://i.pravatar.cc/150?img=15",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

type Testimonial = (typeof TESTIMONIALS)[number];
interface TestimonialWithTempId extends Testimonial {
  tempId: number;
}

interface TestimonialCardProps {
  position: number;
  testimonial: TestimonialWithTempId;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 border-[#255958]"
          : "z-0 border-[#e0ddd7] hover:border-[#255958]/40"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        borderRadius: "20px",
        background: isCenter ? "#255958" : "white",
        color: isCenter ? "white" : "#1F2C43",
        padding: "28px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 12px 0px 4px rgba(37,89,88,0.2)"
          : "0 2px 16px rgba(31,44,67,0.07)",
      }}
    >
      {/* Avatar */}
      <img
        src={testimonial.imgSrc}
        alt={testimonial.author}
        style={{
          width: "68px",
          height: "68px",
          borderRadius: "12px",
          objectFit: "cover",
          objectPosition: "top",
          flexShrink: 0,
          boxShadow: isCenter
            ? "3px 3px 0px rgba(255,255,255,0.15)"
            : "3px 3px 0px #FAF7F3",
        }}
      />

      {/* Quote */}
      <p
        className={cn(
          "text-sm sm:text-base font-medium leading-snug flex-1 overflow-hidden",
          isCenter ? "text-white" : "text-[#1F2C43]"
        )}
        style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical", overflow: "hidden" }}
      >
        "{testimonial.quote}"
      </p>

      {/* Attribution */}
      <div style={{ marginTop: "auto" }}>
        <p
          className={cn(
            "text-sm font-semibold",
            isCenter ? "text-white" : "text-[#1F2C43]"
          )}
        >
          {testimonial.author}
        </p>
        <p
          className={cn(
            "text-xs font-medium mt-0.5",
            isCenter ? "text-white/65" : "text-[#7A7D78]"
          )}
        >
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState<TestimonialWithTempId[]>(
    TESTIMONIALS.map((t) => ({ ...t, tempId: t.id }))
  );

  const handleMove = (steps: number) => {
    const next = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = next.shift();
        if (!item) return;
        next.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = next.pop();
        if (!item) return;
        next.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(next);
  };

  useEffect(() => {
    const update = () => {
      setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 290);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: cardSize + 200 }}>
      {list.map((testimonial, index) => {
        // Symmetric positioning: center card at Math.floor(n/2), equal cards on both sides
        const position = index - Math.floor(list.length / 2);
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
            "bg-white border-2 border-[#e0ddd7] hover:bg-[#255958] hover:text-white hover:border-[#255958]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#255958] focus-visible:ring-offset-2"
          )}
          aria-label="Testimonio anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
            "bg-white border-2 border-[#e0ddd7] hover:bg-[#255958] hover:text-white hover:border-[#255958]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#255958] focus-visible:ring-offset-2"
          )}
          aria-label="Testimonio siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
