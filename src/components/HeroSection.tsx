
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-lavender-light dark:from-slate-900 dark:to-slate-800 text-center px-4 pt-20 md:pt-0 relative">
      <div className="animate-fade-in-up z-10">
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">
          <span className="text-slate-900 dark:text-slate-100">Siddhant </span>
          <span className="text-lavender">Wadhai</span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium mb-10">
          Cloud Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-lavender hover:bg-lavender-dark text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
            onClick={() => scrollToSection('#projects')}
          >
            View Projects
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="text-lavender border-lavender hover:bg-lavender/10 hover:text-lavender-dark dark:text-lavender-light dark:border-lavender-light dark:hover:bg-lavender-light/10 dark:hover:text-lavender font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
            onClick={() => scrollToSection('#contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
        onClick={() => scrollToSection('#about')}
        title="Scroll to About section"
      >
        <ArrowDown className="h-8 w-8 text-lavender dark:text-lavender-light" />
      </div>
    </section>
  );
};

export default HeroSection;

