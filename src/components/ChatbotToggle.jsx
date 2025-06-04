import React, { useState, useEffect } from "react";
import ChatbotPopup from "./ChatbotPopup";
import solarch from '../Images/chacha.png'
const messages = [
  "Kya aap jaante hai? Solar se kharcha nahi, paiso ki bachat hoti hai!",
  "Solar panels se 25 saal tak bijli ka bill lagbhag zero ho sakta hai.",
  "Har mahine ki bijli ki bachat se 5 saal me lagat nikal jaati hai.",
  "Solar se carbon footprint bhi kam hota hai – environment ke liye best!",
  "Surya se bijli – free mein bijli, savings ki guarantee!",
  "Solar chacha bolte hai: Bijli ke bill se chhutkaara paao!",
  "Bijli ka bill kam karo, solar panel lagwao!",
  "Government subsidy ke sath solar aur bhi sasta padta hai!",
  "Renewable energy future ka rasta hai – solar se shuruat karo!",
  "Apne chhat ka istemal karo – solar se kamao aur bachaao!",
];

const ChatbotToggle = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Rotate popup every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000); // Hide after 4s

      setCurrentMsgIndex((prevIndex) =>
        prevIndex + 1 < messages.length ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
  <>
    {/* Wrapper for Image and Popup side-by-side */}
    <div className="fixed bottom-4 right-1 flex items-center space-x-3 z-50">

     {showPopup && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-lg shadow-xl text-sm md:text-base font-semibold max-w-xs animate-float GetfontHomeChat">
          {messages[currentMsgIndex]}
        </div>
      )}
      {/* Toggle Button */}
      <button
        onClick={() => setChatbotOpen(true)}
        title="Chat with DealXpress Assistant"
      >
        <img src={solarch} className="w-16 h-16" />
      </button>

      {/* Rotating Educational Notification */}
     
    </div>

    {/* Chatbot Popup */}
    {chatbotOpen && <ChatbotPopup onClose={() => setChatbotOpen(false)} />}
  </>
);

};

export default ChatbotToggle;
