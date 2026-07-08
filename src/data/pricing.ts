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
      'GSTIN Registration',
      'Post Registration Support',
    ],
  },
  {
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    priceLabel: 'Starting From ₹499 / Return',
    features: [
      'GSTR-1 & GSTR-3B Filing',
      'ITC Reconciliation',
      'GST Compliance Support',
      'Late Fee & Notice Assistance',
    ],
  },
  {
    slug: 'income-tax-return',
    title: 'Income Tax Return',
    priceLabel: 'Starting From ₹799',
    features: [
      'Tax Computation',
      'ITR Filing',
      'Refund Tracking & Support',
      'Balance Sheet Preparation',
    ],
  },
  {
    slug: 'salary-itr-1',
    title: 'Salary Income Tax Return (ITR-1)',
    priceLabel: 'Starting From ₹299',
    features: [
      'Salary Income',
      'Form 16 Processing',
      'Tax Saving Deductions',
      'Refund Tracking & Support',
    ],
  },
];
