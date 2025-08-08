import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    'Home', 'Projects', 'About Us', 'Gallery', 'Contact'
  ];

  const services = [
    'Residential Properties',
    
  ];

  return (
    <footer className="to-black">
      {/* Newsletter Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay Updated with Our Latest Projects
          </motion.h3>
          <motion.p
            className="mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Subscribe to our newsletter and be the first to know about new
            developments and exclusive offers.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                
            <img
              src="/images/Madhuprabhalogo.jpg"
              alt="Madhu Prabha Construction Logo"
              className="h-10 w-auto"
            />
        
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your premier destination for luxury real estate. We specialize
                in creating exceptional living experiences through innovative
                design and unparalleled service.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white">Contact Info</h4>
              <div className="space-y-4">
                {/* Address with Google Maps link */}
                <a
                  href="https://www.google.com/maps/place/UMA+Apartment,+Behind+Binzani+Book+Depot,+Tilak+Road,+Mahal,+Nagpur-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 hover:text-amber-400 transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      UMA Apartment, Behind Binzani Book Depot,
                    </p>
                    <p className="text-gray-300">Tilak Road, Mahal, Nagpur-2</p>
                  </div>
                </a>

                {/* Phone Numbers */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+919822474211" className="text-gray-300 hover:text-amber-400">
                      +91 98224 74211
                    </a>
                    <a href="tel:+919522901659" className="text-gray-300 hover:text-amber-400">
                      +91 95229 01659
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a
                    href="mailto:info@madhuprabhaconstructions.in"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    info@madhuprabhaconstructions.in
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Elite Estates. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
