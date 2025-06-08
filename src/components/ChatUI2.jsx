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
    text: "Add trust badges – Govt. certified, 1000+ homes, 100+ commercial installs.",
  },
  {
    name: "",
    side: "left",
    img: solarg,
    text: "Humne 1000+ gharo mein roshni pahunchayi, bina kisi jhanjhat ke.",
  },
];

// Parent container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Each message animation
const chatVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ChatUI2 = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-10 px-4 sm:px-6 lg:px-8 GetfontHomeChat"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl GetfontHomeDash text-center text-gray-900 mb-10">
          Jahan Gyaan, Wahan Solar Chacha!
        </h2>

        {/* Reduced vertical space between messages */}
        <div className="flex flex-col gap-y-6 sm:gap-y-8">
          {chatMessages.map((msg, index) => (
            <motion.div
              key={index}
              variants={chatVariants}
              className={`flex flex-col items-${msg.side === "right" ? "end" : "start"} w-full`}
            >
              {/* Message Bubble */}
              <div
                className={`text-sm sm:text-base leading-relaxed font-medium px-5 py-4 rounded-lg shadow-md max-w-full sm:max-w-[70%] border ${
                  msg.side === "right"
                    ? "bg-orange-500 text-white border-orange-300"
                    : "bg-[#4aab3d] text-white border-green-200"
                }`}
              >
                {msg.text}
              </div>

              {/* Avatar & Name */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col items-center mt-2"
              >
                <img
                  src={msg.img}
                  alt={msg.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full"
                />
                <span className="text-sm sm:text-base GetfontHomeDash text-gray-800 mt-1">
                  {msg.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ChatUI2;
