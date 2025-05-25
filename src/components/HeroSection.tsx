
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is available

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-lavender-light text-center px-4 pt-20 md:pt-0">
      <div className="animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">
          <span className="text-slate-900">Siddhant </span>
          <span className="text-lavender">Wadhai</span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-700 font-medium mb-8">
          Cloud Architect & Cloud Solutions
        </p>
        <Button 
          size="lg" 
          className="bg-lavender hover:bg-lavender-dark text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Discover More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
