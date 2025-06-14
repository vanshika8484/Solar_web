import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const portfolioData = [
  {
    id: 1,
    title: "Equality and Solidarity",
    image: "https://storage.googleapis.com/a1aa/image/efc5784c-5e54-4bed-188c-2f6fd3221084.jpg",
    category: "Eco Solar",
  },
  {
    id: 2,
    title: "Windward Renewables",
    image: "https://storage.googleapis.com/a1aa/image/790d5027-8e2b-42f0-6959-472c820ac383.jpg",
    category: "Power",
  },
  {
    id: 3,
    title: "Sun Breeze Power",
    image: "https://storage.googleapis.com/a1aa/image/04222cce-eb38-4286-09b7-7774a4ed0fca.jpg",
    category: "Solar Pro",
  },
  {
    id: 4,
    title: "Wind Whisper Energy",
    image: "https://storage.googleapis.com/a1aa/image/06883fd0-91cf-4b59-2abd-5331aff56ccf.jpg",
    category: "Energy",
  },
  
];

const categories = ["All", "Power", "Eco Solar", "Solar Pro", "Energy"];

export default function SolarPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#f8f7f0] lg:-mt-96 -mt-[600px] text-gray-900 min-h-screen px-4 py-10 GetFontDash">
      

      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2 text-xl  tracking-widest mb-2">
          <span className="text-green-800 text-lg">
            <i className="fas fa-lightbulb" />
          </span>
          <span className="font-bold text-green-800 ">LATEST PORTFOLIO</span>
        </div>
        <h1 className="text-3xl font-normal">
          Embrace The Power The Sun With Solar Energy{" "}
          <span className="font-bold">!</span>
        </h1>
      </div>

      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold min-w-[80px] ${
              selectedCategory === cat
                ? "bg-green-800 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

     <AnimatePresence mode="wait">
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {filteredData.map((item, index) => (
      <motion.article
        key={item.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        layout
        className="rounded-xl overflow-hidden shadow-sm border border-gray-200"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <div className="flex items-center bg-white border-t border-gray-200">
          <span className="text-xl font-mono font-semibold px-4 py-3 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-base font-normal leading-snug px-4 py-3">
            {item.title.split(" ").slice(0, 2).join(" ")}
            <br />
            {item.title.split(" ").slice(2).join(" ")}
          </p>
        </div>
      </motion.article>
    ))}
  </section>
</AnimatePresence>

    </div>
  );
}
