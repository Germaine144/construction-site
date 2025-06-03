import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
// import Logo from './Logo';
import Image from 'next/image';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
              <div>
                 <Image src="/image/logo.png" alt="logonproject" width={200} height={100} />
                  </div>
            <p className="text-gray-400 mb-6">
              Providing high-quality construction services with 25+ years of experience. Building dreams, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-amber-400 transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Residential Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Commercial Buildings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Home Renovations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Interior Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Architectural Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Construction Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-amber-400 mr-3 mt-1" size={18} />
                <span className="text-gray-400">Makuza Peace Plaza, 4th Floo KN 4 Ave, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-amber-400 mr-3" size={18} />
                <span className="text-gray-400">+ (250) 784 024 346</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-amber-400 mr-3" size={18} />
                <span className="text-gray-400">info@buildpro.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} BuildPro Construction. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;