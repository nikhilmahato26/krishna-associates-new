import type { Service } from '@/types';

/**
 * MASTER SERVICES DATA
 * Every service card, detail page, and dropdown reads from this array.
 * Add/remove services here: the whole site adapts.
 */
export const services: Service[] = [
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    short:
      'Get your business GST-registered quickly with expert documentation support and post-registration guidance.',
    long: 'We handle the full GST registration process, from document verification to GSTIN issuance and ongoing support. Whether you are a startup, a small business, or expanding operations, our team ensures your application is accurate and compliant from day one.',
    icon: 'BookOpenCheck',
    image: '/images/services/gst-registration.svg',
    whatsappMessage: 'Hello Krishna Associates, I need GST Registration service.',
  },
  {
    slug: 'income-tax-return',
    title: 'Income Tax Return',
    short:
      'Accurate tax computation, ITR filing and refund assistance for individuals and businesses.',
    long: 'From salaried professionals to business owners, we compute tax liability, claim eligible deductions, and file returns error-free. We also track refunds and represent you if the IT department raises any queries.',
    icon: 'Receipt',
    image: '/images/services/income-tax-return.svg',
    whatsappMessage: 'Hello Krishna Associates, I need Income Tax Return service.',
    faqs: [
      {
        question: 'Who needs to file an Income Tax Return (ITR)?',
        answer: 'Individuals, salaried employees, freelancers, professionals, and business owners who meet the applicable tax filing requirements or wish to claim a refund should file an ITR.',
      },
      {
        question: 'Which documents are required for ITR filing?',
        answer: 'PAN Card, Aadhaar Card, Form 16 (if applicable), bank statements, investment proofs, and other income-related documents depending on your case.',
      },
      {
        question: 'How long does it take to file an ITR?',
        answer: 'Most Income Tax Returns are filed within 24-48 hours after receiving all the required documents.',
      },
      {
        question: 'Can you help with Income Tax Refunds?',
        answer: 'Yes. We assist with refund filing, refund tracking, and resolving refund-related issues.',
      },
      {
        question: 'Do you file ITR for salaried employees and business owners?',
        answer: 'Yes. We file Income Tax Returns for salaried individuals, freelancers, professionals, businesses, and firms.',
      },
      {
        question: 'What if I receive an Income Tax Notice?',
        answer: 'Our experts will review the notice, guide you on the required response, and help resolve the matter professionally.',
      },
      {
        question: 'Is my personal and financial information secure?',
        answer: 'Yes. Your information is handled with complete confidentiality and secure processes.',
      },
      {
        question: 'Can I file my ITR after the due date?',
        answer: 'Yes. You may be eligible to file a belated return, subject to the applicable provisions and deadlines.',
      },
      {
        question: 'How much does Income Tax Return filing cost?',
        answer: 'Our pricing starts from ₹299 for eligible salaried individuals. Charges may vary depending on the complexity of the return.',
      },
      {
        question: 'Can I complete the entire ITR filing process online?',
        answer: 'Yes. You can securely share your documents online, and we will complete the entire filing process remotely.',
      },
      {
        question: 'Do you provide tax planning and deduction guidance?',
        answer: 'Yes. We help identify eligible deductions and tax-saving opportunities to optimize your tax liability.',
      },
      {
        question: 'Why should I choose Krishna Associates?',
        answer: 'We offer accurate filing, transparent pricing, fast turnaround, refund assistance, expert support, and a hassle-free experience from start to finish.',
      },
    ],
  },
  {
    slug: 'mutual-fund',
    title: 'Mutual Fund',
    short:
      'Investment guidance for mutual funds: pooled portfolios across equity, debt, and hybrid schemes for long-term returns.',
    long: 'A mutual fund pools money from investors to invest in stocks, bonds, or other assets. We help you choose schemes aligned with your goals, risk profile, and time horizon, with ongoing portfolio reviews.',
    icon: 'LineChart',
    image: '/images/services/mutual-fund.svg',
    whatsappMessage: 'Hello Krishna Associates, I need Mutual Fund advisory service.',
  },
  {
    slug: 'insurance',
    title: 'Insurance',
    short:
      'Life, health and general insurance policies matched to your family and business needs.',
    long: 'From term life and health cover to general and business insurance, we help you compare options and pick policies that actually protect what matters, without the jargon or the upsell.',
    icon: 'ShieldCheck',
    image: '/images/services/insurance.svg',
    whatsappMessage: 'Hello Krishna Associates, I need Insurance advisory service.',
  },
];

/** Utility: find a service by slug. */
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
