import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Check, Star } from 'lucide-react';
import { packages } from '../../data/mockData';

const TourPackages = () => {
  return (
    <section id="packages" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand-sunset font-bold uppercase tracking-widest text-sm mb-4"
          >
            <Star size={16} /> Exclusive Experiences
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-brand-black"
          >
            Andaman Tour <span className="text-brand-ocean">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Curated travel packages designed to give you the ultimate island experience, tailored to your unique preferences.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col border ${
                pkg.popular ? 'border-brand-ocean shadow-brand-ocean/10' : 'border-gray-100 shadow-gray-200/50'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {pkg.popular && (
                  <div className="absolute top-4 left-4 bg-brand-sunset text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 text-brand-black">
                  <Clock size={14} className="text-brand-ocean" /> {pkg.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-3 text-brand-black group-hover:text-brand-ocean transition-colors">{pkg.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8 pt-6 border-t border-gray-100">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-turquoise/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-brand-turquoise" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action */}
                <a 
                  href="#contact"
                  className={`w-full py-4 text-center font-bold uppercase tracking-wider rounded-xl transition-all ${
                    pkg.popular 
                      ? 'bg-brand-ocean text-white hover:bg-blue-600 shadow-lg shadow-brand-ocean/30' 
                      : 'bg-gray-100 text-brand-black hover:bg-gray-200'
                  }`}
                >
                  Book Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TourPackages;
