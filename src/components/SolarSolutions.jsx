import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sol from "../Images/Sol.jpg";

const solutionData = [
  {
    title: "Homeowner Solutions",
    content: `
      We provide rooftop solar systems with battery backups designed to reduce your energy bills by up to 80%.
      Our package includes:
      • Free site survey & consultation  
      • Government subsidy assistance  
      • Net metering setup & documentation  
      • Long-term maintenance & monitoring support  
      This is your first step towards complete energy freedom at home.
    `,
  },
  {
    title: "Business Owner Solutions",
    content: `
      Tailored solar energy systems for SMEs, warehouses, and factories to cut operational costs significantly.
      Services include:
      • Custom system design for maximum ROI  
      • Hybrid or grid-tied solutions  
      • Load analysis & efficiency optimization  
      • 24/7 monitoring for energy performance  
      Boost your business efficiency with sustainable energy.
    `,
  },
  {
    title: "Utility-Scale Owner Solutions",
    content: `
      We provide EPC (Engineering, Procurement, and Construction) services for large solar farms.
      We ensure:
      • Complete grid compliance  
      • SCADA system integration  
      • Remote performance monitoring  
      • Operational & maintenance contracts  
      Ideal for large-scale power generation projects.
    `,
  },
  {
    title: "Smart String ESS Solutions",
    content: `
      Advanced Energy Storage Systems (ESS) designed for dynamic power backup and load balancing.
      Features include:
      • Intelligent battery management  
      • Peak shaving & demand response  
      • Seamless integration with solar arrays  
      • Remote control & diagnostics  
      Keep your operations running even during outages.
    `,
  },
  {
    title: "Smart Micro-grid Solutions",
    content: `
      AI-powered micro-grid solutions combining solar, ESS, and smart management software.
      Benefits include:
      • Decentralized energy distribution  
      • Grid independence for communities  
      • Real-time energy balancing  
      • Disaster-resilient power supply  
      Ideal for housing societies, campuses, and smart cities.
    `,
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
    <main className="bg-white text-black max-w-7xl mx-auto p-6 sm:p-10 -mt-16">
      {/* Top Section */}
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={Sol}
            alt="Solar energy panel"
            className="w-[400px] rounded-lg shadow-xl object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 w-full bg-[#f8f7f0] p-8 rounded-lg shadow-md"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-bold text-[26px] leading-[36px] mb-2 text-[#E50C0C] text-center lg:text-left">
            We don't believe in just installing Solar  
            <br />We Believe in Solving Problems
          </h1>

          <h2 className="text-green-700 font-semibold text-lg mb-3 text-center lg:text-left">
            We Engineer Smart Power Solutions.
          </h2>

          <p className="text-[15px] leading-[24px] text-gray-700 mb-6 font-medium text-center lg:text-left">
            At <strong>DIVY Power</strong>, we believe solar isn’t just a product — it’s your power freedom.  
            From site assessment to installation and lifelong support, we handle it all.
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start flex-wrap gap-12 mb-8">
            <div>
              <p className="font-semibold text-[24px] text-green-700">7,220 KWh</p>
              <p className="text-[12px] text-gray-600">Systems Installed</p>
            </div>
            <div>
              <p className="font-semibold text-[24px] text-green-700">15,818,000 KG</p>
              <p className="text-[12px] text-gray-600">CO₂ Saved / Year</p>
            </div>
          </div>

          {/* Dropdown List */}
          <div className="w-full space-y-3">
            {solutionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center px-5 py-3 text-[15px] font-semibold text-green-700 hover:bg-[#f0fdf4] transition-all duration-300"
                >
                  <span>{item.title}</span>
                  <motion.i
                    className={`fas fa-chevron-${openIndex === index ? "up" : "down"} text-sm`}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.i>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="px-5 pb-4 pt-2 text-[14px] text-gray-800 whitespace-pre-line"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
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
