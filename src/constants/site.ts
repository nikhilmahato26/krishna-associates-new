/**
 * SITE-WIDE CONSTANTS
 * Single source of truth for contact info, links, and brand data.
 * Update values here: they flow to every page automatically.
 */

export const SITE = {
  name: 'Krishna Associates',
  tagline: 'Your Trusted Tax & GST Partner',
  domain: 'krishna-associates.net',
  url: 'https://krishna-associates.net',
  founded: 2021,
} as const;

export const CONTACT = {
  // 10-digit mobile confirmed from client screenshots
  phone: '+91 9925992507',
  phoneRaw: '919925992507', // for wa.me and tel: links
  phoneDisplay: '+91 99259 92507',
  email: 'Krishnaassociates9925@gmail.com',

  // Client address confirmed for footer and map
  address: '118, First Floor, Star Platinum Complex, Near Madhuram Gate, Junagadh - 362001',
  city: 'Junagadh',

  // Google Maps embed URL: replace with the actual embed URL once address is confirmed
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.87!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sKrishna+Associates!5e0!3m2!1sen!2sin!4v1700000000000',
} as const;

export const HOURS = {
  weekdays: {
    label: 'Monday - Saturday',
    time: '10:00 AM To 9:00 PM',
  },
  weekend: {
    label: 'Sunday',
    time: 'CLOSED',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
] as const;

/**
 * Build a WhatsApp deep-link with a prefilled message.
 * Used across the site: service cards, contact form, floating button.
 */
export const buildWhatsAppUrl = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.phoneRaw}?text=${encoded}`;
};

export const WA_DEFAULT_MESSAGE =
  'Hello Krishna Associates, I would like to know more about your services.';
