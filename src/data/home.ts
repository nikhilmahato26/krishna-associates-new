import type { HeroSlide, Stat, TrustBadge } from '@/types';

/**
 * HERO CAROUSEL SLIDES
 * Replaces the generic 8-slide carousel with focused, tax-firm messaging.
 */
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Trusted Tax & GST Partner',
    title: 'Financial clarity, without the paperwork stress.',
    subtitle:
      'From GST Registration and Income Tax to Mutual Funds and Insurance, one dependable partner for every financial decision.',
    image: '/images/hero/hero-1.svg',
  },
  {
    eyebrow: 'GST Made Simple',
    title: 'GST Registration & Returns, filed right the first time.',
    subtitle:
      'End-to-end GST support with document verification, GSTIN assistance and ongoing compliance, no missed deadlines, no penalties.',
    image: '/images/hero/hero-2.svg',
  },
  {
    eyebrow: 'Personal Tax',
    title: 'ITR filing that gets you the refund you actually deserve.',
    subtitle:
      'Accurate tax computation, eligible deductions and refund tracking for salaried professionals and business owners alike.',
    image: '/images/hero/hero-3.svg',
  },
];

/**
 * ABOUT SECTION — HOME PAGE (Req #4)
 * Replaces the generic "Our Story / Welcome to..." copy.
 */
export const aboutHome = {
  eyebrow: 'About Krishna Associates',
  heading: 'Your Trusted Tax & GST Partner',
  body: 'At Krishna Associates, we specialize in GST Registration, Income Tax, Mutual Fund, and Insurance services. Our focus is to provide accurate, transparent and hassle-free financial solutions with professional guidance, ensuring complete peace of mind for individuals and businesses.',
  checklist: [
    'GST & Income Tax',
    'Mutual Fund & Insurance Solutions',
    'Trusted Financial Guidance',
  ],
  ctaLabel: 'Get Free Consultation',
} as const;

/**
 * STAT BOXES — HOME PAGE (Req #4)
 * Sits below the About checklist.
 */
export const stats: Stat[] = [
  { value: '5+', label: 'Years Of Experience' },
  { value: '1200+', label: 'ITR Filed' },
  { value: '200+', label: 'GST Registrations' },
  { value: '500+', label: 'Happy Clients' },
];

/**
 * TRUST BADGES STRIP (Req #3)
 * Sits below the hero carousel.
 */
export const trustBadges: TrustBadge[] = [
  {
    icon: 'Handshake',
    title: 'Trusted by Taxpayers',
    description: 'Serving Individuals & Businesses Across India',
  },
  {
    icon: 'Zap',
    title: 'Quick Support',
    description: 'Call / WhatsApp: +91 99259 92507',
  },
  {
    icon: 'UserCheck',
    title: 'Experienced Professionals',
    description: '5+ Years of Professional Experience',
  },
];
