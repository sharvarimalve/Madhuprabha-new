import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, ArrowRight, Download, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Sky Gardens Residences',
      location: 'Bandra West, Mumbai',
      price: '₹2.5 Cr onwards',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'ongoing',
      type: 'residential',
      completion: '2025',
      description: 'Luxurious 3 & 4 BHK apartments with world-class amenities and stunning city views.',
      features: ['Swimming Pool', 'Gym', 'Club House', 'Kids Play Area'],
    },
    {
      id: 2,
      title: 'Heritage Villas',
      location: 'Juhu, Mumbai',
      price: '₹8.5 Cr onwards',
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed',
      type: 'residential',
      completion: 'Ready to Move',
      description: 'Premium independent villas with private gardens and modern architecture.',
      features: ['Private Garden', 'Basement Parking', 'Security', 'Premium Interiors'],
    },
    {
      id: 3,
      title: 'Marina Heights',
      location: 'Worli, Mumbai',
      price: '₹3.2 Cr onwards',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed',
      type: 'residential',
      completion: '2023',
      description: 'Luxury residential towers with panoramic sea views and premium amenities.',
      features: ['Sea View', 'Infinity Pool', 'Spa', 'Concierge Service'],
    },
    {
      id: 4,
      title: 'Sunset Residency',
      location: 'Powai, Mumbai',
      price: '₹1.8 Cr onwards',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed',
      type: 'residential',
      completion: '2023',
      description: 'Affordable luxury homes with modern amenities and great connectivity.',
      features: ['Metro Connectivity', 'Shopping Complex', 'School Nearby', 'Hospital Access'],
    },
    {
      id: 5,
      title: 'Royal Palms Apartments',
      location: 'Andheri West, Mumbai',
      price: '₹3.8 Cr onwards',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'ongoing',
      type: 'residential',
      completion: '2024',
      description: 'Premium 2 & 3 BHK apartments with lush green surroundings and modern amenities.',
      features: ['Garden View', 'Fitness Center', 'Children\'s Park', '24/7 Security'],
    },
    {
      id: 6,
      title: 'Ocean View Towers',
      location: 'Juhu Beach, Mumbai',
      price: '₹5.2 Cr onwards',
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'ongoing',
      type: 'residential',
      completion: '2025',
      description: 'Luxury beachfront apartments with stunning ocean views and premium facilities.',
      features: ['Ocean View', 'Private Beach Access', 'Spa & Wellness', 'Fine Dining'],
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'ongoing') return project.status === 'ongoing';
    if (filter === 'completed') return project.status === 'completed';
    return true;
  });

  const filterButtons = [
    { key: 'all', label: 'All Residential Projects' },
    { key: 'ongoing', label: 'Ongoing' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Residential Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our portfolio of exceptional residential developments across Mumbai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filterButtons.map((button) => (
              <motion.button
                key={button.key}
                onClick={() => setFilter(button.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === button.key
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-amber-500 text-white'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.type === 'residential' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-purple-500 text-white'
                    }`}>
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      <Calendar className="w-4 h-4" />
                      <span>{project.completion}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-amber-600">{project.price}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      className="px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-xl font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;