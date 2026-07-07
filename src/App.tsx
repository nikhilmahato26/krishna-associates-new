import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { RootLayout } from '@/layout/RootLayout';
import { PageLoader } from '@/components/PageLoader';

// Route-level code splitting — keeps the initial bundle lean.
// HomePage stays eager since it's the most common entry point.
import { HomePage } from '@/pages/HomePage';
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() =>
  import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const ServiceDetailPage = lazy(() =>
  import('@/pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="services/:slug"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServiceDetailPage />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
