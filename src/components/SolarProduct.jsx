import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { GiSolarPower, GiLightningSpanner, GiGasPump } from "react-icons/gi";
import { Link } from "react-router-dom";

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
    features: ["Diesel/Petrol Genset"],
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
    <section className="bg-green-800 py-16 px-4 GetFontSol">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-800 text-xl font-bold uppercase tracking-widest">
            Our Product
          </p>
          <h2 className="text-2xl font-semibold text-gray-100 -mt-16">
            Harness The Power Of The Sun With Solar Energy!
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 ml-16 mr-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-[#0c093d] p-8 rounded-2xl shadow-md transform transition duration-300 hover:scale-[0.98] hover:bg-white hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-green-800 flex items-center justify-center mb-6 ">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100 group-hover:text-black transition-colors duration-300">
                {product.title}
              </h3>
              <ul className="space-y-2 text-sm mb-6">
                {product.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-300 group-hover:text-black transition-colors duration-300"
                  >
                    <FaCheckCircle className="text-green-800 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={"/LA"}
                className="mt-2 text-sm text-gray-300 group-hover:text-black font-semibold underline decoration-2 underline-offset-2 transition-colors duration-300 hover:text-green-700"
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
