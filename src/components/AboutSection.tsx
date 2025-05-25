
import React from 'react';

const AboutSection = () => {
  const bio = "A passionate Cloud Enthusiast with a keen interest in architecting scalable and resilient cloud solutions. Driven by a desire to explore cutting-edge technologies and leverage the power of the cloud to solve complex problems and drive innovation. Always eager to learn and contribute to impactful projects in the ever-evolving world of cloud computing.";

  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-slate-800">
          About Me
        </h2>
        <div className="w-20 h-1 bg-lavender mx-auto mb-10"></div>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          {bio}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
