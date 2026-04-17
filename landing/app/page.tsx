import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Allies from "./components/Allies";
import Feature from "./components/Feature";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
