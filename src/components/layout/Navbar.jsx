import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/mockData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar for Desktop */}
      <div className="hidden md:flex bg-brand-ocean text-white text-xs py-2 px-6 justify-between items-center z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={12} /> South Andaman, India</span>
          <span className="flex items-center gap-1"><Phone size={12} /> {businessInfo.phone1}</span>
        </div>
        <div>
          <span>{businessInfo.workingHours}</span>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'top-0 glass py-3 shadow-lg' : 'top-0 md:top-8 bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 z-50">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-ocean to-brand-turquoise flex items-center justify-center text-white font-black text-2xl shadow-lg">
              A
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl leading-tight tracking-tight transition-colors ${
                isScrolled ? 'text-brand-black' : 'text-white'
              }`}>
                ALMAS <span className="text-brand-ocean">TOUR</span>
              </span>
              <span className={`text-[10px] font-bold tracking-widest ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>& TRAVEL</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-ocean transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-brand-sunset text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-brand-sunset/40"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden z-50 p-2 rounded-full ${isScrolled || isMobileMenuOpen ? 'text-brand-black bg-gray-100' : 'text-white bg-white/20 backdrop-blur-md'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-6 lg:hidden"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-bold text-brand-black hover:text-brand-ocean block uppercase tracking-wider"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-full h-px bg-gray-100"></div>
              <div className="flex flex-col gap-3">
                <a 
                  href={`tel:${businessInfo.phone1Raw}`} 
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 text-brand-black font-bold uppercase tracking-wider"
                >
                  <Phone size={18} /> {businessInfo.phone1}
                </a>
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-brand-sunset text-white font-bold uppercase tracking-wider shadow-lg shadow-brand-sunset/30"
                >
                  Get Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
