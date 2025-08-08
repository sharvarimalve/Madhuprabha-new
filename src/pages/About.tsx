import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building2, Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2000', event: 'Company Founded', description: 'Started with a vision to transform real estate' },
    { year: '2005', event: 'First Major Project', description: 'Completed our first residential complex' },
    { year: '2010', event: '1000+ Families', description: 'Reached milestone of 1000 happy families' },
    { year: '2015', event: 'Commercial Expansion', description: 'Expanded into commercial real estate' },
    { year: '2020', event: 'Sustainability Focus', description: 'Adopted green building practices' },
    { year: '2024', event: '50+ Projects', description: 'Completed over 50 successful projects' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring every project meets the highest standards of construction and design.',
    },
    {
      icon: Users,
      title: 'Customer Centric',
      description: 'Our customers are at the heart of everything we do. We build relationships that last a lifetime.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with complete transparency and ethical practices in all our dealings.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace new technologies and innovative design concepts to create exceptional living spaces.',
    },
  ];

  const team = [
    {
      name: 'Ashish Londe',
      role: 'Founder & CEO',
      image: '/images/vikashsir.jpeg',
      description: 'Visionary leader with 20+ years in Madhuprabha Construction development.',
    },
    {
      name: 'Vikas Mishra',
      role: 'Project Manager',
      image: '/images/project_manager.jpeg',
      description: 'Award-winning architect specializing in sustainable design.',
    },

  ];

  const achievements = [
    'Best Real Estate Developer 2023',
    'Excellence in Design Award 2022',
    'Customer Satisfaction Award 2021',
    'Green Building Certification',
    'ISO 9001:2015 Certified',
    'RERA Registered Developer',
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Madhuprabha Construction</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building dreams, creating communities, and shaping the future of real estate for over two decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Madhu Prabha Constructions began its journey in 2005 as Ashish Construction,
                founded with a simple yet powerful vision: to build structures that not only
                meet but exceed expectations. Over the years, we have evolved from a small
                construction company to one of Maharashtra's most trusted construction partners.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                Our transformation to Madhu Prabha Constructions reflects our growth while maintaining
                the core values that have guided us from the beginning. We believe that construction is
                not just about building structures; it's about creating spaces where lives unfold, businesses
                thrive, and communities flourish.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                Today, with over 500 completed projects and more than 1000 satisfied clients, we continue
                to set new standards in construction excellence, always staying true to our founding principles
                of quality, integrity, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create exceptional real estate experiences that exceed customer expectations through innovative design, superior quality, and unparalleled service. We strive to build not just structures, but communities that enhance the quality of life for all our stakeholders.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most respected and trusted real estate developer in India, known for our commitment to quality, innovation, and customer satisfaction. We envision a future where every space we create contributes to sustainable urban development and enhanced living experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="py-20 bg-white justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leaders behind Elite Estates' success story
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and awards that validate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;