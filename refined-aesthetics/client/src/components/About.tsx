/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * About: Asymmetric layout with clinic interior image and Rachel's story.
 * Gold rule dividers, editorial typography.
 */
import { IMAGES } from "@/lib/images";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container" ref={sectionRef}>
        {/* Section Label */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark font-sans font-medium mb-3">About</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-charcoal">
            Meet <span className="italic font-semibold text-gold-dark">Nurse Rachel</span>
          </h2>
          <div className="gold-rule w-24 mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold/20" />
              <img
                src={IMAGES.rachelSitting}
                alt="Nurse Rachel at Refined Medical Aesthetics"
                className="w-full h-[400px] lg:h-[500px] object-cover relative z-10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="space-y-6 text-charcoal-light leading-relaxed font-sans">
              <p className="text-lg">
                Welcome to Refined Medical Aesthetics, a nurse-led aesthetic clinic nestled in the heart of Seaton Delaval, Whitley Bay. Founded by <strong className="text-charcoal font-medium">Nurse Rachel</strong>, our clinic is built on the principles of clinical excellence, personalised care, and natural-looking results.
              </p>
              <p>
                As a registered nurse with the Nursing and Midwifery Council (NMC), Rachel brings extensive medical knowledge and an artistic eye to every treatment. Her approach combines the precision of clinical practice with the artistry of aesthetic enhancement, ensuring each client receives a bespoke treatment plan tailored to their unique features and goals.
              </p>
              <p>
                Rachel is passionate about empowering her clients to feel confident in their own skin. Whether you are seeking subtle rejuvenation or a more transformative change, she takes the time to listen, advise, and deliver results that enhance your natural beauty whilst maintaining the highest standards of safety and care.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-gold/20">
              {[
                { number: "NMC", label: "Registered" },
                { number: "500+", label: "Happy Clients" },
                { number: "50+", label: "Treatments" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-serif text-2xl lg:text-3xl text-gold-dark font-semibold">{stat.number}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-charcoal-light mt-1 font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
