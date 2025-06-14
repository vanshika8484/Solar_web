import React from "react";
import { motion } from "framer-motion";

const MessageBubble = ({ sender, text, typing, avatar }) => {
  const isChacha = sender === "chacha";
  const isRight = sender === "roshni"; // right align for Roshni Didi

  return (
    <motion.div
      className={`flex w-full mb-3 ${isRight ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isRight && avatar && (
        <img src={avatar} alt="avatar" className="w-10 h-10 mr-2 rounded-full object-cover" />
      )}
      <div className="relative max-w-[75%]">
        <div
          className={`px-4 py-3 rounded-2xl text-sm sm:text-base shadow-md whitespace-pre-line 
          ${isRight
              ? "bg-green-700 text-white rounded-br-none"
              : "bg-orange-500 text-white rounded-bl-none"
            }`}
        >
          {typing ? (
            <div className="flex flex-col">
              <p className="mb-1 text-xs italic text-white">
                {isRight ? "Roshni Didi is typing..." : "Solar Chacha is typing..."}
              </p>
              <div className="flex space-x-1 items-center h-5">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
              </div>
            </div>
          ) : (
            text
          )}
        </div>
        <div
          className={`absolute w-3 h-3 bg-inherit 
            ${isRight
              ? "bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-45"
              : "bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-45"
            }`}
        />
      </div>
      {isRight && avatar && (
        <img src={avatar} alt="avatar" className="w-10 h-10 ml-2 rounded-full object-cover" />
      )}
    </motion.div>
  );
};

export default MessageBubble;
