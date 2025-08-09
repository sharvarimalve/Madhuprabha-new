import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, ArrowRight, Download, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: '3BHK Luxurious Prajakta Park (Abhyankar Nagar)',
      category: 'Residential',
      image: '/images/Prajktapark.png',
      location: 'Abhyankar Nagar, Nagpur',
      duration: '12 months',
      team: '20 members',
      description: 'Introducing \'PRAJAKTA PARK\', our 5 level 3BHK luxurious park view apartment located in the lap of nature. A peaceful location in the heart of the city where you can enjoy your mornings with blissful greenery. A Perfect Home with Modern Amenities at Abhyankar Nagar, Nagpur.',
      status: 'In Progress'
    },
    {
      id: 2,
      title: '3BHK Luxurious Prajakta La-Masion',
      category: 'Residential',
      image: '/images/secondProject.jpg',
      location: 'Nagpur',
      duration: '14 months',
      team: '22 members',
      description: 'Introducing \'PRAJAKTA La-Masion\', our 5 level 3BHK luxurious view apartment located in the lap of nature. A peaceful location in the heart of the city where you can enjoy your mornings with blissful greenery. A Perfect Home with Modern Amenities at Nagpur.',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Keshav Enclave nandanwan',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/09/keshav-enclave-nandanwan.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Introducing \'Keshav Enclave \', our 3 level 3BHK luxurious park view apartment located in the lap of nature. A peaceful location in the heart of the city where you can enjoy your mornings with blissful greenery. A Perfect Home with Modern Amenities at Abhyankar Nagar, Nagpur.',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Prajakta cross Winds',
      category: 'Residential',
      image: '	https://ashishconstruction.in/wp-content/uploads/2021/08/PRAJAKTA-CROSSWIND-HINGANA-ROAD.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Prajakta Prabhakamal',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/08/IMG-20160212-WA0009.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Prajakta Orchid',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/08/PRAJAKTA-ORCHID-PANDEY-LAYOUT.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
     {
      id: 7,
    title: 'Uttam Apartment',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/09/uttam-apartment-nandanwan.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
     {
      id: 8,
     title: 'Ashish Annex',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/09/IMG_20210930_134037-1-min-scaled.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
     {
      id: 9,
        title: 'Sai Bhushan',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/09/SAI-BHUSAN-SWALAMBI-NAGAR.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
     {
      id: 10,
      title: 'DMA Harmony',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/09/DMA-HORMONEY-PUNE.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
      {
      id: 11,
      title: 'Sai Vatika Layout',
      category: 'Residential',
      image: 'https://ashishconstruction.in/wp-content/uploads/2021/09/IMG_20210930_133751-min-rotated.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
     {
      id: 12,
      title: 'Prajakta Gardens',
      category: 'Residential',
      image: '	https://ashishconstruction.in/wp-content/uploads/2021/10/IMG_20210930_133144-min-scaled.jpg',
      location: 'Nagpur',
      duration: '15 months',
      team: '30 members',
      description: 'Residential facility with advanced infrastructure and safety systems.',
      status: 'Completed'
    },
    
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'In Progress') return project.status === 'In Progress';
    if (filter === 'Completed') return project.status === 'Completed';
    return true;
  });

  const filterButtons = [
    { key: 'all', label: 'All Residential Projects' },
    { key: 'In Progress', label: 'In Progress' },
    { key: 'Completed', label: 'Completed' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-20  text-gradient-to-r from-gray-800 to-gray-900">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of exceptional residential developments across Mumbai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 text-gray-600">
             
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
                    className="w-full h-64 object-fill group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-amber-500 text-white'
                    }`}>
                      {project.status === 'Completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  
                  
                  <div className="flex space-x-3">
                    <Link to={`/projects/${project.id}`} state={{ project }} className="flex-1">
                      <motion.div
                        className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                    
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