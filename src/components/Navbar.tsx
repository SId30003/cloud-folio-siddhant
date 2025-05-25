
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-foreground hover:text-lavender transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
      onClick={(e) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {children}
    </a>
  </li>
);

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9" disabled><Sun className="h-5 w-5" /></Button>; // Or a placeholder
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 w-9 h-9"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5 text-slate-300" /> : <Moon className="h-5 w-5 text-slate-700" />}
    </Button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-background/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-heading font-bold text-lavender hover:text-lavender-dark transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const heroElement = document.querySelector('#hero');
                if (heroElement) {
                   heroElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Siddhant Wadhai
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-baseline space-x-1">
              {navItems.map(item => <NavItem key={item.href} href={item.href}>{item.label}</NavItem>)}
            </ul>
            <ThemeToggleButton />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-foreground hover:text-lavender hover:bg-lavender/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lavender"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg">
            {navItems.map(item => <NavItem key={item.href} href={item.href}>{item.label}</NavItem>)}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

