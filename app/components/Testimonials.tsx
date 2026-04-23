"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="testimonials"
      style={{ background: "var(--ivory)", position: "relative", overflow: "hidden", padding: "3.5rem 0 7rem" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(37,89,88,0.08)",
              color: "var(--arandano)",
              padding: "0.4rem 1rem",
              borderRadius: "100px",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--arandano)",
                display: "inline-block",
              }}
            />
            Testimonios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--near-black)",
              lineHeight: 1.1,
            }}
          >
            Lo que dicen{" "}
            <span style={{ color: "var(--arandano)", fontWeight: 300 }}>
              nuestros aliados
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Stagger carousel — full width, no max-width constraint */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <StaggerTestimonials />
      </motion.div>
    </section>
  );
}
