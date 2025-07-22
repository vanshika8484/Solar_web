import { motion, AnimatePresence } from "framer-motion";
import { categories, projects, iconMap } from "./ProjectData";

import { useState } from "react";


const SVGAccent = () => (
  <svg
    className="absolute top-2 right-2 w-16 h-16 text-gray-100 opacity-20 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
  </svg>
);

const SolarPortfolio = () => {
  const [active, setActive] = useState("All");


  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);



 
  return (
    <>
      <section className="min-h-screen px-4 py-10 bg-gradient-to-br from-white to-gray-100 shadow-lg GetFontSol md:px-12 lg:px-20 xl:px-32 2xl:px-52 -mt-[400px] ">
    

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-300 
              ${active === cat ? "bg-green-800 text-white" : "bg-gray-100 hover:bg-blue-100 text-gray-700"}`}
            >

              <span className="text-sm font-medium">{cat}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
          <AnimatePresence>
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-md border bg-white p-6 hover:shadow-xl"
              >
                <SVGAccent />
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                />
                <div className="flex items-center justify-between mb-3">
                  <div className="text-blue-500">{iconMap[project.category]}</div>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h2>
                {project.kwp !== "N/A" && (
                  <p className="text-sm text-gray-500"></p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
      </>
  )}
  export default SolarPortfolio
