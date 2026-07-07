import { Home, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/Button';

export const NotFoundPage = () => {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="min-h-[70vh] flex items-center justify-center bg-cream">
        <div className="container-page text-center py-20">
          <p className="text-8xl font-semibold text-brand-200 font-[var(--font-display)]">
            404
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl text-ink-900">
            This page doesn&rsquo;t exist.
          </h1>
          <p className="mt-3 text-ink-600 max-w-md mx-auto">
            The page you&rsquo;re looking for may have moved or is no longer available.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button to="/" size="lg">
              <Home size={18} />
              Back to Home
            </Button>
            <Button to="/services" variant="outline" size="lg">
              View Services
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
