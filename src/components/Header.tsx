import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Activity className="h-8 w-8 text-blue-500 mr-2" />
          <span className="font-semibold text-xl text-slate-800">Worthy.ai</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-slate-600 hover:text-blue-500 transition-colors">Features</a>
          <a href="#job-seekers" className="text-slate-600 hover:text-blue-500 transition-colors">For Job Seekers</a>
          <a href="#companies" className="text-slate-600 hover:text-blue-500 transition-colors">For Companies</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="subtle" size="sm">Log in</Button>
          <Button variant="primary" size="sm">Sign up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;