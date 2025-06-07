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

const chatVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ChatUI2 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 GetfontHomeChat">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl GetfontHomeDash text-center text-gray-900 mb-12">
          Jahan Gyaan, Wahan Solar Chacha!
        </h2>

        <div className="flex flex-col gap-y-10">
          {chatMessages.map((msg, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={chatVariants}
              initial="hidden"
              animate="visible"
              className={`flex flex-col items-${msg.side === "right" ? "end" : "start"} w-full`}
            >
              {/* Message Bubble */}
              <div
                className={`text-sm sm:text-base leading-relaxed font-medium px-5 py-4 rounded-lg shadow-md max-w-full sm:max-w-[70%] border ${
                  msg.side === "right"
                    ? "bg-orange-500 text-white border-orange-300"
                    : "bg-green-600 text-white border-green-200"
                }`}
              >
                {msg.text}
              </div>

              {/* Avatar & Name below bubble */}
              <div className="flex flex-col items-center mt-3">
                <img
                  src={msg.img}
                  alt={msg.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full"
                />
                <span className="text-sm sm:text-base GetfontHomeDash text-gray-800 mt-2">
                  {msg.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatUI2;
