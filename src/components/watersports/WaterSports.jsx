import React from 'react';
import { motion } from 'framer-motion';
import { waterSports } from '../../data/mockData';

const WaterSports = () => {
  return (
    <section className="py-20 relative bg-gray-50" style={{ 
      backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)', 
      backgroundSize: '30px 30px' 
    }}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#334155] mb-2">
            Water Sports In
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-red-600">
            Andaman & Nicobar Islands
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {waterSports.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-md group"
            >
              {/* Image */}
              <img 
                src={sport.image} 
                alt={sport.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>

              {/* Title */}
              <div className="absolute top-5 left-0 right-0 text-center z-10">
                <h4 className="text-white font-serif font-bold tracking-wide text-lg drop-shadow-md">
                  {sport.title}
                </h4>
              </div>

              {/* Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button className="bg-[#2d3246]/95 text-white/90 px-6 py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase hover:bg-black transition-colors shadow-lg border border-white/10 backdrop-blur-sm">
                  ENQUIRY NOW
                </button>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WaterSports;
