import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import EmailPopup from "@/components/EmailPopup";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <Gallery />
      <CtaBanner />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppWidget />
      <EmailPopup />
    </div>
  );
}
