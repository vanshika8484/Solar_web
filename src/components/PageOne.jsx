import React from "react";
import { motion } from "framer-motion";
import { AiOutlineSwap } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";

const features = [
  {
    icon: <AiOutlineSwap className="text-3xl text-green-800" />,
    title: "Renewable & Sustainable",
    description:
      "Solar energy is derived from the sun, a virtually unlimited source, making it one of the most sustainable energy options.",
  },
  {
    icon: <IoStatsChart className="text-3xl text-green-800" />,
    title: "Increased Property Value",
    description:
      "Installing solar panels can increase your property's value and attract eco-conscious buyers.",
  },
  {
    icon: <BsGlobe className="text-3xl text-green-800" />,
    title: "Government Incentives",
    description:
      "Enjoy benefits like tax credits, subsidies, and rebates when switching to solar energy.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.03 },
};

const PageOne = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#f8f7f0] py-16 px-6 max-w-5xl mx-auto GetFontSol"
    >
      <div className="text-center mb-12">
        <h2 className="text-green-800 font-bold uppercase text-lg mb-2">Why Go Solar?</h2>
        <h1 className="text-4xl font-semibold text-gray-900">
          Solar Energy Benefits You Can't Ignore
        </h1>
      </div>

      <div className="flex flex-col space-y-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start shadow-lg rounded-3xl p-6 cursor-pointer hover:shadow-2xl group"
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
            <div className="mr-6 mt-1">{feature.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PageOne;
