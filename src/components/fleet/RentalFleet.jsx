import React from 'react';
import { motion } from 'framer-motion';
import { Users, Car, Phone, Navigation } from 'lucide-react';
import { fleet, businessInfo } from '../../data/mockData';

const RentalFleet = () => {
  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-brand-ocean font-bold uppercase tracking-widest text-sm mb-4"
            >
              <Car size={16} /> Premium Transportation
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 text-brand-black"
            >
              Our Rental <span className="text-brand-ocean">Fleet</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg"
            >
              Comfortable, well-maintained vehicles for self-drive or with professional local drivers.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href={`https://wa.me/${businessInfo.phone1Raw}`} className="inline-flex items-center gap-2 text-brand-ocean font-bold uppercase tracking-wider text-sm hover:text-blue-700 transition-colors group bg-brand-ocean/10 px-6 py-3 rounded-full">
              Book Instantly <Navigation size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-bg rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg border border-gray-100 group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-xs font-bold text-brand-sunset uppercase tracking-wider bg-brand-sunset/10 px-3 py-1 rounded-md inline-block mb-3">
                    {vehicle.type}
                  </span>
                  <h3 className="text-2xl font-black text-brand-black">{vehicle.name}</h3>
                </div>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {vehicle.description}
                </p>

                <div className="flex items-center gap-6 mb-8 border-y border-gray-200 py-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <Users size={18} className="text-brand-ocean" />
                    {vehicle.seats} Seats
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700 border-l border-gray-300 pl-6">
                    <Car size={18} className="text-brand-ocean" />
                    A/C
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a 
                    href="#contact"
                    className="flex-1 bg-brand-black text-white font-bold uppercase tracking-wider text-sm py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors text-center shadow-lg"
                  >
                    Book Now
                  </a>
                  <a 
                    href={`tel:${businessInfo.phone1Raw}`}
                    className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-xl hover:border-brand-ocean hover:text-brand-ocean transition-colors text-brand-black shadow-sm"
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RentalFleet;
