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
    text: `Divy solar se apne ghar ko do Roshni, bills ko karo goodbye.\nDivy Solar – Safe, Save and Shine Forever\nWith Divy Solar:\n• Govt. Certified\n• 25-Year Warranty\n• EMI Options\n• On-Call Support`,
  },
  {
    name: "",
    side: "left",
    img: solarg,
    text: `Local jugad se sasti bijli nahi milti, sirf stress milta hai\n• No Earthing = Fire Risk\n• Wrong Panel = No Output\n• No App = No Monitoring`,
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

const ChatUI1 = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="GetfontHomeChat min-h-[300px] bg-[#f8f7f0] mt-6 flex items-center justify-center px-4 py-6 sm:py-10"
    >
      <div className="w-full max-w-4xl flex flex-col gap-y-8 sm:gap-y-10">
        {chatMessages.map((msg, index) => (
          <motion.div
            key={index}
            variants={chatVariants}
            className={`flex flex-col items-${msg.side === "right" ? "end" : "start"} w-full`}
          >
            {/* Message Bubble */}
            <div
              className={`whitespace-pre-line text-[15px] sm:text-[16px] leading-relaxed font-medium px-4 py-3 sm:px-5 sm:py-4 rounded-xl max-w-[90%] sm:max-w-[70%] shadow-inner border GetfontHomeDash ${
                msg.side === "right"
                  ? "bg-orange-500 text-white border-orange-200"
                  : "bg-[#4aab3d] text-white border-green-300"
              }`}
            >
              {msg.text}
            </div>

            {/* Character Image Below Message */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
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

export default ChatUI1;
