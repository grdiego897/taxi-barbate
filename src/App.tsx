import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Areas from './components/Areas';
import PricingCalculator from './components/PricingCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-dark">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <PricingCalculator />
          <Areas />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
