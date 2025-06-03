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
      <div className="w-full h-8 bg-black" />

      {/* Animated Logos */}
      <div className="overflow-hidden py-10 sm:py-16 mt-8 sm:mt-14">
        <motion.div
          className="flex space-x-6 sm:space-x-10 px-4 sm:px-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
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

      {/* Newsletter Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-12 rounded-xl flex flex-col md:flex-row items-center gap-6">
        {/* Left */}
        <div className="flex items-center space-x-4 flex-1 w-full">
          <img
            src="https://storage.googleapis.com/a1aa/image/7b3a6d02-f780-4d75-352b-f382cb430dec.jpg"
            alt="Newsletter Icon"
            className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0"
          />
          <p className="text-base sm:text-lg font-medium leading-tight">
            Subscribe your E-mail for
            <br className="sm:hidden" />
            Newsletter
          </p>
        </div>

        {/* Right */}
        <form
          className="flex flex-col sm:flex-row gap-4 w-full md:max-w-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:flex-grow rounded-full border border-gray-300 px-6 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-700 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-3 flex items-center justify-center space-x-2"
          >
            <span>Subscribe</span>
            <i className="fas fa-plus" />
          </button>
        </form>
      </section>
    </div>
  );
}
