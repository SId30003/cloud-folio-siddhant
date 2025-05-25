
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {currentYear} Siddhant Wadhai. All rights reserved.</p>
        <p className="text-sm mt-1">Built with React, Tailwind CSS, and ❤️.</p>
      </div>
    </footer>
  );
};

export default Footer;
