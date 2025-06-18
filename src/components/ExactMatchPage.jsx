import React from "react";
import { motion } from "framer-motion";


const logos = [
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
  "https://storage.googleapis.com/a1aa/image/0c2d9c6c-93db-43f5-679f-98a58f414e1e.jpg",
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
  "https://storage.googleapis.com/a1aa/image/0c2d9c6c-93db-43f5-679f-98a58f414e1e.jpg",
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
  "https://storage.googleapis.com/a1aa/image/0c2d9c6c-93db-43f5-679f-98a58f414e1e.jpg",
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
  "https://storage.googleapis.com/a1aa/image/0c2d9c6c-93db-43f5-679f-98a58f414e1e.jpg",
  "https://storage.googleapis.com/a1aa/image/664085b2-b4f5-40c9-b93c-3269fe3795a1.jpg",
  "https://storage.googleapis.com/a1aa/image/a7f1bae9-a591-4ea3-d207-3f5f2a8ab579.jpg",
];

export default function ExactMatchPage() {
  return (
    <div className="bg-[#f8f7f0] min-h-screen GetFontSol">
      {/* Black horizontal bar */}
      <div className="w-full h-full " />

      {/* Animated Logos */}
      <div className="overflow-hidden max-h-[400px] py-10 sm:py-16 mt-8 sm:mt-14">
        <motion.div
          className="flex space-x-6 sm:space-x-10 px-4 sm:px-8"
          animate={{ x: ["0%", "0%"] }}
          transition={{}}
        >
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-8 sm:h-10 w-[100px] sm:w-[120px] object-contain flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>

      <div className="w-full h-full -mt-32" />

      {/* Animated Logos */}
      <div className="overflow-hidden py-10 sm:py-16  sm:mt-14">
        <motion.div
          className="flex space-x-6 sm:space-x-10 px-4 sm:px-8"
          animate={{ x: ["0%", "0%"] }}
          transition={{}}
        >
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-8 sm:h-10 w-[100px] sm:w-[120px] object-contain flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
