import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Building2, 
  Users, 
  Award, 
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const currentProjects = [
    {
      id: 1,
      title: 'Sky Gardens Residences',
      location: 'Bandra West, Mumbai',
      price: '₹2.5 Cr onwards',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Under Construction',
      completion: '2025',
      description: 'Luxurious 3 & 4 BHK apartments with world-class amenities and stunning city views.',
    },
    {
      id: 2,
      title: 'Heritage Villas',
      location: 'Juhu, Mumbai',
      price: '₹8.5 Cr onwards',
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Ready to Move',
      completion: 'Completed',
      description: 'Premium independent villas with private gardens and modern architecture.',
    },
  ];

  const completedProjects = [
    {
      id: 1,
      title: 'Marina Heights',
      location: 'Worli, Mumbai',
      units: '250 Units',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
    },
    {
      id: 2,
      title: 'Golden Square Mall',
      location: 'Andheri, Mumbai',
      units: '180 Shops',
      image: 'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2022',
    },
    {
      id: 3,
      title: 'Sunset Residency',
      location: 'Powai, Mumbai',
      units: '320 Units',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'Property Investor',
      content: 'Elite Estates delivered beyond our expectations. The quality of construction and attention to detail is remarkable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 2,
      name: 'Priya Mehta',
      role: 'Homeowner',
      content: 'From planning to possession, the journey was smooth and transparent. Highly recommend Elite Estates.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Business Owner',
      content: 'The commercial spaces are well-designed and strategically located. Perfect for our business needs.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const stats = [
    { icon: Building2, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '10,000+', label: 'Happy Families' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Star, value: '4.9', label: 'Customer Rating' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Current Projects Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest developments featuring innovative design and premium amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Ready to Move' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-amber-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {project.completion}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-amber-600">{project.price}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      className="px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-xl font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                      <span>E-Brochure</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/projects">
              <motion.button
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

             <div className="relative">
            <img
              src="/images/about.jpg"
              alt="Madhu Prabha Construction Team"
              className="rounded-lg shadow-xl w-full h-auto border-4 border-gradient-to-r from-amber-600 to-orange-600"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-lg">
              <div className="text-3xl font-bold">20</div>
              <div className="text-sm">Glorious Year of Creativity</div>
            </div>
          </div>


            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Elite Estates</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over two decades of excellence in real estate development, Elite Estates has been crafting exceptional living and working spaces that redefine modern luxury. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the industry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From residential complexes to commercial developments, we bring together world-class architecture, sustainable practices, and cutting-edge technology to create spaces that inspire and elevate lifestyles.
              </p>
              
              <Link to="/about">
                <motion.button
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to find your dream property or discuss your next investment? Our team of experts is here to guide you through every step of your real estate journey. From initial consultation to final handover, we ensure a seamless experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Us</p>
                    <p className="text-gray-600">info@eliteestates.com</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <motion.button
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-xl flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Contact Us"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Completed <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our successfully delivered projects that stand as testimonials to our excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Completed {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-amber-600 font-semibold">{project.units}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/projects">
              <motion.button
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-xl flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View All Completed Projects</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from satisfied customers who made their dream homes a reality with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;