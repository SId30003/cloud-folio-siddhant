
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const ContactSection = () => {
  const resumeLink = "YOUR_GOOGLE_DRIVE_RESUME_LINK_HERE"; // IMPORTANT: Replace with actual link

  return (
    <section id="contact" className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center text-slate-800">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-lavender mx-auto mb-12"></div>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-lg text-slate-700 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out!
          </p>
          <div className="space-y-4 mb-10">
            <a href="mailto:siddhant.wadhai@example.com" className="flex items-center justify-center group">
              <Button variant="outline" className="w-full md:w-auto border-lavender text-lavender hover:bg-lavender hover:text-white transition-colors duration-300 group-hover:shadow-lg">
                <Mail className="mr-2 h-5 w-5" /> siddhantwadhai20@gmail.com
              </Button>
            </a>
             <Button 
                variant="default" 
                className="w-full md:w-auto bg-lavender hover:bg-lavender-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 group-hover:shadow-lg"
                asChild
              >
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" /> Download My Resume
              </a>
            </Button>
             {resumeLink === "https://drive.google.com/file/d/1tZLmoSn9UkiqOBjiGxEn4tbjSTr9lICk/view"}
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/siddhant-wadhai-518b5524a/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-lavender transition-colors">
              <Linkedin size={28} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/SId30003" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-lavender transition-colors">
              <Github size={28} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
