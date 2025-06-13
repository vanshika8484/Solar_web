import React from "react";
import { motion } from "framer-motion";

const MessageBubble = ({ sender, text, typing }) => {
  const isUser = sender === "user";

  return (
    <motion.div
      className={`flex w-full mb-3 ${isUser ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative max-w-[75%]">
        <div
          className={`px-4 py-3 rounded-2xl text-sm sm:text-base shadow-md whitespace-pre-line 
            ${isUser
              ? "bg-green-700 text-white rounded-br-none"
              : "bg-orange-500 text-white rounded-bl-none"
            }`}
        >
          {typing ? (
            <div className="flex space-x-1 items-center h-5">
              <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
              <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
              <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
          ) : (
            text
          )}
        </div>

        {/* Bubble tail */}
        <div
          className={`absolute w-3 h-3 bg-inherit 
            ${isUser
              ? "bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-45"
              : "bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-45"
            }`}
        />
      </div>
    </motion.div>
  );
};

export default MessageBubble;
