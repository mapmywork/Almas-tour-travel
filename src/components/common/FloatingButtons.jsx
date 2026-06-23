import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronUp, CalendarPlus } from 'lucide-react';
import { businessInfo } from '../../data/mockData';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      
      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href={`https://wa.me/${businessInfo.phone1Raw}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 relative group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-brand-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href={`tel:${businessInfo.phone1Raw}`}
        className="w-14 h-14 rounded-full bg-brand-ocean text-white flex items-center justify-center shadow-lg shadow-brand-ocean/40 relative group"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-brand-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </motion.a>

      {/* Book Package Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href="#contact"
        className="h-14 px-6 rounded-full bg-brand-sunset text-white flex items-center gap-2 shadow-lg shadow-brand-sunset/30 hover:bg-orange-600 transition-colors"
      >
        <CalendarPlus size={20} />
        <span className="font-bold uppercase tracking-wider text-sm">Book Tour</span>
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white text-brand-black flex items-center justify-center shadow-lg border border-gray-100 relative group mt-2"
          >
            <ChevronUp size={24} />
            <span className="absolute right-full mr-4 bg-brand-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};

export default FloatingButtons;
