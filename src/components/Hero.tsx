import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
     <video
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/construction.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>

      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 z-20 text-white max-w-xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Building Your Vision
        </h1>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          We are committed to delivering high-quality construction services for residential and commercial projects with excellence and precision.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors font-medium text-center">
            View Our Projects
          </a>
          <a href="#about" className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition-colors font-medium text-center">
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;