import React from 'react';
import { motion } from 'framer-motion';

const ContactCards = () => {
  return (
    <div className="bg-white p-6 min-h-[300px] flex items-center justify-center GetFontSol -mt-14">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row gap-6">
        {/* Call Card */}
        <motion.div
          className="relative flex-1 rounded-xl overflow-hidden min-h-[160px] bg-[#16151a] text-white flex items-center px-6 sm:px-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/a1aa/image/5db77e55-7c83-4e38-0659-a0e042ad4a70.jpg"
            alt="Call background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />
          <div className="relative flex items-center gap-6 w-full z-10">
            <div className="flex-shrink-0 rounded-full bg-[#1a191f] w-20 h-20 flex items-center justify-center">
              <i className="fas fa-phone-alt text-white text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-green-800 GetFontSol text-sm mb-1">
                Call Us For Service
              </span>
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight leading-tight">
                (+21) 25 256.21583
              </span>
              <span className="GetFontSol text-gray-400 text-sm md:text-base mt-1">
                Call 24/7 Anytime For Your Problem
              </span>
            </div>
          </div>
        </motion.div>

        {/* Mail Card */}
        <motion.div
          className="relative flex-1 rounded-xl overflow-hidden min-h-[160px] bg-green-800 text-white flex items-center px-6 sm:px-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/a1aa/image/ae3eebf4-48a4-4978-88cd-7569620b8f25.jpg"
            alt="Mail background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />
          <div className="relative flex items-center gap-6 w-full z-10">
            <div className="flex-shrink-0 rounded-full bg-white w-20 h-20 flex items-center justify-center">
              <i className="fas fa-envelope text-green-800 text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm mb-1">
                Mail Us Anytime
              </span>
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight leading-tight">
                Info@Drill24.Com
              </span>
              <span className="text-white text-sm md:text-base mt-1">
                Mail 24/7 Anytime For Your Problem
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCards;
