import React from "react";
import { motion } from "framer-motion";
import solarg from '../Images/chacha.png'
import didi from '../Images/didi.png'

const chatMessages = [
  {
    name: "",
    side: "right",
    img:didi,
    text: "Mera bijli ka bill iss baar bhi ₹3500 aa gaya",
  },
  {
    name: "",
    side: "left",
    img:solarg,
    text: "Arey beti... Solar Lagwao and ₹3500 mein poore mahine ka ghar ka kharcha chalao!",
  },
];

const chatVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ChatUI = () => {
  return (
    <div className="min-h-[300px] bg-white flex items-center justify-center px-4 py-6 sm:py-10">
  <div className="w-full max-w-4xl flex flex-col gap-y-6 sm:gap-y-10">
    {chatMessages.map((msg, index) => (
      <motion.div
        key={index}
        custom={index}
        variants={chatVariants}
        initial="hidden"
        animate="visible"
        className={`flex items-center    ${
          msg.side === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="text-center shrink-0">
          <img
            src={msg.img}
            alt={msg.name}
            className="w-16 h-16 sm:w-32 sm:h-32 object-contain"
          />
          <div className="text-sm font-semibold text-gray-800 mt-2">{msg.name}</div>
        </div>
        <div
          className={`text-[15px] sm:text-[16px] leading-relaxed font-medium px-4 py-3 sm:px-5 sm:py-4 rounded-xl max-w-[90%] sm:max-w-[70%] shadow-inner border ${
            msg.side === "right"
              ? "bg-orange-500 text-white border-orange-200"
              : "bg-[#4aab3d] text-gray-900 border-sky-200"
          }`}
        >
          {msg.text}
        </div>
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default ChatUI;
