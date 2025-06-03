"use client" ;
import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

type ServiceType = 'construction' | 'renovation' | 'consultation';
type FormData = {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  projectDetails: string;
  date: string;
  time: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  serviceType: 'construction',
  projectDetails: '',
  date: '',
  time: ''
};

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Booking form submitted:', formData);
      setIsSubmitted(true);
      // In a real application, you would send this data to your backend
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
  };

  return (
    <section id="booking" className="py-16 px-4 md:px-20 bg-amber-50 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
            BOOK WITH US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Schedule Your Construction Service
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Tell us about your project and preferred time, and we'll arrange a consultation with one of our experts.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Submitted Successfully!</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Thank you for your interest in our services. One of our representatives will contact you within 24 hours to confirm your appointment.
              </p>
              <button
                onClick={resetForm}
                className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  placeholder="Your email address"
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
              </div>
              
              {/* Service Type Field */}
              <div>
                <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                >
                  <option value="construction">Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              
              {/* Date Field */}
              <div className="relative">
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-400 pr-12`}
                  />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
                {errors.date && <p className="mt-1 text-red-500 text-sm">{errors.date}</p>}
              </div>
              
              {/* Time Field */}
              <div className="relative">
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Preferred Time</label>
                <div className="relative">
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.time ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-400 pr-12`}
                  />
                  <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
                {errors.time && <p className="mt-1 text-red-500 text-sm">{errors.time}</p>}
              </div>
              
              {/* Project Details Field */}
              <div className="md:col-span-2">
                <label htmlFor="projectDetails" className="block text-gray-700 font-medium mb-2">Project Details</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div className="md:col-span-2 text-center mt-6">
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-lg transition-colors font-medium text-lg"
                >
                  Schedule Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;