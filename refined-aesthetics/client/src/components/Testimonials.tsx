/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * Testimonials: Elegant cards on white background with gold star ratings.
 * Horizontal scroll on mobile, grid on desktop.
 */
import { TESTIMONIALS } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="container relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark font-sans font-medium mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-charcoal">
            What Our <span className="italic font-semibold text-gold-dark">Clients Say</span>
          </h2>
          <div className="gold-rule w-24 mx-auto mt-6" />
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className={`relative p-8 bg-cream/50 border border-gold/10 hover:border-gold/30 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-charcoal-light font-sans text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gold/10 pt-4">
                <p className="font-serif text-lg text-charcoal font-medium">{testimonial.name}</p>
                <p className="text-xs tracking-wide uppercase text-gold-dark font-sans mt-1">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
