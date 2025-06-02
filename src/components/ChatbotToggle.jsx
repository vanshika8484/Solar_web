import React, { useState, useEffect } from "react";
import { RiRobotLine } from "react-icons/ri"; // Robot icon
import ChatbotPopup from "./ChatbotPopup";

const ChatbotToggle = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [showKyaPopup, setShowKyaPopup] = useState(false);

  // ⏰ Show "Kya aap jaante hai?" popup every 40s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowKyaPopup(true);
    }, 4000); // 40 seconds

    return () => clearInterval(interval);
  }, []);

  // Close message after 5s
  useEffect(() => {
    if (showKyaPopup) {
      const timeout = setTimeout(() => setShowKyaPopup(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [showKyaPopup]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setChatbotOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg"
        title="Chat with DealXpress Assistant"
      >
        <RiRobotLine className="w-6 h-6" />
      </button>

      {/* Chatbot Popup */}
      {chatbotOpen && <ChatbotPopup onClose={() => setChatbotOpen(false)} />}

      {/* Auto Pop-up every 40s */}
      {showKyaPopup && (
        <div className="fixed bottom-24 right-8 bg-white text-black px-4 py-2 rounded shadow-lg z-50 border border-gray-300">
          🤖 <strong>Kya aap jaante hai?</strong>
        </div>
      )}
    </>
  );
};

export default ChatbotToggle;
