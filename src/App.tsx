import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import JobSeekerSection from './components/JobSeekerSection';
import CompanySection from './components/CompanySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <JobSeekerSection />
            <CompanySection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;