import React from 'react';
import { motion } from 'framer-motion';
import { Map, FileText, CheckCircle, Palmtree } from 'lucide-react';

const BookingProcess = () => {
  const steps = [
    { id: 1, icon: <Map size={32} />, title: "Choose Package", desc: "Select from our curated tours." },
    { id: 2, icon: <FileText size={32} />, title: "Share Details", desc: "Provide your travel dates." },
    { id: 3, icon: <CheckCircle size={32} />, title: "Confirm Booking", desc: "Get instant confirmation." },
    { id: 4, icon: <Palmtree size={32} />, title: "Enjoy Andaman", desc: "Experience the island paradise." },
  ];

  return (
    <section className="py-24 bg-brand-ocean text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589136777351-fdc9c9cb15f9?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            How To <span className="text-brand-sunset">Book</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            A simple 4-step process to secure your dream vacation in the Andaman Islands.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-full bg-brand-ocean border-2 border-white shadow-xl shadow-black/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-brand-ocean transition-all duration-300 relative z-10">
                  {step.icon}
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-sunset text-white font-bold flex items-center justify-center text-sm shadow-lg border-2 border-brand-ocean">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm max-w-[200px]">{step.desc}</p>
                
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingProcess;
