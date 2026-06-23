import React from 'react';
import { motion } from 'framer-motion';
import { Map, Users, Car, DollarSign, Plane, Heart, Star, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Map size={24} />, title: "Local Andaman Experts", desc: "Deep knowledge of the islands for the best experience." },
    { icon: <Users size={24} />, title: "Customized Packages", desc: "Tailor-made itineraries based on your budget." },
    { icon: <Car size={24} />, title: "Comfortable Vehicles", desc: "Premium fleet for safe and relaxing travel." },
    { icon: <DollarSign size={24} />, title: "Affordable Pricing", desc: "Best value without compromising on quality." },
    { icon: <Plane size={24} />, title: "Airport Transfers", desc: "Punctual pickup and drop-off services." },
    { icon: <Heart size={24} />, title: "Family Friendly", desc: "Safe environments and activities for all ages." },
    { icon: <Star size={24} />, title: "Island Specialists", desc: "Exclusive access to hidden gems and resorts." },
    { icon: <Clock size={24} />, title: "24/7 Assistance", desc: "Round the clock support during your trip." },
  ];

  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-ocean/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand-sunset font-bold uppercase tracking-widest text-sm mb-4"
          >
            <Star size={16} /> The Almas Advantage
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-white"
          >
            Why Choose <span className="text-brand-turquoise">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We don't just sell tours; we craft unforgettable memories with our expertise and passion for the Andaman Islands.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-8 rounded-3xl hover:bg-white/5 transition-colors border border-white/5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-ocean to-brand-turquoise flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-ocean/20">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-wide">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
