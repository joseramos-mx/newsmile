import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy-load everything below the fold — splits JS into separate chunks
const Allies       = dynamic(() => import("./components/Allies"));
const Feature      = dynamic(() => import("./components/Feature"));
const Showcase     = dynamic(() => import("./components/Showcase"));
const Benefits     = dynamic(() => import("./components/Benefits"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const CTA          = dynamic(() => import("./components/CTA"));
const ContactForm  = dynamic(() => import("./components/ContactForm"));
const Footer       = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="z-100">
          <Hero />
        </div>
        <Allies />
        <Feature />
        <Showcase />
        <Benefits />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
