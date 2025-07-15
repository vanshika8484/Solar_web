import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects, iconMap } from "./ProjectData"; // Importing categories and projects
import { useNavigate } from "react-router-dom";

export default function SolarPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // Filter projects based on selected category
  const filteredData =
    selectedCategory === "All"
      ? projects.slice(0, 4) // Limit to first 4 projects
      : projects.filter((item) => item.category === selectedCategory).slice(0, 4);

  const handleReadMore = () => {
    navigate('/ProjectDetails'); // Ensure this path matches your Route
  };

  return (
    <section className="w-full px-4 -mt-[450px] sm:px-8 py-16 bg-gradient-to-br from-[#f8f7f0] to-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="flex justify-center items-center gap-2 text-lg font-medium text-green-800 uppercase tracking-widest">
          <i className="fas fa-lightbulb" />
          Latest Portfolio
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gray-800 leading-tight">
          Embrace the Power of the Sun with <span className="text-green-700">Solar Energy</span>!
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 text-sm rounded-full font-semibold transition duration-300 ease-in-out ${
              selectedCategory === cat
                ? "bg-green-700 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-green-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <AnimatePresence mode="wait">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">
                  #{String(index + 1).padStart(2, "0")} - {item.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* Read More Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleReadMore}
          className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
        >
          Read More
        </button>
      </div>
    </section>
  );
}
