"use client" ;
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The team at BuildPro delivered our dream home on time and within budget. Their attention to detail and quality craftsmanship exceeded our expectations. We couldn't be happier with the results!",
    name: "Sarah Johnson",
    title: "Homeowner",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    text: "As a commercial property developer, I've worked with many construction companies, but BuildPro stands out. Their professionalism, expertise, and communication make complex projects run smoothly.",
    name: "Michael Rodriguez",
    title: "Property Developer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    text: "The renovation of our historic building required special skills and sensitivity. The BuildPro team demonstrated exceptional craftsmanship while preserving the character of our 100-year-old structure.",
    name: "Emily Chang",
    title: "Business Owner",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built On Trust, Proven By Results
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with our construction team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Testimonial Content */}
          <div className="space-y-8">
            <div className="relative bg-white p-8 rounded-lg shadow-md">
              <Quote className="text-amber-400 w-12 h-12 mb-4" />
              <p className="text-gray-700 text-lg mb-6 italic">
                {testimonials[activeIndex].text}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-amber-500">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-between items-center">
              <div>
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-amber-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="text-center">
                <span className="text-amber-400 font-bold">{activeIndex + 1}</span>
                <span className="text-gray-400"> / {testimonials.length}</span>
              </div>
              <div>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-amber-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <a href="#booking" className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors font-medium inline-flex items-center">
              Get Quote
              <span className="ml-2 bg-black text-white px-2 py-1 rounded text-sm">→</span>
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block">
            <img
              src="image/eng.png"
              alt="Construction project showcase"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;