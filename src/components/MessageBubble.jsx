import React from "react";

const MessageBubble = ({ sender, text, typing }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`px-4 py-2 rounded-2xl text-white max-w-xs ${
          isUser ? "bg-yellow-600" : "bg-orange-500"
        }`}
      >
        {typing ? (
          <div className="flex space-x-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
