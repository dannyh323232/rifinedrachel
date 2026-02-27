/*
 * Design: Atelier Médical — Neo-Classical Minimalism
 * Email Capture Popup: Luxury conversion tool.
 * Gold #C9A87C · Cream #F5F0EB · Dark #3D3D3D · Cormorant Garamond
 * 10% off for email + Instagram follow @refined_rachel
 * Shows once per session (localStorage). Triggers after 5s or 35% scroll.
 */
import { useState, useEffect, useCallback } from "react";
import { X, CheckCircle2, Sparkles, Mail, Gift, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/lib/data";
import { IMAGES } from "@/lib/images";

const STORAGE_KEY = "refined_popup_dismissed";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [followedInsta, setFollowedInsta] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const dismiss = useCallback(() => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") return;
    } catch {}

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setIsOpen(true);
    };

    const timer = setTimeout(trigger, 5000);
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.35) trigger();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    console.log("Email captured:", email, "Instagram followed:", followedInsta);
    setSubmitted(true);
    setTimeout(dismiss, 5000);
  };

  const handleInstagramClick = () => {
    window.open(BUSINESS.instagramRachelUrl, "_blank", "noopener,noreferrer");
    setFollowedInsta(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) dismiss();
          }}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg lg:max-w-[720px] bg-cream shadow-2xl overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm text-charcoal-light hover:text-charcoal hover:bg-white transition-all duration-300 rounded-full shadow-sm"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Panel — Visual (hidden on mobile) */}
            <div className="hidden lg:flex lg:w-[280px] relative overflow-hidden flex-shrink-0">
              <img
                src={IMAGES.rachelSitting}
                alt="Nurse Rachel"
                className="w-full h-full object-cover object-top"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={IMAGES.logo}
                    alt="Refined Medical Aesthetics"
                    className="w-12 h-12 rounded-full border-2 border-gold/40 shadow-lg"
                  />
                  <div>
                    <p className="text-white font-serif text-base font-semibold leading-tight">
                      Refined
                    </p>
                    <p className="text-gold text-[9px] tracking-[0.2em] uppercase">
                      Medical Aesthetics
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-gold fill-gold"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white/70 text-[10px] ml-1 font-sans">5.0</span>
                </div>
              </div>
            </div>

            {/* Right Panel — Content */}
            <div className="flex-1 relative">
              {/* Decorative top gold bar */}
              <div className="h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

              <div className="p-7 lg:p-8">
                {/* Decorative corner accent */}
                <div className="absolute top-2 right-14 w-16 h-16 opacity-[0.06]">
                  <svg viewBox="0 0 80 80" fill="none">
                    <path
                      d="M80 0H60C26.863 0 0 26.863 0 60v20"
                      stroke="#C9A87C"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {!submitted ? (
                  <>
                    {/* Exclusive badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/25 px-3.5 py-1.5 mb-5"
                    >
                      <Gift className="w-3.5 h-3.5 text-gold-dark" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-gold-dark font-sans font-bold">
                        Exclusive VIP Offer
                      </span>
                    </motion.div>

                    {/* Headline */}
                    <h3 className="font-serif text-3xl lg:text-[2.2rem] font-light text-charcoal leading-tight mb-2">
                      Unlock{" "}
                      <span className="italic font-semibold text-gold-dark">10% Off</span>
                    </h3>
                    <p className="font-serif text-lg text-charcoal/70 italic mb-1">
                      Your First Treatment
                    </p>

                    {/* Value proposition */}
                    <p className="text-charcoal-light font-sans text-[13px] leading-relaxed mb-5 max-w-sm">
                      Join our VIP list for exclusive offers, early access to new treatments,
                      and expert skincare tips from Nurse Rachel — plus{" "}
                      <strong className="text-charcoal">10% off your first booking</strong>.
                    </p>

                    {/* Gold divider */}
                    <div className="gold-rule w-14 mb-5" />

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Email Input */}
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                          }}
                          placeholder="Your email address"
                          className="w-full pl-11 pr-4 py-3.5 bg-white border border-gold/20 text-charcoal font-sans text-sm placeholder:text-charcoal-light/40 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(201,168,124,0.08)] transition-all duration-300"
                          autoComplete="email"
                        />
                        {error && (
                          <p className="text-red-500 text-xs mt-1 font-sans">{error}</p>
                        )}
                      </div>

                      {/* Instagram Follow Button */}
                      <button
                        type="button"
                        onClick={handleInstagramClick}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 border text-sm font-sans transition-all duration-300 group ${
                          followedInsta
                            ? "border-green-300/50 bg-green-50/80 text-green-700"
                            : "border-gold/20 bg-white text-charcoal hover:border-gold/40 hover:shadow-sm"
                        }`}
                      >
                        {followedInsta ? (
                          <>
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium">
                              Following @refined_rachel
                            </span>
                            <span className="ml-auto text-green-500 text-xs">✓ Done</span>
                          </>
                        ) : (
                          <>
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                              <InstagramIcon className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left">
                              <span className="font-medium block leading-tight">
                                Follow{" "}
                                <strong className="text-charcoal">@refined_rachel</strong>
                              </span>
                              <span className="text-[11px] text-charcoal-light/60 leading-tight">
                                Required to claim your discount
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 ml-auto text-charcoal-light/30 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                          </>
                        )}
                      </button>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full px-4 py-4 bg-charcoal text-cream text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-charcoal/10 hover:shadow-gold/20"
                      >
                        <Sparkles className="w-4 h-4" />
                        Claim My 10% Off
                      </button>
                    </form>

                    {/* Social proof + fine print */}
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {["bg-gold/30", "bg-gold/50", "bg-gold/70"].map((bg, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-full ${bg} border-2 border-cream flex items-center justify-center`}
                          >
                            <span className="text-[8px] text-charcoal/60">★</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] text-charcoal-light/50 font-sans leading-snug">
                        Join 500+ clients who trust Nurse Rachel
                        <br />
                        <span className="text-[10px]">
                          Unsubscribe anytime · Discount applied at booking
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  /* ── Success State ── */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 mb-5"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </motion.div>

                    <h3 className="font-serif text-3xl font-light text-charcoal mb-2">
                      Welcome to the{" "}
                      <span className="italic font-semibold text-gold-dark">VIP List</span>
                    </h3>
                    <div className="gold-rule w-12 mx-auto mb-4" />
                    <p className="text-charcoal-light font-sans text-sm leading-relaxed max-w-xs mx-auto mb-6">
                      Your <strong className="text-charcoal">10% discount</strong> will be
                      applied at your next booking. We'll send exclusive offers and skincare
                      tips straight to your inbox.
                    </p>

                    <a
                      href={BUSINESS.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold-dark text-cream text-sm tracking-[0.15em] uppercase font-semibold hover:bg-charcoal transition-all duration-300 shadow-lg"
                    >
                      <Sparkles className="w-4 h-4" />
                      Book Now & Save 10%
                    </a>

                    <p className="text-[11px] text-charcoal-light/40 font-sans mt-4">
                      Mention "VIP10" when booking to redeem your discount
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
