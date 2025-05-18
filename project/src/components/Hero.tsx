import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="bg-blue-50 text-blue-600 py-1 px-3 rounded-full text-sm font-medium">
              Beta Release
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Know Your <span className="text-blue-500">Worth</span> in the Job Market
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Evaluate job offers or assess candidate fit with data-driven insights. 
            No more guesswork in hiring or job hunting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl py-12 px-8 text-white transform transition-transform hover:scale-105">
                <div className="text-5xl font-bold mb-3">2,500+</div>
                <div className="text-white/80 text-lg">Salary Data Points</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl py-12 px-8 text-white transform transition-transform hover:scale-105">
                <div className="text-5xl font-bold mb-3">87%</div>
                <div className="text-white/80 text-lg">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl py-12 px-8 text-white transform transition-transform hover:scale-105">
                <div className="text-5xl font-bold mb-3">5,000+</div>
                <div className="text-white/80 text-lg">Companies Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl py-12 px-8 text-white transform transition-transform hover:scale-105">
                <div className="text-5xl font-bold mb-3">15k+</div>
                <div className="text-white/80 text-lg">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;