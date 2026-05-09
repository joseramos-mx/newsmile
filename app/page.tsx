import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CaseReadiness from "./components/CaseReadiness";
import FloatingButtons from "./components/FloatingButtons";

// Lazy-load everything below the fold — splits JS into separate chunks
const Allies          = dynamic(() => import("./components/Allies"));
const Services        = dynamic(() => import("./components/Services"));
const Feature         = dynamic(() => import("./components/Feature"));
const Benefits        = dynamic(() => import("./components/Benefits"));
const Certifications  = dynamic(() => import("./components/Certifications"));
const Testimonials    = dynamic(() => import("./components/Testimonials"));
const CTA             = dynamic(() => import("./components/CTA"));
const ContactForm     = dynamic(() => import("./components/ContactForm"));
const Footer          = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <CaseReadiness />
      <FloatingButtons />
      <main>
        <Hero />
        <Allies />
        <Feature />
        <Services />
        <Benefits />
        <Certifications />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
