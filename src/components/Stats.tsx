import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Client Satisfaction */}
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">97%</div>
            <div className="text-gray-300 text-sm md:text-base">Client Satisfaction</div>
          </div>
          
          {/* Successful Projects */}
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">781+</div>
            <div className="text-gray-300 text-sm md:text-base">Successful Projects</div>
          </div>
          
          {/* Happy Clients */}
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">31k</div>
            <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
          </div>
          
          {/* Years of Experience */}
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
            <div className="text-gray-300 text-sm md:text-base">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;