import React from "react";
import { motion } from "framer-motion";
import solarg from "../Images/chacha.png";
import didi from "../Images/didi.png";
import "./Home.css";

const chatMessages = [
  {
    name: "",
    side: "right",
    img: didi,
    text: "Mera bijli ka bill iss baar bhi ₹3500 aa gaya",
  },
  {
    name: "",
    side: "left",
    img: solarg,
    text: "Arey beti... Solar Lagwao and ₹3500 mein poore mahine ka ghar ka kharcha chalao!",
  },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.35,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const chatVariants = (side) => ({
  hidden: { opacity: 0, x: side === "right" ? 60 : -60, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const ChatUI = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="GetfontHomeChat min-h-[300px] bg-white flex items-center justify-center px-4 py-6 sm:py-10"
    >
      <div className="w-full max-w-4xl flex flex-col gap-y-10">
        {chatMessages.map((msg, index) => (
          <motion.div
            key={index}
            variants={chatVariants(msg.side)}
            className={`flex flex-col items-${msg.side === "right" ? "end" : "start"} w-full`}
          >
            {/* Chat Bubble */}
            <motion.div
              className={`text-[15px] sm:text-[16px] leading-relaxed font-medium px-4 py-3 sm:px-5 sm:py-4 rounded-xl max-w-[90%] sm:max-w-[70%] shadow-md border transition-transform ${
                msg.side === "right"
                  ? "bg-orange-500 text-white border-orange-200"
                  : "bg-[#4aab3d] text-gray-900 border-sky-200"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {msg.text}
            </motion.div>

            {/* Avatar */}
            <motion.div
              variants={avatarVariants}
              className="text-center mt-3"
              whileHover={{ y: -4 }}
            >
              <img
                src={msg.img}
                alt={msg.name}
                className="w-16 h-16 sm:w-28 sm:h-28 object-contain mx-auto rounded-full"
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
