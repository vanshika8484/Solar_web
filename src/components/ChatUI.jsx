import React, { useEffect, useState } from "react";
import MessageBubble2 from "./MessageBubble2";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";

const conversationData = [
  { sender: "chacha", text: "DIVY believe in Solution Based Approach, Doing Common things, Uncommonly Well" },
  { sender: "roshni", text: "We don’t just install solar. We make it easy, accessible, trustworthy and a little magical." },
  { sender: "chacha", text: "Har ghar ko roshan karna hai. Yeh sirf kaam nahi, zimmedaari hai." },
  { sender: "roshni", text: "Aur Divy Solar ne yeh zimmedaari dil se nibhayi." },
];

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < conversationData.length) {
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, conversationData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 text-center">
        Our Philosophy
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-8">
        What makes DIVY Power different? It’s not just solar—it’s a responsibility we take to heart. <br />
        <strong>Let Solar Chacha & Roshni Didi explain.</strong>
      </p>

      <div className="w-full max-w-3xl bg-gray-900 rounded-2xl p-6 space-y-4 ">
        {messages.map((msg, i) => (
          <MessageBubble2
            key={i}
            sender={msg.sender}
            text={msg.text}
            avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
          />
        ))}
        {isTyping && currentIndex < conversationData.length && (
          <MessageBubble2
            sender={conversationData[currentIndex].sender}
            typing={true}
            avatar={
              conversationData[currentIndex].sender === "chacha"
                ? solarChachaImg
                : roshniDidiImg
            }
          />
        )}
      </div>
    </div>
  );
};

export default ChatUI;
