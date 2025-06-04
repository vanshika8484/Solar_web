import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaSolarPanel, FaCog, FaProjectDiagram, FaRecycle } from "react-icons/fa";
  import  { useState } from "react";
import Footer from "./Footer";

const services = [
  {
    icon: <FaTools className="text-4xl text-green-800" />,
    title: "Installation & Commissioning (INC)",
    description:
      "Divy Power handles the complete installation and commissioning of solar systems, generators, and other power equipment.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-green-800" />,
    title: "Engineering, Procurement, and Construction (EPC)",
    description:
      "They provide turnkey solutions for solar energy projects, including design, procurement of materials, and construction.",
  },
  {
    icon: <FaCog className="text-4xl text-green-800" />,
    title: "Operations & Maintenance (O&M)",
    description:
      "Provides ongoing maintenance to ensure optimal performance of solar panels, generators, and other systems.",
  },
  {
    icon: <FaRecycle className="text-4xl text-green-800" />,
    title: "Recycling & Sustainability",
    description:
      "Our eco-friendly approach ensures components are recycled and managed sustainably to reduce environmental impact.",
  },
  {
    icon: <FaSolarPanel className="text-4xl text-green-800" />,
    title: "Customized Solar Solutions",
    description:
      "Tailored solar panel setups to meet residential, commercial, and industrial needs for clean energy generation.",
  },
];

export default function Services() {




  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto GetFontSol">
      <motion.h2
        className="text-3xl sm:text-4xl mt-14 font-bold text-green-800 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-black">Our Green</span> Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#F7F6F0] p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col items-start space-y-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="bg-white p-4 rounded-full text-green-800">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <a href="#" className="flex items-center text-sm font-medium text-green-800 hover:underline">
              Read More <span className="ml-1">→</span>
            </a>
          </motion.div>
        ))}
      </div>

       
    <div className="bg-white min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       

        <main className="mt-12 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-shrink-0 w-full md:w-1/2 relative rounded-xl overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/72879928-05fb-48e0-317a-b955a67eef62.jpg"
              alt="Video preview"
              className="rounded-xl w-full h-auto"
            />
            <button
              aria-label="Play video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md"
            >
              <svg
                className="w-6 h-6 text-green-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 max-w-xl w-full">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Write Here Below?</h2>
            <p className="text-gray-700 mb-8">
              For your car we will do everything—advice, repairs and maintenance. Many car owners choose us for our experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="border border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-2xl py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none mb-6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-800 text-white rounded-full py-3 font-semibold hover:bg-green-700 transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </main>
      </div>
    </div>

    <Footer/>
    </section>
  );
}
