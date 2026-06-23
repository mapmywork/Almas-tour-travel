import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote, MessageCircle } from 'lucide-react';
import { testimonials } from '../../data/mockData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-bg to-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand-ocean font-bold uppercase tracking-widest text-sm mb-4"
          >
            <MessageCircle size={16} /> Guest Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 text-brand-black"
          >
            What Our <span className="text-brand-ocean">Travelers</span> Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Real stories from real travelers who chose ALMAS to make their Andaman dreams come true.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="bg-white p-8 rounded-3xl h-full flex flex-col relative shadow-xl shadow-gray-200/50 border border-gray-100 mt-6">
                  {/* Floating Avatar */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-tr from-brand-ocean to-brand-turquoise flex items-center justify-center text-white font-black text-xl shadow-lg border-4 border-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  <Quote size={40} className="text-brand-ocean/10 absolute top-8 right-6" />
                  
                  <div className="flex gap-1 mb-6 mt-4 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-bold text-brand-black">{testimonial.name}</h4>
                    <span className="text-xs text-brand-sunset font-bold uppercase tracking-wider">{testimonial.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
