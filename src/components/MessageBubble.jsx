import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const MessageBubble = ({ sender, text, typing }) => {
  const isUser = sender === "user";

  const icon = isUser ? "🧑‍🌾" : "🤖";

  return (
    <motion.div
      className={`flex w-full items-end ${isUser ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {!isUser && (
        <div className="mr-2 text-xl">{icon}</div>
      )}
      <div
        className={`
          relative px-4 py-2 max-w-[70%] rounded-2xl shadow
          ${isUser ? "bg-green-800 text-gray-100 rounded-br-none" : "bg-orange-500 text-gray-100 rounded-bl-none"}
        `}
      >
        {typing ? (
          <span className="flex items-center space-x-2 animate-pulse">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Typing...</span>
          </span>
        ) : (
          text
        )}
        {/* Tail */}
        <div
          className={`
            absolute w-3 h-3 bg-inherit 
            ${isUser ? "right-0 bottom-0 transform translate-x-1/2 rotate-45" : "left-0 bottom-0 transform -translate-x-1/2 rotate-45"}
          `}
        />
      </div>
      {isUser && (
        <div className="ml-2 text-xl">{icon}</div>
      )}
    </motion.div>
  );
};

export default MessageBubble;
