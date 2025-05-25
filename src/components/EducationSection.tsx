
import React from 'react';

const educationData = [
  {
    institution: 'MIT-WPU',
    degree: 'MCA (Devops Major)',
    years: '2025 - present',
    description: 'Focused on distributed systems, cloud architecture, and DevOps practices.'
  },
  {
    institution: 'Hislop College Nagpur',
    degree: 'BCA',
    years: '2022 - 2025',
    description: 'Specialized in software development and data structures. Active member of the coding club.'
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center text-slate-800">
        Education
      </h2>
      <div className="w-20 h-1 bg-lavender mx-auto mb-12"></div>
      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold font-heading text-lavender">{edu.institution}</h3>
            <p className="text-md font-medium text-slate-700">{edu.degree}</p>
            <p className="text-sm text-slate-500 mb-2">{edu.years}</p>
            <p className="text-slate-600 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
