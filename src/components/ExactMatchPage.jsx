import React from "react";
import { motion } from "framer-motion";
import L1 from '../Images/L1.png';
import L2 from '../Images/L2.png';
import L3 from '../Images/L3.png';
import L4 from '../Images/L4.png';

const logos = [L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4,L1, L2, L3, L4];

export default function ExactMatchPage() {
  return (
    <div className="bg-[#f8f7f0] min-h-screen About1">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl mt-16 font-bold text-center pt-10 text-gray-800">
        Our Partners
      </h2>

      {/* Animated Logos */}
      <div className="overflow-hidden py-10 sm:py-16 -mt-8">
        <motion.div
          className="flex space-x-10 px-4 sm:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear"
          }}
        >
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-[100px] w-[120px] object-contain flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
