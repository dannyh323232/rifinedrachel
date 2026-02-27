/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * CTA Banner: Full-width with elegant gradient background, gold accents, strong CTA.
 * NO AI-generated images — uses pure CSS design.
 */
import { BUSINESS } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CtaBanner() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0EB] via-[#EDE5DB] to-[#E8DDD0]" />
      
      {/* Decorative gold pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A87C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className={`container relative z-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark font-sans font-medium mb-4">Your Journey Begins Here</p>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-charcoal max-w-3xl mx-auto leading-tight">
          Ready to Discover Your
          <span className="block italic font-semibold text-gold-dark">Most Confident Self?</span>
        </h2>
        <div className="gold-rule w-24 mx-auto mt-8 mb-8" />
        <p className="text-charcoal-light font-sans text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Book a complimentary consultation with Nurse Rachel and take the first step towards enhancing your natural beauty.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-charcoal text-cream text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-dark transition-all duration-300"
          >
            Book Consultation
          </a>
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-charcoal text-charcoal text-sm tracking-[0.2em] uppercase font-medium hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
