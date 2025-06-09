import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 lg:pr-8">
            <div className="mb-4">
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                ABOUT US
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Focused On Excellence In Every Project
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 25 years of experience in the construction industry, we&apos;ve built our reputation on quality, reliability, and exceptional customer service. Our team of skilled professionals is dedicated to bringing your vision to life, whether it&apos;s a residential renovation, commercial construction, or specialized project.
            </p>

            {/* CEO Quote/Signature */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                RUBAGUMYA Prince
              </h3>
              <p className="text-amber-400 font-medium mb-6">
                Company CEO
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#booking"
              className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors font-medium inline-flex items-center"
            >
              Get Quote
              <span className="ml-2 bg-black text-white px-2 py-1 rounded text-sm">→</span>
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 lg:max-w-lg">
            <div className="relative w-full h-96">
              <Image
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Construction project showcase"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-amber-400 rounded-lg -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
