import React from "react";
import { motion } from "framer-motion";
import ElectricitySavedCard from "./ElectricitySavedCard";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SolarCostCalculator = () => {
  return (
    <motion.div
      className="bg-[#F8F7F0] min-h-screen GetFontSol px-4 md:px-10 lg:px-16 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // This triggers animation only when 30% is in view
      variants={containerVariants}
    >
      {/* Main Heading */}
      <motion.div
        className="text-center mb-10"
        variants={cardVariants}
      >
        <h1 className="text-2xl About sm:text-3xl md:text-2xl font-bold text-[#E50C0C] leading-snug max-w-5xl mx-auto">
          Aaj hi Solar Lagwao, environment bachao <br />
          aur agle 5 saal me 3 lakh se jyada apne electricity bills par bhi Bachao
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Info Card */}
        <motion.section className="bg-white rounded-xl px-6 py-8" variants={cardVariants}>
          <h2 className="text-2xl font-semibold text-[#1e1e1e] mb-4">Power Your Home With Solar</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Discover how affordable solar can be. Enter your details below to get your personalized cost estimate and start saving!
          </p>
          <ul className="list-disc list-inside text-blue-700 text-sm space-y-2 mb-6">
            <li>Reduce your carbon footprint</li>
            <li>Lock in energy savings</li>
            <li>Maximize your roof potential</li>
          </ul>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-3">
              <i className="fas fa-solar-panel text-green-800 text-2xl"></i>
              <div>
                <p className="text-blue-800 font-semibold text-lg">2500+</p>
                <p className="text-gray-600 text-sm">Systems Installed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-leaf text-green-800 text-2xl"></i>
              <div>
                <p className="text-blue-800 font-semibold text-lg">45%</p>
                <p className="text-gray-600 text-sm">Avg. Savings</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Calculator */}
        <motion.section className="bg-[#d9f0d6] rounded-xl px-6 py-8" variants={cardVariants}>
          <p className="text-green-800 text-xs uppercase tracking-widest mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-green-800 inline-block"></span>
            <span>About Calculator</span>
          </p>
          <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-6">Solar Cost Calculator</h3>
          <form className="space-y-4 text-sm text-gray-700">
            {[
              { id: 'monthly-bill', icon: 'fas fa-bolt', placeholder: 'Monthly Electricity Bill (₹)' },
              { id: 'roof-area', icon: 'fas fa-ruler-combined', placeholder: 'Roof Area (sq. ft.)' },
              { id: 'location', icon: 'fas fa-map-marker-alt', placeholder: 'Location / State' },
              { id: 'peak-sun-hours', icon: 'fas fa-sun', placeholder: 'Avg. Peak Sun Hours (hrs/day)' },
              { id: 'panel-efficiency', icon: 'fas fa-palette', placeholder: 'Panel Efficiency (%)' },
            ].map(({ id, icon, placeholder }) => (
              <div key={id}>
                <div className="flex items-center border border-blue-300 rounded-full px-4 py-2 bg-white hover:shadow-md transition">
                  <i className={`${icon} text-green-800 mr-3`}></i>
                  <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent"
                  />
                </div>
              </div>
            ))}
            <div>
              <select className="w-full border border-blue-300 rounded-full px-4 py-2 bg-white text-blue-800 font-semibold hover:shadow-md transition">
                <option disabled selected value="">Roof Type</option>
                <option value="flat">Flat</option>
                <option value="sloped">Sloped</option>
                <option value="metal">Metal</option>
              </select>
            </div>
            <div className="flex items-center text-green-700 text-sm">
              <input id="govt-subsidy" type="checkbox" className="w-4 h-4 text-green-800 border-green-800 rounded" />
              <label htmlFor="govt-subsidy" className="ml-2 cursor-pointer">Govt. Subsidy Eligible?</label>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-green-800 text-white font-bold rounded-full py-3 mt-4 hover:bg-green-700 transition"
            >
              Calculate Cost
            </motion.button>
          </form>
        </motion.section>

        {/* Electricity Saved Card */}
        <motion.section className="flex justify-center items-center" variants={cardVariants}>
          <ElectricitySavedCard />
        </motion.section>
      </div>
    </motion.div>
  );
};

export default SolarCostCalculator;
