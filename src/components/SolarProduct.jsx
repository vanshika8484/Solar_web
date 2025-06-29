import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { GiSolarPower, GiLightningSpanner, GiGasPump } from "react-icons/gi";
import { Link } from "react-router-dom";
import La from "./La";


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
    <section className="bg-white pt-4 px-6 md:px-10 lg:px-16 GetFontSol ">
      <div className="max-w-5xl mx-auto bg-green-800 rounded-xl shadow-lg ">
        <div className="text-center mb-12">
          <p className="text-white text-xl font-bold uppercase tracking-widest mb-2 pt-6">
            Our Product
          </p>
          <p className="text-4xl font-semibold text-white ">
            Harness The Power Of The Sun With Solar Energy!
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2  mx-4 justify-items-center gap-4" > 
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              //  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-2 w-full max-w-sm and mx-auto"  
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 mb-2 w-full max-w-sm mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-green-800 flex items-center justify-center mb-6">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {product.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className="text-green-800 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
  to={"/LA"}
  className="mt-2 text-sm text-black font-semibold underline decoration-2 underline-offset-2 hover:text-green-700"
>
  Read More →
</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProducts;
