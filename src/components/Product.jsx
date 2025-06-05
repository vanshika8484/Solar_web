import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Product() {
  const solarData = [
    {
      title: "SOLAR PANEL",
      description:
        "Our solar panels efficiently convert sunlight into electricity, ensuring long-lasting performance and reduced environmental impact for homes, businesses, and industries.",
      icon: "https://divyby.redspace.in/assets/images/updated-images/img%203.png",
      image: "https://divyby.redspace.in/assets/images/updated-images/img%203.png",
      to: "/Solar-pannel",
    },
    {
      title: "SOLAR PUMP",
      description:
        "Divy Power’s solar pumps offer an efficient, eco-friendly solution for water needs in remote and rural areas—ideal for irrigation, water supply, and livestock, with low maintenance and long-lasting performance.",
      icon: "https://media.istockphoto.com/id/1458358486/photo/3d-rendering-of-water-pump-station-on-rooftop-factory-include-centrifugal-pump-electric-motor.jpg?b=1&s=612x612&w=0&k=20&c=naJgq6F77-J77u3AQzz2k64ZH1KRFq7jx-fPJHLJHjg=",
      image: "https://media.istockphoto.com/id/1458358486/photo/3d-rendering-of-water-pump-station-on-rooftop-factory-include-centrifugal-pump-electric-motor.jpg?b=1&s=612x612&w=0&k=20&c=naJgq6F77-J77u3AQzz2k64ZH1KRFq7jx-fPJHLJHjg=",
      to: "/Solar-Pump",
    },
    {
      title: "MICRO INVERTER",
      description:
        "Our compact, reliable micro inverters optimize solar performance by converting energy per panel, ensuring maximum output even with shading—ideal for homes and businesses seeking top solar returns.",
      icon: "https://divyby.redspace.in/assets/images/updated-images/Inverter%20img-min.jpg",
      image: "https://divyby.redspace.in/assets/images/updated-images/Inverter%20img-min.jpg",
      to: "/Micro-Inverter",
    },
  ];

  const saftyData = [
    {
      title: "Earthing",
      description: "Divy Power provides high-quality earthing solutions to protect against shocks, fires, and equipment damage—ensuring safety for homes, businesses, and industrial setups.",
      icon: "https://divyby.redspace.in/assets/images/updated-images/img%20earthing.png",
      image: "https://divyby.redspace.in/assets/images/updated-images/img%20earthing.png",
      to: "/Earthing",
    },
    {
      title: "Lightning Arrestor (LA)",
      description: "Our lightning arrestors provide strong protection by safely redirecting lightning strikes, ensuring your electrical systems and infrastructure stay secure from unpredictable hazards.",
      icon: "https://divyby.redspace.in/assets/images/updated-images/LA%201.jpg",
      image: "https://divyby.redspace.in/assets/images/updated-images/LA%201.jpg",
      to: "/LA",
    },
    
  ];

  const Genset = [
    {
      title: "Gas Genset",
      description: "Our gas-powered gensets deliver reliable, low-emission backup power using natural gas or LPG—ideal for homes and businesses seeking efficient, low-maintenance energy solutions.",
      icon: "https://divyby.redspace.in/assets/images/updated-images/gas%201.jpg",
      image: "https://divyby.redspace.in/assets/images/updated-images/gas%201.jpg",
      to: "/Gas-Genset",
    },
    {
      title: "Diesel/Petrol Genset",
      description: "Our diesel and petrol gensets provide reliable, high-performance power for homes, businesses, and remote sites—built for durability, efficiency, and dependable backup in any situation.",
      icon: "https://divyby.redspace.in/assets/images/updated-images/genset%201.jpg",
      image: "https://divyby.redspace.in/assets/images/updated-images/genset%201.jpg",
      to: "/Diesel/Petrol Genset",
    },
    
  ];

  return (
    <section className=" max-h-screen relative py-20 text-center bg-gradient-to-br from-green-50 to-white GetFontSol  m-16 ">
      <div className="absolute inset-0 opacity-5 bg-[url('https://example.com/your-background.svg')] bg-cover bg-center pointer-events-none" />

      <div className="relative z-10">
        <motion.h1
          className="text-4xl font-bold text-black mb-2 "
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         
         Our <span className='text-green-800'>Products</span>
        </motion.h1>
      </div>

      {/* Solar Solutions */}
      <motion.section className="py-20 px-6 text-white "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="max-w-7xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-green-800 font-bold">Solar Solutions</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solarData.map((item, index) => (
            <motion.div
              key={index}
              className=" text-black rounded-2xl overflow-hidden shadow-md flex flex-col"
              variants={cardVariants}
            >
              <img src={item.image} alt={item.title} className="h-70 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="bg-white p-2 inline-block rounded shadow w-10 h-10 mb-4">
                    <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
                <div className="mt-6">
                  <button className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition">
                    <Link to={item.to}>Read More</Link>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Safety Solutions */}
    {/* Safety Solutions */}
<motion.section className="bg-[#ffffffcd] py-20 px-6 text-white"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={containerVariants}
>
  <motion.div className="max-w-7xl mx-auto text-center mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl text-green-800 font-bold">Safety Solutions</h2>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 max-w-4xl mx-auto">
    {saftyData.map((item, index) => (
      <motion.div
        key={index}
        className="bg-white text-black rounded-2xl overflow-hidden shadow-md flex flex-col"
        variants={cardVariants}
      >
        <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="bg-white p-2 inline-block rounded shadow w-10 h-10 mb-4">
              <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
          <div className="mt-6">
            <button className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition">
              <Link to={item.to}>Read More</Link>
            </button>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>





<motion.section className="bg-white py-20 px-6 text-white"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={containerVariants}
>
  <motion.div className="max-w-7xl mx-auto text-center mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl text-black font-bold">Genset Solutions</h2>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 max-w-4xl mx-auto">
    {Genset.map((item, index) => (
      <motion.div
        key={index}
        className="bg-white text-black rounded-2xl overflow-hidden shadow-md flex flex-col"
        variants={cardVariants}
      >
        <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="bg-white p-2 inline-block rounded shadow w-10 h-10 mb-4">
              <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-900">{item.description}</p>
          </div>
          <div className="mt-6">
            <button className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition">
              <Link to={item.to}>Read More</Link>
            </button>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>




      <Footer />
    </section>
  );
}

export default Product;
