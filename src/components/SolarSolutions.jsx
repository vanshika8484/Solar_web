import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SolarSolutions = () => {
  return (
    <main className="bg-[#f8f7f0] text-black max-w-[1500px] mx-auto p-6 sm:p-10 GetfontHomeDash -mt-10">
      {/* Top Section */}
      <motion.section
        className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:flex-1 max-w-[500px]">
          <img
            src="https://storage.googleapis.com/a1aa/image/e9519b91-9347-4552-5dab-d16eaf280dab.jpg
"
            alt="Solar energy panel"
            className="w-full h-auto rounded-lg object-cover shadow-lg"
            width="500"
            height="360"
            loading="lazy"
          />
        </div>
        <div className="lg:flex-1 flex flex-col justify-start">
          <h1 className="font-semibold text-[30px] leading-[38px] mb-3 text-[#1f2937]">
            All Your Energy Needs,<br /> Solved by Us
          </h1>
          <p className="text-[16px] leading-[24px] text-gray-700 mb-6 max-w-[420px] font-semibold">
            We offer five essential solar solutions tailored to your needs.
          </p>

          <div className="flex flex-wrap gap-x-20 gap-y-6 mb-10 max-w-[420px]">
            <div>
              <p className="font-semibold text-[24px] text-green-700">7220KWh</p>
              <p className="text-[12px] text-gray-600"> systems are total added  
</p>
            </div>
            <div>
              <p className="font-semibold text-[24px] text-green-700">15818000 KG </p>
              <p className="text-[12px] text-gray-600">Per year <br/> CO2 reduction </p>
            </div>
          </div>

          {/* Solutions List */}
          <div className="w-full max-w-[420px] space-y-[6px] select-none">
            {[
              "Homeowner Solutions",
              "Business Owner Solutions",
              "Utility-Scale Owner Solutions",
              "Smart String ESS Solutions",
              "Smart Micro-grid Solutions",
            ].map((solution, index) => (
              <button
                key={solution}
                aria-expanded={index === 0}
                className={`w-full flex justify-between items-center bg-white shadow-md rounded-md px-5 py-3 text-[15px] border border-gray-200 hover:bg-[#f0fdf4] transition-all ${
                  index === 0 ? "font-semibold text-green-700" : "font-semibold"
                }`}
              >
                <span>{solution}</span>
                <i
                  className={`fas fa-arrow-up-right text-lg ${
                    index === 0 ? "text-green-700]" : "text-gray-300"
                  }`}
                ></i>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bottom Section */}
      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        
        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            ["fas fa-shield-alt", "Turnkey Solutions", "Warranty Assurance"],
            ["fas fa-star", "Certified Partners", "Solar Specialists"],
            ["fas fa-hand-holding-usd", "Flexible", "Financing Options"],
            ["fas fa-headphones-alt", "24/7 Support", "Any time of the day"],
            ["fas fa-lightbulb", "End-to-End Guidance", "Efficient solar solution"],
          ].map(([icon, title, subtitle], i) => (
            <motion.div
              key={title}
              className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <i className={`${icon} text-green-700 text-4xl mb-4`}></i>
              <p className="font-semibold text-[14px] mb-1 text-[#1f2937]">{title}</p>
              <p className="text-[12px] text-gray-600 font-semibold">{subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default SolarSolutions;
