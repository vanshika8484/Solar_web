import React, { useEffect, useState } from "react";
import MessageBubble1 from "./MessageBubble1";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";

const conversationData = [
  { sender: "roshni", text: "Wo sab to theek hai Chacha, par DIVY se hi solar kyu lagwae? Or bhi to companies hai jo solar laga rahi hai." },
  { sender: "chacha", text: "Kyuki Beti, You Deserve a Brand that Cares." },
  { sender: "chacha", text: "DIVY Power MNRE-approved hai." },
  { sender: "chacha", text: "Yeh company 25+ saalon se Energy Business mein hai." },
  { sender: "chacha", text: "Aur sabse zaruri baat, yeh installation ke baad gaayab nahi ho jaate." },
  { sender: "chacha", text: "Yeh Government ke Net Zero Village Project jaise Kumheera mein bhi kaam kar rahe hain. Saath hi kai Sarkari initiatives ke partner bhi hain." },
  { sender: "roshni", text: "Abhi bhi bharosa karna mushkil hai chacha..." },
  { sender: "chacha", text: "Arrey beti, lo suno inke Customers kya kehte hai!" },
];

const ChatUI1 = () => {
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
        Problem + Solution
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-8">
        Still Paying for Electricity? That’s Like Paying Rent for the Sun. <br />
        <strong>Let Solar Chacha & Roshni Didi explain why switch to solar</strong>
      </p>

      {/* Chat Section - No Scroll, Auto Height, No Shadow */}
      <div className="w-full max-w-3xl bg-gray-100 rounded-2xl p-6 space-y-4 h-auto">
        {messages.map((msg, i) => (
          <MessageBubble1
            key={i}
            sender={msg.sender}
            text={msg.text}
            avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
          />
        ))}
        {isTyping && currentIndex < conversationData.length && (
          <MessageBubble1
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

      {/* Stories of Change Section */}
      {currentIndex >= conversationData.length && (
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
            Stories of Change We’re Proud of
          </h2>
          <p className="text-gray-600 mb-6 px-4">
            Our clients believed in us — and so can you. See how solar changed their lives.
          </p>

          <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Customer Story"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          <p className="mt-6 text-lg font-semibold text-orange-600">
            Aap kis cheez ka intezaar kar rahe hai? Aaj hi contact karein DIVY Power ko – Trust bhi, Bachat bhi.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatUI1;
