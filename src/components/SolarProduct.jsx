import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { GiSolarPower, GiLightningSpanner, GiGasPump } from "react-icons/gi";

const products = [
  {
    title: "Solar Solutions",
    icon: <GiSolarPower className="text-white text-3xl" />,
    features: ["Solar Panel", "Solar Pump", "Micro Inverter"],
  },
  {
    title: "Safety Solution",
    icon: <GiLightningSpanner className="text-white text-3xl" />,
    features: ["Earthing", "Lightning Arrester (LA)"],
  },
  {
    title: "Genset Solutions",
    icon: <GiGasPump className="text-white text-3xl" />,
    features: ["Gas Genset", "Diesel/Petrol Genset"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const SolarProducts = () => {
  return (
    <section className="bg-[#f6f5ef] py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-600 text-xl font-bold uppercase tracking-widest">
            Our Product
          </p>
          <h2 className="text-4xl font-semibold text-gray-900 mt-2">
            Harness The Power Of The Sun With Solar Energy!
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-6">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {product.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-sm text-black font-semibold underline decoration-2 underline-offset-2 hover:text-green-700"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProducts;
