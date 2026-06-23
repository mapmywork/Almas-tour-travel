import React from 'react';
import { businessInfo } from '../../data/mockData';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-ocean to-brand-turquoise flex items-center justify-center text-white font-black text-2xl shadow-lg">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-tight tracking-tight">
                  ALMAS <span className="text-brand-ocean">TOUR</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-gray-400">& TRAVEL</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Premium island tourism and car rentals in Andaman. We create unforgettable experiences with expert local guides and comfortable transportation.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-ocean transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-ocean transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-ocean transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'Destinations', 'Tour Packages', 'Car Rentals', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-brand-ocean flex items-center gap-2 group transition-colors text-sm">
                    <ChevronRight size={14} className="text-brand-ocean group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {['Family Packages', 'Honeymoon Tours', 'Adventure Sports', 'Airport Transfers', 'Self Drive Cars'].map((item) => (
                <li key={item}>
                  <a href="#packages" className="text-gray-400 hover:text-brand-ocean flex items-center gap-2 group transition-colors text-sm">
                    <ChevronRight size={14} className="text-brand-ocean group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-brand-sunset shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-brand-sunset shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${businessInfo.phone1Raw}`} className="hover:text-white transition-colors">{businessInfo.phone1}</a>
                  <a href={`tel:${businessInfo.phone2Raw}`} className="hover:text-white transition-colors">{businessInfo.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-brand-sunset shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">{businessInfo.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
