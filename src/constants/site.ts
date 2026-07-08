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

  // Google Maps embed URL
  mapEmbedUrl: 'https://maps.google.com?q=star%20platinum%20complex,%20Madhuram,%20Kamnath%20Nagar%20Society,%20Moti%20Palace%20Twp,%20Junagadh,%20Gujarat%20362015&ftid=0x3957ff60eaf998bb:0xd17fe6f645e7a00f&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,100809208,94218641,94282134,100813464,94286869,100822499&g_st=iw&output=embed',
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
