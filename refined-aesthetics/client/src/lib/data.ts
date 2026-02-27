import { IMAGES } from "./images";

export const BUSINESS = {
  name: "Refined Medical Aesthetics",
  tagline: "Nurse-Led Aesthetic Excellence",
  owner: "Nurse Rachel",
  address: "Double Row, Seaton Delaval, Whitley Bay NE25 0PP",
  phone: "07583321635",
  phoneFormatted: "07583 321 635",
  whatsappLink: "https://wa.me/07583321635",
  email: "Refinedmedicalaesthetics3@gmail.com",
  bookingUrl: "https://portal.aestheticnursesoftware.com/book-online/30956",
  instagram: "@refined_medicalaesthetics",
  instagramUrl: "https://instagram.com/refined_medicalaesthetics",
  instagramRachel: "@refined_rachel",
  instagramRachelUrl: "https://instagram.com/refined_rachel",
} as const;

export interface Treatment {
  name: string;
  price: string;
  duration: string;
}

export interface TreatmentCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  treatments: Treatment[];
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: "anti-wrinkle",
    title: "Anti-Wrinkle Injections",
    description: "Smooth fine lines and wrinkles with precision-placed injections for a naturally refreshed appearance. Our approach focuses on subtle enhancement that preserves your natural expressions.",
    icon: IMAGES.iconAntiWrinkle,
    treatments: [
      { name: "Consultation", price: "Free", duration: "10 min" },
      { name: "One Area", price: "£190", duration: "30 min" },
      { name: "Two Areas", price: "£210", duration: "30 min" },
      { name: "Three Areas", price: "£250", duration: "45 min" },
    ],
  },
  {
    id: "dermal-filler",
    title: "Dermal Fillers",
    description: "Restore volume, enhance contours, and achieve beautiful definition with premium dermal fillers. Each treatment is tailored to your unique facial anatomy for harmonious results.",
    icon: IMAGES.iconCheekFiller,
    treatments: [
      { name: "Lip Filler", price: "POA", duration: "30 min" },
      { name: "Premium Lip Filler", price: "POA", duration: "30 min" },
      { name: "Cheek Enhancement", price: "POA", duration: "45 min" },
      { name: "Chin Enhancement 1ml", price: "£250", duration: "45 min" },
      { name: "Chin Enhancement 2ml", price: "£320", duration: "60 min" },
      { name: "Jaw Enhancement 1ml", price: "£250", duration: "45 min" },
      { name: "Jaw Enhancement 2ml", price: "£320", duration: "60 min" },
      { name: "Nasolabial Folds", price: "£190", duration: "30 min" },
      { name: "Marionettes", price: "£190", duration: "30 min" },
      { name: "Non-Surgical Rhinoplasty", price: "£310", duration: "60 min" },
      { name: "Tear Trough (Under Eye)", price: "£300", duration: "45 min" },
      { name: "Temple Filler", price: "£250", duration: "45 min" },
      { name: "Piriform Fossa", price: "£170", duration: "40 min" },
      { name: "Perioral Lines", price: "£190", duration: "30 min" },
      { name: "Pre-Jowl Treatment", price: "POA", duration: "45 min" },
    ],
  },
  {
    id: "advanced-anti-wrinkle",
    title: "Advanced Anti-Wrinkle",
    description: "Specialist treatments targeting specific concerns from brow lifting to jaw slimming. These advanced techniques deliver transformative yet natural-looking results.",
    icon: IMAGES.iconBotox,
    treatments: [
      { name: "Brow Lift", price: "£150", duration: "30 min" },
      { name: "Lip Flip", price: "£150", duration: "30 min" },
      { name: "Gummy Smile", price: "£150", duration: "30 min" },
      { name: "Masseter (Jaw Slimming)", price: "£220", duration: "30 min" },
      { name: "Neck Lift", price: "£250", duration: "30 min" },
      { name: "Hyperhidrosis", price: "£375", duration: "30 min" },
      { name: "Pixie Nose Tip Lift", price: "£150", duration: "30 min" },
      { name: "Smokers Lines", price: "£150", duration: "30 min" },
      { name: "Downturned Smile", price: "£150", duration: "30 min" },
      { name: "Soften Upper Lip Lines", price: "£150", duration: "30 min" },
    ],
  },
  {
    id: "skin-treatments",
    title: "Skin Treatments",
    description: "Advanced skin rejuvenation treatments to address texture, tone, and overall skin health. From chemical peels to mesotherapy, we offer solutions for every skin concern.",
    icon: IMAGES.iconDna,
    treatments: [
      { name: "Bio Re Peel", price: "£80", duration: "30 min" },
      { name: "Bio Re Peel (4 sessions)", price: "£200", duration: "30 min" },
      { name: "Derma 2.0", price: "£80", duration: "30 min" },
      { name: "Derma Bio", price: "£100", duration: "30 min" },
      { name: "Derma Restorer", price: "£100", duration: "30 min" },
      { name: "Eye Bags Treatment", price: "£100", duration: "30 min" },
      { name: "Hand Skin Booster", price: "£180", duration: "30 min" },
      { name: "Hyperpigmentation", price: "£80", duration: "30 min" },
      { name: "Meso Full Face Exomes", price: "£150", duration: "30 min" },
    ],
  },
  {
    id: "skin-boosters",
    title: "Skin Boosters",
    description: "Deep hydration and rejuvenation treatments that restore your skin's natural glow from within. Perfect for tired, dehydrated, or ageing skin.",
    icon: IMAGES.iconHydration,
    treatments: [
      { name: "Skin Boosters (1 session)", price: "£130", duration: "30 min" },
      { name: "Skin Boosters (3 sessions)", price: "£300", duration: "45 min" },
      { name: "Redensity (1 session)", price: "£159", duration: "30 min" },
      { name: "Redensity (3 sessions)", price: "£390", duration: "45 min" },
      { name: "Under Eye Skin Boosters", price: "£110", duration: "30 min" },
      { name: "Poly-L-Lactic-Acid", price: "POA", duration: "30 min" },
      { name: "Radiesse Treatment", price: "POA", duration: "30 min" },
    ],
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Stimulate your skin's natural healing response to improve texture, reduce scarring, and promote collagen production for visibly smoother, firmer skin.",
    icon: IMAGES.iconMicroneedling,
    treatments: [
      { name: "Microneedling", price: "£80", duration: "30 min" },
      { name: "Microneedling (3 sessions)", price: "£200", duration: "50 min" },
      { name: "Microneedling Skin Booster", price: "£100", duration: "30 min" },
      { name: "Microneedling with Exomes", price: "£150", duration: "30 min" },
    ],
  },
  {
    id: "facials",
    title: "Facials",
    description: "Luxurious facial treatments combining clinical expertise with a relaxing experience. From deep cleansing to advanced collagen-boosting therapies.",
    icon: IMAGES.iconLifting,
    treatments: [
      { name: "Carboxy Facial", price: "£60", duration: "30 min" },
      { name: "Collagen Lift", price: "£120", duration: "30 min" },
      { name: "Dermaplaning Premium", price: "£70", duration: "30 min" },
      { name: "Dermaplaning Standard", price: "£30", duration: "30 min" },
      { name: "Microdermabrasion", price: "£100", duration: "30 min" },
      { name: "Oncology Facial", price: "£50", duration: "30 min" },
      { name: "WB Co Facial", price: "£30", duration: "30 min" },
    ],
  },
  {
    id: "polynucleotides",
    title: "Polynucleotides",
    description: "Cutting-edge bio-stimulating treatment that promotes deep tissue regeneration, improving skin elasticity, hydration, and overall quality at a cellular level.",
    icon: IMAGES.iconJawSyringe,
    treatments: [
      { name: "1 Treatment", price: "£185", duration: "30 min" },
      { name: "3 Treatment Package", price: "£500", duration: "60 min" },
    ],
  },
  {
    id: "vitamin-injections",
    title: "Vitamin Injections",
    description: "Boost your energy levels and overall wellbeing with targeted vitamin injections. A quick, effective way to support your health from the inside out.",
    icon: IMAGES.iconLips,
    treatments: [
      { name: "B12 Injection", price: "£30", duration: "30 min" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah T.",
    treatment: "Lip Filler",
    text: "Rachel is absolutely incredible. She took the time to understand exactly what I wanted and the results are so natural. I've never felt more confident. The clinic is beautiful and spotlessly clean.",
    rating: 5,
  },
  {
    name: "Emma W.",
    treatment: "Anti-Wrinkle Injections",
    text: "I was so nervous about having anti-wrinkle for the first time, but Rachel put me completely at ease. She explained everything thoroughly and the results are amazing — I still look like me, just more refreshed!",
    rating: 5,
  },
  {
    name: "Lauren M.",
    treatment: "Skin Boosters",
    text: "My skin has never looked better! After three sessions of skin boosters with Rachel, my complexion is glowing. She really knows her stuff and I trust her completely with my skin.",
    rating: 5,
  },
  {
    name: "Jessica K.",
    treatment: "Cheek & Jaw Enhancement",
    text: "Rachel transformed my profile with cheek and jaw filler. The results are stunning and so natural-looking. She's a true artist. I recommend her to everyone I know.",
    rating: 5,
  },
  {
    name: "Amy R.",
    treatment: "Dermaplaning & Bio Re Peel",
    text: "The combination of dermaplaning and bio re peel has completely changed my skin texture. Rachel is so knowledgeable and professional. The whole experience feels luxurious.",
    rating: 5,
  },
  {
    name: "Claire D.",
    treatment: "Polynucleotides",
    text: "After my polynucleotide treatment, my skin quality has improved dramatically. Rachel explained the science behind it and I could see results within weeks. Absolutely worth it!",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
