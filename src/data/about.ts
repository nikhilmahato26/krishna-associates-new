/**
 * ABOUT US PAGE CONTENT (Req #6)
 * Replaces "WHO WE ARE / Our Company" section.
 * Development/Marketing skill bars removed (leftover agency template).
 * "Got an Incredible Project" CTA replaced with tax-firm appropriate CTA.
 */
export const aboutPage = {
  hero: {
    eyebrow: 'About Krishna Associates',
    heading: 'Your Trusted Tax & Financial Partner',
    body: 'Krishna Associates is committed to helping individuals and businesses manage their tax and financial responsibilities with confidence. From GST Registration and Income Tax Return Filing to Mutual Fund and Insurance solutions, we focus on delivering accurate, transparent and hassle-free services. With a client-first approach and personalized guidance, we strive to make every financial decision simpler, smarter and more secure.',
    image: '/images/about/team.svg',
  },

  values: [
    {
      title: 'Accuracy',
      description:
        'Every filing double-checked. Every deduction verified. No shortcuts on numbers.',
    },
    {
      title: 'Transparency',
      description:
        'Upfront pricing, clear timelines, and honest advice — even when it means less work for us.',
    },
    {
      title: 'Personal Attention',
      description:
        'Every client gets a dedicated point of contact — not a ticket queue or a chatbot.',
    },
    {
      title: 'Long-term Trust',
      description:
        'Most of our clients have been with us for years. That is the metric we track.',
    },
  ],

  // Replaces the "Got an Incredible Project Right Now?" agency-template CTA block
  cta: {
    heading: 'Have a tax or financial question?',
    body: 'Book a free consultation and get honest, personalized guidance from someone who has actually filed thousands of returns.',
    buttonLabel: 'Get Free Consultation',
  },
} as const;
