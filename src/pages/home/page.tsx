
import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChoose />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}