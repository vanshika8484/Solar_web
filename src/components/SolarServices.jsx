import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Installation & Commissioning',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
        <path d="M9.972 0a.5.5 0 0 0-.445.276L8.242 2.594l-1.354-.738-1.015.562 1.036 1.515-2.07 2.07a.5.5 0 0 0-.141.354v.928L.854 12.146a.5.5 0 1 0 .708.708l4.843-4.843h.928a.5.5 0 0 0 .354-.146l2.07-2.07 1.515 1.036.562-1.015-.738-1.354L13.724.473A.5.5 0 0 0 13.25 0h-3.278z"/>
      </svg>
    ),
  },
  {
    title: 'EPC (Engineering, Procurement & Construction)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
        <path d="M4 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v1.267A2 2 0 0 0 4 10v1H3a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4H5v-1a2 2 0 0 0-1-1.733V6h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
        <path d="M11 6h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Operations & Maintenance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
        <path d="M3.05 3.05a7 7 0 0 1 9.9 9.9.5.5 0 0 0 .707.707 8 8 0 1 0-11.314 0 .5.5 0 0 0 .707-.707z"/>
        <path d="M4.464 4.464a5 5 0 0 1 7.072 7.072.5.5 0 0 0 .707.707 6 6 0 1 0-8.486 0 .5.5 0 0 0 .707-.707z"/>
        <path d="M7.5 8a.5.5 0 0 1 .5-.5h.5V7a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1H9V9a.5.5 0 0 1-1 0v-.5h-.5a.5.5 0 0 1-.5-.5z"/>
      </svg>
    ),
  },
  {
    title: 'Energy Audit & Optimization',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
        <path d="M11.3 1a.5.5 0 0 1 .447.724L9.91 6H12.5a.5.5 0 0 1 .39.812l-6 7.5A.5.5 0 0 1 6.5 14v-5H3.5a.5.5 0 0 1-.445-.724l4.5-7.5A.5.5 0 0 1 8 0h3.3z"/>
      </svg>
    ),
  },
  {
    title: 'Inspection & Safety Compliance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
        <path d="M5.5 8.707l1.646 1.647a.5.5 0 0 0 .708 0L12.207 6.5a.5.5 0 1 0-.708-.708L7.5 9.793 6.207 8.5a.5.5 0 0 0-.707.707z"/>
        <path d="M8 0c-.176 0-.35.009-.522.026A7.005 7.005 0 0 0 1 7c0 5.25 4.239 8.017 6.842 8.91a.5.5 0 0 0 .316 0C10.761 15.017 15 12.25 15 7a7.005 7.005 0 0 0-6.478-6.974A7.25 7.25 0 0 0 8 0z"/>
      </svg>
    ),
  },
  {
    title: 'Consulting & Project Feasibility',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 0-2 2v9.793l2.853-2.854A.5.5 0 0 1 3.207 11H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1 },
  hover: { scale: 1.03 },
};

const SolarServices = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-12 px-6 bg-[#f8f7f0] GetFontSol"
    >
      <div className="text-center mb-12">
        <h2 className="text-green-800 font-bold uppercase text-lg mb-2">Our Services</h2>
        <h1 className="text-4xl font-semibold text-gray-900">Unlock the Potential of the Sun with Solar Energy</h1>
      </div>

      <div className="flex flex-col space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center shadow-lg rounded-3xl p-6 cursor-pointer hover:shadow-2xl group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-green-900 bg-transparent text-black font-bold flex items-center justify-center mr-6 text-xl select-none transition-colors duration-300 group-hover:bg-green-100">
              {index + 1}
            </div>
            <div className="text-green-800 mr-6">{service.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <a href="#" className="mt-2 text-green-800 text-sm font-medium hover:underline">Read More</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SolarServices;
