import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollProgress, useLockedBody } from '../hooks/useAppHooks';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const toggleRef = useRef<HTMLButtonElement>(null);
  
  useLockedBody(mobileMenuOpen); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Thumbnails", href: "#thumbnails" },
    { name: "Video Work", href: "#video-editing" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 z-[100] w-full pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-widest text-white uppercase z-50 hover:scale-105 transition-transform cursor-pointer">
            TC Studios
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-xs font-bold text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase group overflow-hidden"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            ref={toggleRef}
            className="md:hidden text-white z-50 active:scale-90 transition-transform p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-8 z-40 animate-in fade-in zoom-in-95 duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-white tracking-widest uppercase hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;