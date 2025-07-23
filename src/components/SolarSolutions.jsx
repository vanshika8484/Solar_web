import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sol from '../Images/Sol.jpg'

const solutionData = [
  {
    title: "Homeowner Solutions",
    content:
      "We provide rooftop solar systems with battery backups, designed to reduce your energy bills by up to 80%. Includes site survey, net metering, and government subsidy support.",
  },
  {
    title: "Business Owner Solutions",
    content:
      "Custom solar energy systems for SMEs, warehouses, and factories. Save on operating costs and gain energy independence with grid-tied or hybrid solar solutions.",
  },
  {
    title: "Utility-Scale Owner Solutions",
    content:
      "Engineering, procurement, and construction (EPC) of large solar farms for utility-scale production. We ensure grid compliance, SCADA, and remote performance monitoring.",
  },
  {
    title: "Smart String ESS Solutions",
    content:
      "Smart Energy Storage Systems (ESS) for dynamic power backup, load balancing, and energy arbitrage in commercial and residential environments.",
  },
  {
    title: "Smart Micro-grid Solutions",
    content:
      "Advanced micro-grids using solar + ESS + AI-based management for communities and smart cities, enabling decentralized energy distribution and grid independence.",
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

const SolarSolutions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className="bg-white text-black max-w-full mx-auto p-6 sm:p-10 About ml-4 mr-4 sm:ml-12 sm:mr-12 -mt-24" >
      {/* Top Section Animation */}
      <motion.section
        className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-9"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={Sol}
            alt="Solar energy panel"
            className="w-[400px] h-full rounded-lg object-cover shadow-xl"
            loading="lazy"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col justify-start bg-[#f8f7f0] p-10"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="font-semibold text-[26px] leading-[36px] mb-2 text-[#E50C0C]">
           We don't believe in just installing Solar
           <br/>
            We Believe in solving Problems

          </h1>

          <h2 className="text-green-700 font-semibold text-lg mb-3">
            We Engineer Smart Power Solutions.
          </h2>

          <p className="text-[15px] leading-[24px] text-gray-700 mb-6 font-medium">
            At <strong>DIVY Power</strong>, we believe solar isn’t just a product — it’s your power freedom. From site assessment to installation and support, we handle everything.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-20 gap-y-6 mb-10">
            <div>
              <p className="font-semibold text-[24px] text-green-700">7220 KWh</p>
              <p className="text-[12px] text-gray-600">Systems Installed</p>
            </div>
            <div>
              <p className="font-semibold text-[24px] text-green-700">15,818,000 KG</p>
              <p className="text-[12px] text-gray-600">CO₂ Saved / Year</p>
            </div>
          </div>

          {/* Dropdown List */}
          <div className="w-full space-y-3 select-none">
            {solutionData.map((item, index) => (
              <div key={index} className="bg-white rounded-md shadow border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center px-5 py-3 text-[15px] font-semibold text-green-700 hover:bg-[#f0fdf4] transition-all"
                >
                  <span>{item.title}</span>
                  <i
                    className={`fas fa-chevron-${openIndex === index ? "up" : "down"} text-sm ${
                      openIndex === index ? "text-green-700" : "text-gray-400"
                    }`}
                  ></i>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="dropdown"
                      className="px-5 pb-4 pt-2 text-[14px] text-gray-800"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.3 }}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default SolarSolutions;
