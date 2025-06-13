import React, { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";

const conversationData = [
  { sender: "user", text: "Hi! Can you tell me what solar power is?" },
  { sender: "ai", text: "Sure! Solar power is energy from the sun that's converted into electricity." },
  { sender: "user", text: "Is it good for the environment?" },
  { sender: "ai", text: "Absolutely. It's clean, renewable, and helps reduce carbon emissions." },
  { sender: "user", text: "Can I install it at home?" },
  { sender: "ai", text: "Yes! With solar panels and inverters, you can generate power right at home." },
];

const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < conversationData.length) {
      setIsTyping(true);

      const typingTimeout = setTimeout(() => {
        setIsTyping(false);

        const showMessageTimeout = setTimeout(() => {
          setMessages((prev) => [...prev, conversationData[currentIndex]]);
          setCurrentIndex((prev) => prev + 1);
        }, 500); // Message appears after typing

        return () => clearTimeout(showMessageTimeout);
      }, 1000); // Typing duration

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Solar Power Chat</h1>
      <div className="w-full max-w-xl  rounded-2xl p-4 space-y-3 overflow-y-auto h-[500px]">
        {messages.map((msg, i) => (
          <MessageBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        {isTyping && currentIndex < conversationData.length && (
          <MessageBubble sender={conversationData[currentIndex].sender} typing={true} />
        )}
      </div>
    </div>
  );
};

export default Conversation;
