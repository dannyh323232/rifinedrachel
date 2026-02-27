/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * Treatments: Dark panel showcase with line-art icons. Accordion categories with pricing tables.
 */
import { useState } from "react";
import { TREATMENT_CATEGORIES, BUSINESS } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, Clock, ArrowRight } from "lucide-react";

export default function Treatments() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const [openCategory, setOpenCategory] = useState<string | null>("anti-wrinkle");

  return (
    <section id="treatments" className="py-24 lg:py-32 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,168,124,0.5) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="container relative z-10" ref={sectionRef}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium mb-3">Our Services</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-white">
            Treatment <span className="italic font-semibold text-gold">Menu</span>
          </h2>
          <div className="gold-rule w-24 mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto font-sans leading-relaxed">
            Explore our comprehensive range of aesthetic treatments, each performed with clinical precision
            and an artistic approach to enhance your natural beauty.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {TREATMENT_CATEGORIES.map((category, idx) => {
            const isOpen = openCategory === category.id;
            return (
              <div
                key={category.id}
                className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <button
                  onClick={() => setOpenCategory(isOpen ? null : category.id)}
                  className="w-full flex items-center gap-5 p-5 lg:p-6 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 overflow-hidden flex-shrink-0 bg-white/5 p-1">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-serif text-xl lg:text-2xl text-white group-hover:text-gold transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-white/40 text-sm mt-1 font-sans hidden sm:block line-clamp-1">
                      {category.treatments.length} treatments available
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-gold text-sm font-sans hidden sm:block">
                      from {category.treatments.find(t => t.price !== "Free" && t.price !== "POA")?.price || "POA"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-white/[0.02] border-x border-b border-white/[0.08] p-5 lg:p-8">
                    <p className="text-white/50 text-sm font-sans leading-relaxed mb-6 max-w-2xl">
                      {category.description}
                    </p>
                    <div className="space-y-0">
                      {category.treatments.map((treatment, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-center justify-between py-3.5 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] px-2 -mx-2 transition-colors"
                        >
                          <span className="text-white/90 font-sans text-sm lg:text-base">{treatment.name}</span>
                          <div className="flex items-center gap-4 lg:gap-8">
                            <span className="flex items-center gap-1.5 text-white/40 text-xs font-sans">
                              <Clock className="w-3 h-3" />
                              {treatment.duration}
                            </span>
                            <span className="text-gold font-serif text-lg font-semibold min-w-[70px] text-right">
                              {treatment.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={BUSINESS.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-gold text-sm tracking-wide uppercase font-sans hover:text-gold-light transition-colors group/cta"
                    >
                      Book {category.title}
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-espresso text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
