import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Users, Phone, Navigation } from 'lucide-react';
import { businessInfo } from '../../data/mockData';

const TrustBar = () => {
  const features = [
    "Trusted Local Partner",
    "Customized Packages",
    "Rental Cars Available",
    "Airport Pickup",
    "Family Friendly",
    "Quick Support"
  ];

  return (
    <div className="w-full bg-brand-ocean border-b border-brand-ocean/80 py-4 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wider"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                ✓
              </div>
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end">
      {/* Background Image - Andaman Beach Drone Footage Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000" 
          alt="Andaman Islands Paradise" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/50 to-brand-black/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 pb-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass px-5 py-2 rounded-full flex items-center gap-3 border-white/30"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">Trusted Andaman Travel Partner</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight"
            >
              Discover The <br />
              <span className="text-brand-turquoise">Paradise</span> Of <br />
              Andaman Islands
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 font-medium max-w-xl leading-relaxed drop-shadow-md"
            >
              Premium tour packages, island sightseeing, airport transfers and rental cars for unforgettable Andaman experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              <a href="#packages" className="px-8 py-4 bg-brand-sunset text-white font-bold uppercase tracking-wider rounded-full hover:bg-orange-600 transition-colors shadow-xl shadow-brand-sunset/30 flex items-center gap-2">
                <Navigation size={20} /> Explore Packages
              </a>
              <a href="#fleet" className="px-8 py-4 glass text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/50">
                Book Vehicle
              </a>
            </motion.div>
          </div>

          {/* Right Content - Quick Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-dark p-8 md:p-10 rounded-3xl w-full max-w-md ml-auto border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Decor */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-turquoise/30 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">Quick Enquiry</h3>
              
              <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Name</label>
                    <input type="text" placeholder="John Doe" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-turquoise transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Phone</label>
                    <input type="tel" placeholder="+91" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-turquoise transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Package Type</label>
                  <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-turquoise transition-colors appearance-none">
                    <option value="" disabled selected className="text-gray-500 bg-brand-black">Select Package</option>
                    <option value="family" className="bg-brand-black">Family Tour</option>
                    <option value="honeymoon" className="bg-brand-black">Honeymoon Tour</option>
                    <option value="adventure" className="bg-brand-black">Adventure Tour</option>
                    <option value="car-rental" className="bg-brand-black">Car Rental</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1"><Calendar size={12}/> Date</label>
                    <input type="date" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-turquoise transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1"><Users size={12}/> Members</label>
                    <input type="number" min="1" placeholder="2" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-turquoise transition-colors" />
                  </div>
                </div>

                <button className="w-full py-4 bg-brand-ocean text-white font-bold uppercase tracking-wider rounded-xl hover:bg-blue-600 transition-colors mt-2 shadow-lg shadow-brand-ocean/30">
                  Get Free Quote
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <TrustBar />
    </section>
  );
};

export default Hero;
