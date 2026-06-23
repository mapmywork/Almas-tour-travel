import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Calendar, Users, Briefcase } from 'lucide-react';
import { businessInfo } from '../../data/mockData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand-ocean font-bold uppercase tracking-widest text-sm mb-4"
          >
            <Send size={16} /> Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-brand-black"
          >
            Plan Your <span className="text-brand-ocean">Trip</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Reach out to our Andaman travel experts to customize your itinerary or book a vehicle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="bg-brand-bg rounded-3xl p-8 border border-gray-100 flex flex-col gap-6 shadow-lg">
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-ocean shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Our Office</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{businessInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-ocean shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-brand-black mb-1">Call Us</h4>
                  <a href={`tel:${businessInfo.phone1Raw}`} className="text-gray-500 text-sm hover:text-brand-ocean transition-colors">
                    {businessInfo.phone1}
                  </a>
                  <a href={`tel:${businessInfo.phone2Raw}`} className="text-gray-500 text-sm hover:text-brand-ocean transition-colors mt-1">
                    {businessInfo.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-ocean shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Email Us</h4>
                  <a href={`mailto:${businessInfo.email}`} className="text-gray-500 text-sm hover:text-brand-ocean transition-colors block">
                    {businessInfo.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Map Embed - Andaman Location */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-200 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124673.74313278912!2d92.65177445!3d11.83151475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088946c57f72233%3A0xc66c1f1ec7de709!2sSouth%20Andaman!5e0!3m2!1sen!2sin!4v1709664535311!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-brand-black p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ocean/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-8 text-white relative z-10">Send A Booking Request</h3>
            
            <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-ocean transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="+91" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-ocean transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1"><Briefcase size={12}/> Package</label>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-ocean transition-colors appearance-none">
                    <option value="" disabled selected className="text-gray-500 bg-brand-black">Select Package</option>
                    <option value="family" className="bg-brand-black">Family Package</option>
                    <option value="honeymoon" className="bg-brand-black">Honeymoon Package</option>
                    <option value="adventure" className="bg-brand-black">Adventure Package</option>
                    <option value="custom" className="bg-brand-black">Customized Tour</option>
                    <option value="car" className="bg-brand-black">Car Rental Only</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1"><Calendar size={12}/> Date</label>
                    <input type="date" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-gray-300 focus:outline-none focus:border-brand-ocean transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1"><Users size={12}/> Pax</label>
                    <input type="number" min="1" placeholder="2" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-ocean transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea rows="4" placeholder="Tell us about your trip preferences..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-ocean transition-colors resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-brand-sunset text-white font-bold uppercase tracking-wider rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-brand-sunset/30">
                <Send size={18} /> Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
