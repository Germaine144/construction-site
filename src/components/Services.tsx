"use client";
import React, { useState } from 'react';
import { Wrench, HardHat, Briefcase } from 'lucide-react';

const serviceCategories = [
  { id: 'construction', title: 'CONSTRUCTION', icon: <HardHat size={24} /> },
  { id: 'renovation', title: 'RENOVATION', icon: <Wrench size={24} /> },
  { id: 'consulting', title: 'CONSULTING', icon: <Briefcase size={24} /> }
];

const serviceDetails = {
  construction: {
    title: "Construction Services",
    description: "Our comprehensive construction services cover everything from initial planning to final delivery. We pride ourselves on quality craftsmanship, attention to detail, and meeting deadlines.",
    specialties: [
      "Residential Buildings", "Sales Properties", "Framing & Roofing", 
      "Structural Design", "Concrete Work", "Interior Finish"
    ],
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  renovation: {
    title: "Renovation Services",
    description: "Transform your existing space with our renovation expertise. Whether it's a kitchen remodel, bathroom update, or complete home makeover, we deliver stunning results.",
    specialties: [
      "Kitchen Remodeling", "Bathroom Updates", "Home Extensions", 
      "Interior Redesign", "Outdoor Living Spaces", "Commercial Renovation"
    ],
    image: "/image/f2.jpg"
  },
  consulting: {
    title: "Consulting Services",
    description: "Our expert consultation services help you make informed decisions about your construction project. From budgeting to material selection, we provide professional guidance every step of the way.",
    specialties: [
      "Project Feasibility", "Cost Estimation", "Material Selection", 
      "Building Codes", "Timeline Planning", "Risk Assessment"
    ],
    image: "/image/fi.jpg"
  }
};

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState('construction');

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
  };

  const activeServiceData = serviceDetails[activeService as keyof typeof serviceDetails];

  return (
    <section id="services" className="py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Solutions We Provide
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We offer comprehensive construction and renovation services tailored to meet your specific needs. From initial planning to project completion, we deliver quality results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Service Icons */}
          <div className="space-y-6">
            {serviceCategories.map(category => (
              <div 
                key={category.id}
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-colors ${
                  activeService === category.id ? 'bg-amber-50' : 'bg-gray-50 hover:bg-amber-50'
                }`}
                onClick={() => handleServiceClick(category.id)}
              >
                <div className={`${activeService === category.id ? 'text-amber-500' : 'text-amber-400'}`}>
                  {category.icon}
                </div>
                <span className="font-semibold text-gray-900 text-lg">
                  {category.title}
                </span>
              </div>
            ))}
          </div>

          {/* Middle Column - Images */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-lg h-80">
              <img
                src={activeServiceData.image}
                alt={`${activeServiceData.title} showcase`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column - Service Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {activeServiceData.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {activeServiceData.description}
            </p>

            {/* Services List */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-4">Our Specialties:</h4>
              <div className="grid grid-cols-2 gap-y-2">
                {activeServiceData.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a href="#booking" className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors font-medium inline-flex items-center mt-4">
              Get Quote
              <span className="ml-2 bg-black text-white px-2 py-1 rounded text-sm">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;