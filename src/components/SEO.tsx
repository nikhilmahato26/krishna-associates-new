import { Helmet } from 'react-helmet-async';
import { SITE } from '@/constants/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export const SEO = ({ title, description, path = '' }: SEOProps) => {
  const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const desc = description ??
    'Expert GST Registration, Income Tax Return Filing, Mutual Fund and Insurance services. Trusted financial partner for individuals and businesses.';
  const url = `${SITE.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
};
