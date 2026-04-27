import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import SeoHead from './components/SeoHead';
import Hero from './components/Hero';
import ServiceOverview from './components/ServiceOverview';
import PopularRoutes from './components/PopularRoutes';
import Areas from './components/Areas';
import PricingCalculator from './components/PricingCalculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

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
          <PricingCalculator />
          <Areas />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
