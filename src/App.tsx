import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import FeatureShowcase from './components/FeatureShowcase';
import Timeline from './components/Timeline';
import JobSeekerSection from './components/JobSeekerSection';
import CompanySection from './components/CompanySection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <FeatureShowcase />
        <Timeline />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <JobSeekerSection />
            <CompanySection />
          </div>
        </div>
        <Testimonials />
        <Pricing />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;