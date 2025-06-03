"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-20 pt-5 z-50 relative">
      <div>
     <Image src="/image/logo.png" alt="logonproject" width={200} height={100} />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between gap-7 text-white">
        <a href="#home" className="text-amber-300 hover:text-amber-200 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-amber-300 transition-colors">
          About Us
        </a>
        <a href="#projects" className="hover:text-amber-300 transition-colors">
          Projects
        </a>
        <a href="#services" className="hover:text-amber-300 transition-colors">
          Services
        </a>
        <a href="#contact" className="hover:text-amber-300 transition-colors">
          Contact
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* CTA Button */}
      <div className="hidden md:block">
        <a href="#booking" className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center">
          Get Quote
          <span className="ml-2 bg-black text-white px-2 py-1 rounded text-sm"><ChevronRight size={14} /></span>
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 text-white z-50 shadow-lg">
          <div className="flex flex-col p-4">
            <a href="#home" className="py-3 border-b border-gray-700 text-amber-300">Home</a>
            <a href="#about" className="py-3 border-b border-gray-700 hover:text-amber-300 transition-colors">About Us</a>
            <a href="#projects" className="py-3 border-b border-gray-700 hover:text-amber-300 transition-colors">Projects</a>
            <a href="#services" className="py-3 border-b border-gray-700 hover:text-amber-300 transition-colors">Services</a>
            <a href="#contact" className="py-3 border-b border-gray-700 hover:text-amber-300 transition-colors">Contact</a>
            <a href="#booking" className="mt-4 bg-amber-400 text-center text-white px-4 py-3 rounded-lg hover:bg-amber-500 transition-colors font-medium">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;