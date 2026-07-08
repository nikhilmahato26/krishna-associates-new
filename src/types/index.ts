export type ServiceSlug =
  | 'gst-registration'
  | 'gst-return-filing'
  | 'income-tax-return'
  | 'salary-itr-1'
  | 'mutual-fund'
  | 'insurance';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  short: string; // Short description shown on home service cards
  long: string;  // Full description on the detail page
  icon: string;  // Lucide icon name
  image: string; // Path to hero image for detail page
  whatsappMessage: string; // Prefilled WA message when user clicks Contact
  faqs?: FAQItem[];
}

export interface PricingPlan {
  slug: ServiceSlug;
  title: string;
  priceLabel: string; // e.g. "Starting From ₹1,499"
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface TrustBadge {
  icon: string;   // Lucide icon name
  title: string;
  description: string;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}
