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
    <div className="bg-white min-h-screen ">
      {/* Black horizontal bar */}
      <div className="w-full h-8 bg-black " />

      {/* Animated Logos */}
      <div className="overflow-hidden py-16 mt-14">
        <motion.div
          className="flex space-x-10 px-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-10 object-contain w-[120px] flex-shrink-0"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((src, idx) => (
            <img
              key={`dup-${idx}`}
              src={src}
              alt={`Logo duplicate ${idx}`}
              className="h-10 object-contain w-[120px] flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <section className="max-w-6xl mx-auto px-8 py-12 bg-[#fafaf2] rounded-xl flex flex-col sm:flex-row items-center gap-6">
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <img
            src="https://storage.googleapis.com/a1aa/image/7b3a6d02-f780-4d75-352b-f382cb430dec.jpg"
            alt="Newsletter Icon"
            className="w-16 h-16 flex-shrink-0"
          />
          <p className="text-lg font-normal leading-tight font-sans">
            Subscribe your E-mail for
            <br className="sm:hidden" />
            Newsletter
          </p>
        </div>
        <form
          className="flex flex-1 max-w-md w-full gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-grow rounded-full border border-gray-300 px-6 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 font-sans"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-3 flex items-center space-x-2 font-sans"
          >
            <span>Subscribe</span>
            <i className="fas fa-plus" />
          </button>
        </form>
      </section>
    </div>
  );
}
