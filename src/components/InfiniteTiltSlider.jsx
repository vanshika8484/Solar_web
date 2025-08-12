import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://source.unsplash.com/random/400x300?technology",
  "https://source.unsplash.com/random/400x300?dark",
  "https://source.unsplash.com/random/400x300?design",
  "https://source.unsplash.com/random/400x300?abstract",
  "https://source.unsplash.com/random/400x300?coding",
  "https://source.unsplash.com/random/400x300?art",
  "https://source.unsplash.com/random/400x300?space",
  "https://source.unsplash.com/random/400x300?data",
  "https://source.unsplash.com/random/400x300?innovation",
];

// Single column with infinite scroll
const Column = ({ direction = "down", speed = 20 }) => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      animate={{
        y: direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: speed,
      }}
    >
      {/* Duplicate image set for seamless loop */}
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="w-[250px] h-[100px] bg-gray-800 rounded-lg overflow-hidden shadow-md"
          style={{
            transform: "rotateX(8deg) rotateY(-8deg) skewX(-4deg)",
          }}
        >
          <img
            src={src}
            alt={`Image ${i + 1}`}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function InfiniteTiltSlider() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      {/* Fixed Box */}
      <div className="bg-neutral-900 rounded-xl shadow-xl p-4 overflow-hidden border border-gray-700 w-[820px] h-[650px]">
        {/* 3 columns with alternating directions */}
        <div className="grid grid-cols-3 gap-3">
          <Column direction="down" speed={150} />
          <Column direction="up" speed={150} />
          <Column direction="down" speed={150} />
        </div>
      </div>
    </div>
  );
}
