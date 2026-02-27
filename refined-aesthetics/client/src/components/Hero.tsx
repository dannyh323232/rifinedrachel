/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * Hero: Premium showstopper with logo, promo badge, dual CTAs, and luxury animations.
 * Conversion-focused: Free Consultation + 10% Off promo to drive immediate bookings.
 */
import { IMAGES } from "@/lib/images";
import { BUSINESS } from "@/lib/data";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A87C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Decorative gold corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/20 m-6 hidden lg:block" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/20 m-6 hidden lg:block" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen pt-24 pb-12 lg:pt-0 lg:pb-0">
          
          {/* Left: Text Content — 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            {/* Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold-dark font-sans font-semibold">
                  Nurse-Led Clinic
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal-light font-sans mt-0.5">
                  Seaton Delaval, Whitley Bay
                </p>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="gold-rule w-16 mb-6" />
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-charcoal leading-[1.05] mb-4">
              Where Beauty
              <span className="block font-semibold italic text-gold-dark">
                Meets Expertise
              </span>
            </h1>

            <p className="text-charcoal-light text-lg lg:text-xl leading-relaxed max-w-xl mb-8 font-sans">
              Premium aesthetic treatments by <strong className="text-charcoal font-semibold">Nurse Rachel</strong> — 
              a registered nurse combining clinical precision with an artistic eye to enhance your natural beauty.
            </p>

            {/* 10% Off Promo Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/30 px-5 py-3 mb-8 rounded-sm"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-dark" />
                <span className="text-sm font-sans font-bold text-gold-dark tracking-wide uppercase">
                  10% Off
                </span>
              </div>
              <div className="w-px h-5 bg-gold/30" />
              <span className="text-sm font-sans text-charcoal-light">
                New clients — sign up for our exclusive offer
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-charcoal text-cream text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-dark transition-all duration-300 group shadow-lg shadow-charcoal/20"
              >
                <Calendar className="w-4 h-4" />
                Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={BUSINESS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-espresso text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
              >
                Book Now
              </motion.a>
              <a
                href="#treatments"
                onClick={(e) => { e.preventDefault(); document.querySelector("#treatments")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center px-8 py-4 border border-gold/40 text-charcoal text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold/10 transition-all duration-300"
              >
                View Treatments
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-gold/15"
            >
              <div className="text-center">
                <p className="font-serif text-2xl font-semibold text-charcoal">NMC</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-charcoal-light font-sans">Registered</p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div className="text-center">
                <p className="font-serif text-2xl font-semibold text-charcoal">5★</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-charcoal-light font-sans">Rated</p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div className="text-center">
                <p className="font-serif text-2xl font-semibold text-charcoal">1000+</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-charcoal-light font-sans">Treatments</p>
              </div>
              <div className="w-px h-10 bg-gold/20 hidden sm:block" />
              <div className="text-center hidden sm:block">
                <p className="font-serif text-2xl font-semibold text-charcoal">Free</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-charcoal-light font-sans">Consultations</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Rachel's Photo — 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 w-full h-full border border-gold/30 hidden lg:block"
              />
              
              {/* Main photo */}
              <div className="relative overflow-hidden bg-cream-dark shadow-2xl">
                <img
                  src={IMAGES.heroRachel}
                  alt="Nurse Rachel — Refined Medical Aesthetics"
                  className="w-full h-[450px] sm:h-[500px] lg:h-[620px] object-cover object-top"
                  loading="eager"
                />
                {/* Gradient overlays */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream/60 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream/20 to-transparent" />
              </div>

              {/* Logo badge overlay on photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 lg:-bottom-6 lg:-left-6 bg-white p-3.5 lg:p-4 shadow-xl flex items-center gap-3 border border-gold/10"
              >
                <img
                  src={IMAGES.logo}
                  alt="Refined Medical Aesthetics"
                  className="w-11 h-11 lg:w-14 lg:h-14 rounded-full object-cover ring-1 ring-gold/20"
                />
                <div>
                  <p className="text-[10px] lg:text-xs tracking-[0.2em] uppercase text-gold-dark font-sans font-semibold">
                    Registered Nurse
                  </p>
                  <p className="font-serif text-base lg:text-lg text-charcoal mt-0.5">NMC Verified</p>
                </div>
              </motion.div>

              {/* Floating promo tag on photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-3 -right-3 lg:top-4 lg:right-4 bg-gold text-espresso px-4 py-2 shadow-lg"
              >
                <p className="text-xs font-sans font-bold tracking-wider uppercase">10% Off</p>
                <p className="text-[9px] font-sans tracking-wide uppercase opacity-80">New Clients</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-charcoal-light">Discover More</span>
        <div className="w-[1px] h-8 bg-gold/50 relative overflow-hidden">
          <motion.div
            className="w-full h-3 bg-gold"
            animate={{ y: [0, 32] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
