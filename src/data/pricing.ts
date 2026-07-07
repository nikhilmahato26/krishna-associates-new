import type { PricingPlan } from '@/types';

/**
 * PRICING DATA
 * Structure updated per client spec (Req #1):
 * - "Starting From ₹X" pricing
 * - Specific feature checklist per plan
 * - [Contact Us] CTA instead of Read More
 */
export const pricingPlans: PricingPlan[] = [
  {
    slug: 'gst-registration',
    title: 'GST Registration',
    priceLabel: 'Starting From ₹1,499',
    features: [
      'GST Application Filing',
      'Document Verification',
      'GSTIN Assistance',
      'Post Registration Support',
    ],
  },
  {
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    priceLabel: 'Starting From ₹499 / Return',
    features: [
      'GSTR Filing',
      'Compliance Support',
      'ITC Reconciliation',
      'Filing Assistance',
    ],
  },
  {
    slug: 'income-tax-return',
    title: 'Income Tax Return',
    priceLabel: 'Starting From ₹799',
    features: [
      'Tax Computation',
      'ITR Filing',
      'Refund Assistance',
      'Compliance Support',
    ],
  },
  {
    slug: 'salary-itr-1',
    title: 'Salary Income Tax Return (ITR-1)',
    priceLabel: 'Starting From ₹299',
    features: [
      'Salary Income',
      'House Property Income',
      'Bank Interest Income',
      'Refund Processing',
    ],
  },
];
