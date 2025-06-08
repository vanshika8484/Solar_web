import React from "react";
import { motion } from "framer-motion";
import solarg from "../Images/chacha.png";
import didi from "../Images/didi.png";
import "./Home.css";

const chatMessages = [
  {
    name: "",
    side: "left",
    img: solarg,
    text: "Arey beti... Solar Lagwao and ₹3500 mein poore mahine ka ghar ka kharcha chalao!",
  },
  {
    name: "",
    side: "right",
    img: didi,
    text: "Mera bijli ka bill iss baar bhi ₹3500 aa gaya",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const chatVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const avatarVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ChatUI = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="GetfontHomeChat min-h-[300px] bg-white flex items-center justify-center px-4 py-6 sm:py-10"
    >
      <div className="w-full max-w-4xl flex flex-col gap-y-5">
        {chatMessages.map((msg, index) => (
          <motion.div
            key={index}
            variants={chatVariants}
            className={`flex flex-col items-${msg.side === "right" ? "end" : "start"} w-full`}
          >
            {/* Chat Bubble */}
            <div
              className={`text-[15px] sm:text-[16px] leading-relaxed font-medium px-4 py-3 sm:px-5 sm:py-4 rounded-xl max-w-[90%] sm:max-w-[70%] shadow-inner border ${
                msg.side === "right"
                  ? "bg-orange-500 text-white border-orange-200"
                  : "bg-[#4aab3d] text-gray-900 border-sky-200"
              }`}
            >
              {msg.text}
            </div>

            {/* Avatar */}
            <motion.div
              variants={avatarVariants}
              className="text-center mt-3"
            >
              <img
                src={msg.img}
                alt={msg.name}
                className="w-16 h-16 sm:w-32 sm:h-32 object-contain mx-auto"
              />
              <div className="text-sm font-semibold text-gray-800 mt-2">
                {msg.name}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChatUI;
