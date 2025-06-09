'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const projectCategories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Renovation'];

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Commercial',
    image: '/image/office.jpeg',
  },
  {
    id: 2,
    title: 'Luxury Apartment Building',
    category: 'Residential',
    image: '/image/luxury1.jpg',
  },
  {
    id: 3,
    title: 'Highway Bridge Construction',
    category: 'Infrastructure',
    image: '/image/fi1.jpg',
  },
  {
    id: 4,
    title: 'Modern Villa Design',
    category: 'Residential',
    image: '/image/villa.jpeg',
  },
  {
    id: 5,
    title: 'Shopping Mall Construction',
    category: 'Commercial',
    image: '/image/sho.jpeg',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 px-4 md:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover Our Projects
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Browse through our portfolio of completed projects showcasing our expertise,
            craftsmanship, and commitment to excellence in construction and renovation.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-amber-400 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 '
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-amber-300 mt-2">{project.category}</p>
                <a href="#" className="mt-4 text-white inline-flex items-center">
                  View Project <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-3 rounded-lg transition-colors font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
