import React, { lazy, Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import SeoHead from './components/SeoHead';
import Hero from './components/Hero';
import ServiceOverview from './components/ServiceOverview';
import PopularRoutes from './components/PopularRoutes';
import ScrollProgress from './components/ScrollProgress';

const PricingCalculator = lazy(() => import('./components/PricingCalculator'));
const Areas = lazy(() => import('./components/Areas'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionFallback = () => <div className="h-72 md:h-96" aria-hidden="true" />;

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-dark">
        <SeoHead />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <ServiceOverview />
          <PopularRoutes />
          <Suspense fallback={<SectionFallback />}>
            <PricingCalculator />
            <Areas />
            <FAQ />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  );
}
