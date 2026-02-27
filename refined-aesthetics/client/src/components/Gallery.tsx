/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * Gallery: Clean grid with ONLY real client treatment photos.
 * Followed by a premium Instagram section with branding.
 */
import { IMAGES } from "@/lib/images";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BUSINESS } from "@/lib/data";

const galleryImages = [
  { src: IMAGES.galleryBeforeAfterJaw, alt: "Before and after cheek and jaw filler treatment", label: "Cheek & Jaw Filler", span: "col-span-2 row-span-2" },
  { src: IMAGES.treatmentAction, alt: "Rachel performing lip filler treatment", label: "Lip Filler Treatment", span: "col-span-1 row-span-1" },
  { src: IMAGES.treatmentCloseup, alt: "Close-up lip filler injection", label: "Lip Enhancement", span: "col-span-1 row-span-1" },
  { src: IMAGES.galleryBeforeAfterLips1, alt: "Before and after lip filler results", label: "Lip Filler Results", span: "col-span-1 row-span-2" },
  { src: IMAGES.galleryBeforeAfterFace, alt: "Before and after facial rejuvenation", label: "Facial Rejuvenation", span: "col-span-1 row-span-1" },
  { src: IMAGES.galleryBeforeAfterCheek, alt: "Before and after cheek filler treatment", label: "Cheek Enhancement", span: "col-span-1 row-span-1" },
  { src: IMAGES.galleryBeforeAfterLips2, alt: "Before and after lip filler - glossy result", label: "Lip Augmentation", span: "col-span-1 row-span-1" },
  { src: IMAGES.galleryBeforeAfterLips3, alt: "Before and after lip filler treatment", label: "Lip Filler", span: "col-span-1 row-span-1" },
  { src: IMAGES.galleryClientBed, alt: "Client after lip treatment", label: "Post-Treatment", span: "col-span-1 row-span-1" },
  { src: IMAGES.galleryFaceGloves, alt: "Facial treatment in progress", label: "Treatment in Progress", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const { ref: instaRef, isVisible: instaVisible } = useScrollAnimation(0.1);

  return (
    <>
      {/* Gallery Section */}
      <section id="gallery" className="py-24 lg:py-32 bg-cream">
        <div className="container" ref={sectionRef}>
          {/* Section Header */}
          <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-dark font-sans font-medium mb-3">Gallery</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-charcoal">
              Real <span className="italic font-semibold text-gold-dark">Results</span>
            </h2>
            <div className="gold-rule w-24 mx-auto mt-6" />
            <p className="text-charcoal-light mt-6 max-w-2xl mx-auto font-sans leading-relaxed">
              Real clients, real results. Browse our gallery of before and after transformations from Refined Medical Aesthetics.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`${img.span} overflow-hidden group relative transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay with label */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <p className="text-white font-sans text-xs tracking-wider uppercase px-4 pb-4">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section — Premium Design */}
      <section className="relative py-20 lg:py-28 bg-charcoal overflow-hidden" ref={instaRef}>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A87C' fill-opacity='1'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container relative z-10">
          <div className={`transition-all duration-700 ${instaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Instagram Icon */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] mb-6 shadow-lg shadow-[#833AB4]/20">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl font-light text-white mb-3">
                Follow Our <span className="italic font-semibold text-gold">Journey</span>
              </h3>
              <div className="gold-rule w-16 mx-auto mb-5" />
              <p className="text-white/60 font-sans text-sm max-w-md mx-auto leading-relaxed">
                Behind-the-scenes, treatment results, skincare tips, and exclusive offers. Join our community on Instagram.
              </p>
            </div>

            {/* Instagram Cards */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
              {/* @refined_medicalaesthetics Card */}
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px] flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src={IMAGES.logo} alt="Refined Medical Aesthetics" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-sans text-sm font-semibold flex items-center gap-1.5">
                      refined_medicalaesthetics
                      <svg className="w-4 h-4 text-[#3897f0]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.7 14.5L6 12.2l1.4-1.4 2.9 2.9 6.3-6.3 1.4 1.4-7.7 7.7z"/></svg>
                    </p>
                    <p className="text-white/40 font-sans text-xs mt-0.5">Clinic Page</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-xs leading-relaxed mb-4">
                  Treatment results, clinic updates, and special offers from Refined Medical Aesthetics.
                </p>
                <div className="flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Follow
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              </a>

              {/* @refined_rachel Card */}
              <a
                href={BUSINESS.instagramRachelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px] flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src={IMAGES.heroRachel} alt="Nurse Rachel" className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-sans text-sm font-semibold flex items-center gap-1.5">
                      refined_rachel
                      <svg className="w-4 h-4 text-[#3897f0]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.7 14.5L6 12.2l1.4-1.4 2.9 2.9 6.3-6.3 1.4 1.4-7.7 7.7z"/></svg>
                    </p>
                    <p className="text-white/40 font-sans text-xs mt-0.5">Nurse Rachel</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-xs leading-relaxed mb-4">
                  Personal insights, day-in-the-life, skincare advice, and Rachel's aesthetic journey.
                </p>
                <div className="flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Follow
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
