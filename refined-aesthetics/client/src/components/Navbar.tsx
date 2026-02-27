/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * Navbar: Transparent on top, solid cream on scroll. Gold accent underlines.
 * Cormorant Garamond for brand, system sans for nav links.
 */
import { useState, useEffect } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,168,124,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-2.5"
        >
          <img src={IMAGES.logo} alt="Refined Medical Aesthetics" className="w-10 h-10 lg:w-11 lg:h-11 rounded-full object-cover" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl lg:text-2xl font-semibold tracking-wide text-charcoal">
              Refined
            </span>
            <span className="text-[10px] lg:text-xs tracking-[0.25em] uppercase text-gold-dark font-sans font-medium">
              Medical Aesthetics
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm tracking-wide uppercase text-charcoal-light hover:text-gold-dark transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 bg-charcoal text-cream text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-charcoal p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-cream/98 backdrop-blur-md`}
      >
        <div className="container py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm tracking-wide uppercase text-charcoal-light hover:text-gold-dark transition-colors py-2 border-b border-gold/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-3 bg-charcoal text-cream text-sm tracking-widest uppercase font-medium text-center hover:bg-gold-dark transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
