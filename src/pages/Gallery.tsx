import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, X, Play, Filter, Eye } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const galleryItems = [
    // Images
    {
     id: 1,
      type: 'image',
      url: '/images/certificate.jpg',
      title: 'Apartment Complex',
    },
    {
       id: 2,
      type: 'image',
      url: '/images/Ashish construction.jpg',
      title: 'Apartment Complex',
    },
    {
     id: 3,
      type: 'image',
      url: '/images/Award1.jpg',
      title: 'Apartment Complex',
    },
    {
     id: 4,
      type: 'image',
      url: '/images/Awards4.jpg',
      title: 'Apartment Complex',
    },
    {
      id: 5,
      type: 'image',
      url: '/images/all member .JPG',
      title: 'Luxury Villa',
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sunset Residency',
     
    },
    {
      id: 7,
      type: 'image',
      url: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Elite Heights Interior',
     
    },
    {
      id: 8,
      type: 'image',
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Kitchen Design',
      
    },
    // Videos (placeholder)
    {
      id: 9,
      type: 'video',
      url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sky Gardens Virtual Tour',
     
    },

  ];

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'images') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return item.category === filter;
  });

  const filterButtons = [
    { key: 'all', label: 'All', icon: Eye },
    { key: 'images', label: 'Images', icon: Image },
    { key: 'videos', label: 'Videos', icon: Video }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20  text-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our stunning collection of completed projects, interiors, and virtual tours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           
            {filterButtons.map((button) => {
              const Icon = button.icon;
              return (
                <motion.button
                  key={button.key}
                  onClick={() => setFilter(button.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === button.key
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{button.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedItem(item)}
                  layout
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                      </div>
                    </div> */}

                    {/* Type Badge */}
                    <div className="absolute top-3 left-3">
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold text-white ${
                        item.type === 'video' ? 'bg-red-500' : 'bg-blue-500'
                      }`}>
                        {item.type === 'video' ? (
                          <Video className="w-3 h-3" />
                        ) : (
                          <Image className="w-3 h-3" />
                        )}
                        <span>{item.type}</span>
                      </div>
                    </div>

                    {/* Play Button for Videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-gray-800 ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    {/* <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-semibold capitalize">
                        {item.category}
                      </span>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal for Selected Item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-96 object-fill"
                />
                
                {selectedItem.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                      <Play className="w-10 h-10 text-gray-800 ml-1" />
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;