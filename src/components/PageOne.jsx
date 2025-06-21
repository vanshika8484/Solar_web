import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { motion } from "framer-motion";



const features = [
  {
    icon: <AiOutlineSwap className="text-4xl text-green-800" />,
    title: "Free Consultation & Feasibility Check",
    description:
      "Solar energy is derived from the sun, a virtually unlimited source, making it one of the most sustainable energy options.",
  },
  {
    icon: <IoStatsChart className="text-4xl text-green-800" />,
    title: " Govt. Approved Installations with Subsidy Guidance",
    description:
      "Installing solar panels can increase your property's value and attract eco-conscious buyers.",
  },
  {
    icon: <BsGlobe className="text-4xl text-green-800" />,
    title: "High-Efficiency Panels with 25 Years Warranty",
    description:
      "Enjoy benefits like tax credits, subsidies, and rebates when switching to solar energy.",
  },
];

const PageOne = () => {
  return (
    
    <section className="py-12 px-4 bg-white">
  
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section>
        <motion.section
                className="mt-20 mr-10 ml-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
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
      </section>
    </section>
  );
};

export default PageOne;
