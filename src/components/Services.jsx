import React, { useState } from "react";
import { motion } from "framer-motion";
import solar from '../Images/Solar3.jpg'
import {
  FaTools,
  FaSolarPanel,
  FaCog,
  FaProjectDiagram,
  FaRecycle,
} from "react-icons/fa";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const services = [
  {
    icon: <FaTools className="text-4xl text-green-800" />,
    title: "Installation & Commissioning (INC)",
    description:
      "Divy Power handles the complete installation and commissioning of solar systems, generators, and other power equipment.",
    path: "/Installation_&_Commissioning_(INC)",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-green-800" />,
    title: "Engineering, Procurement, and Construction (EPC)",
    description:
      "They provide turnkey solutions for solar energy projects, including design, procurement of materials, and construction.",
    path: "/Engineering_Procurement_and_Construction_(EPC)",
  },
  {
    icon: <FaCog className="text-4xl text-green-800" />,
    title: "Operations & Maintenance (O&M)",
    description:
      "Provides ongoing maintenance to ensure optimal performance of solar panels, generators, and other systems.",
    path: "/Operations_&_Maintenance_(O&M)",
  },
  {
    icon: <FaRecycle className="text-4xl text-green-800" />,
    title: "Recycling & Sustainability",
    description:
      "Our eco-friendly approach ensures components are recycled and managed sustainably to reduce environmental impact.",
    path: "/Recycling_&_Sustainability",
  },
  {
    icon: <FaSolarPanel className="text-4xl text-green-800" />,
    title: "Customized Solar Solutions",
    description:
      "Tailored solar panel setups to meet residential, commercial, and industrial needs for clean energy generation.",
    path: "/Customized_Solar_Solutions",
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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all fields", { autoClose: 3000 });
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        "https://solar-4-8a9b.onrender.com/api/contact",
        {
          name,
          email,
          phoneNo: phone,
          message,
        }
      );
      toast.success("Message sent successfully!", { autoClose: 3000 });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Try again.", { autoClose: 3000 });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 max-w-7xl mx-auto GetFontSol ">
      <motion.h2
        className="text-3xl sm:text-4xl mt-14 font-bold text-green-800 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-black">Our Green</span> Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-12 xl:px-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group bg-[#F7F6F0] p-6 sm:p-8 rounded-2xl shadow-md hover:bg-white hover:shadow-xl transition duration-300 flex flex-col items-start space-y-4 sm:space-y-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="bg-white p-4 rounded-full text-green-800">
              {service.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <Link
              to={service.path}
              className="flex items-center text-sm font-medium text-green-800 hover:underline"
            >
              Read More <span className="ml-1">→</span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-br from-white to-gray-100 w-full px-4 py-12 sm:px-6 lg:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <main className="mt-12 flex flex-col md:flex-row gap-12 items-start">
            {/* Left Image Block */}
            <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden mt-20">
              <img
                src={solar}
                alt="Video preview"
                className="rounded-xl w-full h-auto"
              />

            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Write Here Below?
              </h2>
              <p className="text-gray-700 mb-8">
                For your car we will do everything—advice, repairs and
                maintenance. Many car owners choose us for our experience.
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
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="border w-full border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none mb-6"
                value={formData.phone}
                onChange={handleChange}
              />

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
                disabled={loading}
                className={`w-full text-white rounded-full py-3 font-semibold transition ${loading
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-800 hover:bg-green-700"
                  }`}
              >
                {loading ? "Submitting..." : "SUBMIT NOW"}
              </button>
            </form>
          </main>
        </div>
      </div>




      <Footer />
    </section>
  );
}
