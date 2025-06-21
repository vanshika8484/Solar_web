import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SolarSolutions = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <main className="bg-[#f8f7f0] text-black max-w-[1500px] mx-auto p-6 sm:p-10 GetfontHomeDash -mt-10 ml-4 mr-4 sm:ml-12 sm:mr-12">
      {/* Top Section */}
      <motion.section
        className="flex flex-col lg:flex-row items-center lg:items-start gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Image (Smaller & Aligned) */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/e9519b91-9347-4552-5dab-d16eaf280dab.jpg"
            alt="Solar energy panel"
            className="w-[400px] h-[400px] rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start">
          <h1 className="font-semibold text-[26px] leading-[36px] mb-2 text-[#1f2937]">
            We’re not here to just install panels.
            <br />
            We’re here to solve your problems.
          </h1>

          <h2 className="text-green-700 font-semibold text-lg mb-3">
            We Don’t Just Sell Solar. We Engineer Smart Power Solutions.
          </h2>

          <p className="text-[15px] leading-[24px] text-gray-700 mb-6 font-medium">
            At DIVY Power, we believe solar isn’t just a product, it’s your power freedom.
            <br />
            From site assessment to installation and support, we handle everything.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-20 gap-y-6 mb-10">
            <div>
              <p className="font-semibold text-[24px] text-green-700">7220KWh</p>
              <p className="text-[12px] text-gray-600">systems are total added</p>
            </div>
            <div>
              <p className="font-semibold text-[24px] text-green-700">15818000 KG</p>
              <p className="text-[12px] text-gray-600">Per year <br /> CO2 reduction</p>
            </div>
          </div>

          {/* Dropdown Section */}
          <div className="w-full space-y-2 select-none">
            <div className="bg-white shadow-md rounded-md border border-gray-200 overflow-hidden">
              <button
                onClick={toggleDropdown}
                className="w-full flex justify-between items-center px-5 py-3 text-[15px] font-semibold text-green-700 hover:bg-[#f0fdf4] transition-all"
              >
                <span>Homeowner Solutions</span>
                <i
                  className={`fas fa-chevron-${isDropdownOpen ? "up" : "down"} text-sm ${
                    isDropdownOpen ? "text-green-700" : "text-gray-400"
                  }`}
                ></i>
              </button>

              {/* Animated Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="px-5 pb-4 pt-2 text-[14px] text-gray-800 space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="hover:text-green-700 cursor-pointer">
                      • Business Owner Solutions
                    </p>
                    <p className="hover:text-green-700 cursor-pointer">
                      • Utility-Scale Owner Solutions
                    </p>
                    <p className="hover:text-green-700 cursor-pointer">
                      • Smart String ESS Solutions
                    </p>
                    <p className="hover:text-green-700 cursor-pointer">
                      • Smart Micro-grid Solutions
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bottom Features Section */}
      
    </main>
  );
};

export default SolarSolutions;
