import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import Button from './Button';
import DemoRequestModal from './DemoRequestModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-xl py-3 shadow-lg border-b border-gray-800' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative flex items-center">
              <ShieldCheck className="text-teal-400 w-8 h-8 mr-2" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
            </div>
          </div>
          <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
            SAM<span className="text-teal-400">.</span>
          </span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Capabilities', 'Why SAM', 'How It Works', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`font-medium text-sm tracking-wide transition-all duration-200 ${
                    scrolled 
                      ? 'text-gray-300 hover:text-teal-400 hover:scale-105' 
                      : 'text-gray-200 hover:text-teal-400 hover:scale-105'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button 
          variant="secondary" 
          size="sm"
          className={`hidden md:block px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
            scrolled 
              ? 'bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:from-teal-600 hover:to-amber-600 shadow-lg hover:shadow-teal-500/25 hover:scale-105' 
              : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg hover:shadow-teal-500/25 hover:scale-105'
          }`}
          onClick={() => setIsModalOpen(true)}
        >
          Request Demo
        </Button>
        
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl shadow-lg py-4 px-4 border-t border-gray-800">
          <nav>
            <ul className="space-y-4">
              {['About', 'Capabilities', 'Why SAM', 'How It Works', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              variant="secondary" 
              size="sm"
              className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-teal-500 to-amber-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-amber-600 transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Request Demo
            </Button>
          </nav>
        </div>
      )}

      <DemoRequestModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;