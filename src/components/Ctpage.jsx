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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-[#f8f7f0] text-white min-h-screen px-4 py-10 GetfontHomeDash -mt-36">
      {/* Consultation Banner */}
     

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto  text-center px-4">
        <p className="text-green-800 font-semibold mb-1 uppercase">Testimonials</p>
        <h3 className="text-2xl sm:text-3xl text-black font-bold mb-10">
          What Satisfied Customers Say
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-left"
            >
              <p className="text-gray-800 mb-4">"{t.feedback}"</p>
              <p className="font-semibold text-black">{t.name}</p>
              <p className="text-green-800 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
       <div className="max-w-5xl mx-auto bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
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
