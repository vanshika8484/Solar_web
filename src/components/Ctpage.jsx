import React from "react";
import { motion } from "framer-motion";

export default function Ctpage() {
  const testimonials = [
    {
      feedback:
        "I contacted a representative of Solar Energy, Mr. Jacob Johnson, in 2023. He and his team were great and installed the panel group for three weeks. Great product, great service.",
      name: "Martha Daniels",
      role: "Enthusiastic",
    },
    {
      feedback:
        "I highly recommend Solar Energy. Reliable and economical, with fast, professional service. The offers were explained clearly, and I received everything on time.",
      name: "Aaron Knauff",
      role: "Private",
    },
    {
      feedback:
        "I am very satisfied with Solar Energy. The installation was fast, the team professional, and I got a noticeable reduction in my energy bill.",
      name: "Curtis Brown",
      role: "Market",
    },
    {
      feedback:
        "Very satisfied with the performance. From requesting the quote to installation, everything was clear and professional. Highly recommended.",
      name: "Jack Black",
      role: "Private",
    },
  ];

  // Duplicate testimonials to make loop smooth
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-[#f8f7f0] text-white min-h-screen px-4 py-10 GetfontHomeDash -mt-36 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-4 mb-12">
        <p className="text-green-800 font-semibold mb-2 uppercase tracking-widest">
          Testimonials
        </p>
        <h3 className="text-2xl sm:text-3xl text-black font-bold">
          What Our Happy Customers Say
        </h3>
      </div>

      {/* Sliding Testimonials */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopTestimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-white p-6 rounded-2xl shadow-lg text-black"
            >
              <div className="flex mb-2 text-yellow-400 text-lg">
                {"⭐".repeat(5)}
              </div>
              <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-green-800 text-sm">{t.role}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
        <div className="text-center md:text-left">
          <p className="text-sm text-green-800 font-semibold uppercase">Call us now</p>
          <h2 className="text-xl font-bold">
            Free Consultation by <br />
            Calling <span className="text-green-800">+91 9310259325</span>
          </h2>
        </div>
        <div className="flex items-center w-full md:w-auto gap-2">
          <input
            type="text"
            placeholder="Enter your number"
            className="rounded-xl px-4 py-2 border border-gray-300 w-full md:w-64"
          />
          <button className="bg-green-800 text-white font-semibold px-4 py-2 rounded-xl hover:bg-green-700 transition">
            Call Me Back
          </button>
        </div>
      </div>
    </div>
  );
}
