import type { Service } from '@/types';

/**
 * MASTER SERVICES DATA
 * Every service card, detail page, and dropdown reads from this array.
 * Add/remove services here — the whole site adapts.
 */
export const services: Service[] = [
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    short:
      'Get your business GST-registered quickly with expert documentation support and post-registration guidance.',
    long: 'We handle the full GST registration process — from document verification to GSTIN issuance and ongoing support. Whether you are a startup, a small business, or expanding operations, our team ensures your application is accurate and compliant from day one.',
    icon: 'BookOpenCheck',
    image: '/images/services/gst-registration.svg',
    whatsappMessage: 'Hello Krishna Associates, I need GST Registration service.',
  },
  {
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    short:
      'Timely GSTR filing, ITC reconciliation and compliance support — so you never miss a deadline or a credit.',
    long: 'Monthly and quarterly GSTR filing handled end-to-end. We reconcile input tax credit, track compliance timelines, and file returns accurately to keep your business free of penalties and notices.',
    icon: 'FileCheck2',
    image: '/images/services/gst-return-filing.svg',
    whatsappMessage: 'Hello Krishna Associates, I need GST Return Filing service.',
  },
  {
    slug: 'income-tax-return',
    title: 'Income Tax Return',
    short:
      'Accurate tax computation, ITR filing and refund assistance for individuals and businesses.',
    long: 'From salaried professionals to business owners, we compute tax liability, claim eligible deductions, and file returns error-free. We also track refunds and represent you if the IT department raises any queries.',
    icon: 'Receipt',
    image: '/images/services/income-tax-return.svg',
    whatsappMessage: 'Hello Krishna Associates, I need Income Tax Return Filing service.',
  },
  {
    slug: 'salary-itr-1',
    title: 'Salary Income Tax Return (ITR-1)',
    short:
      'Simple, affordable ITR-1 filing for salaried individuals including house property and bank interest income.',
    long: 'Designed for salaried taxpayers. We cover salary income, one house property, and other sources like bank interest — with full refund processing support at a fraction of standard filing fees.',
    icon: 'BadgeIndianRupee',
    image: '/images/services/salary-itr-1.svg',
    whatsappMessage: 'Hello Krishna Associates, I need Salary ITR-1 Filing service.',
  },
  {
    slug: 'mutual-fund',
    title: 'Mutual Fund',
    short:
      'Investment guidance for mutual funds — pooled portfolios across equity, debt, and hybrid schemes for long-term returns.',
    long: 'A mutual fund pools money from investors to invest in stocks, bonds, or other assets. We help you choose schemes aligned with your goals, risk profile, and time horizon — with ongoing portfolio reviews.',
    icon: 'LineChart',
    image: '/images/services/mutual-fund.svg',
    whatsappMessage: 'Hello Krishna Associates, I need Mutual Fund advisory service.',
  },
  {
    slug: 'insurance',
    title: 'Insurance',
    short:
      'Life, health and general insurance policies matched to your family and business needs.',
    long: 'From term life and health cover to general and business insurance, we help you compare options and pick policies that actually protect what matters — without the jargon or the upsell.',
    icon: 'ShieldCheck',
    image: '/images/services/insurance.svg',
    whatsappMessage: 'Hello Krishna Associates, I need Insurance advisory service.',
  },
];

/** Utility: find a service by slug. */
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
