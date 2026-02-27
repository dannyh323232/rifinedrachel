/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * Contact: Split layout with details on left, embedded map on right.
 * Gold accents, clean typography.
 */
import { BUSINESS } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="container" ref={sectionRef}>
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark font-sans font-medium mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-charcoal">
            Visit <span className="italic font-semibold text-gold-dark">Our Clinic</span>
          </h2>
          <div className="gold-rule w-24 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Details */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-1">Address</h3>
                  <p className="text-charcoal-light font-sans text-sm leading-relaxed">
                    {BUSINESS.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-1">Phone</h3>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-charcoal-light font-sans text-sm hover:text-gold-dark transition-colors"
                  >
                    {BUSINESS.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-1">WhatsApp</h3>
                  <a
                    href={BUSINESS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal-light font-sans text-sm hover:text-gold-dark transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-1">Email</h3>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-charcoal-light font-sans text-sm hover:text-gold-dark transition-colors break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-1">Opening Hours</h3>
                  <div className="text-charcoal-light font-sans text-sm space-y-1">
                    <p>Monday – Friday: 9:00 AM – 7:00 PM</p>
                    <p>Saturday: 9:00 AM – 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-dark transition-all duration-300"
              >
                Book Online
              </a>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#20bd5a] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <div className="absolute -top-3 -right-3 w-full h-full border border-gold/20" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2283.5!2d-1.5247!3d55.0714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e6f1234567890%3A0x1234567890abcdef!2sDouble%20Row%2C%20Seaton%20Delaval%2C%20Whitley%20Bay%20NE25%200PP!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, position: "relative", zIndex: 10 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Refined Medical Aesthetics Location"
                className="min-h-[400px] lg:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
