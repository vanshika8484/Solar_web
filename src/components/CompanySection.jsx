import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa"; // Play icon

const CompanySection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const contentMap = {
    mission: {
      text: "At Divy Power Pvt. Ltd., our mission is to make clean, renewable energy accessible to everyone. We aim to lead the transition to a sustainable energy future through innovation, dedication, and long-term customer care.",
      img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
      note: "We are driven by purpose — to energize every corner sustainably.",
    },
    vision: {
      text: "We envision a future where every home and business uses clean solar energy to reduce environmental harm and improve quality of life. We’re committed to building that future with consistency and care.",
      img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
      note: "Our vision powers a cleaner tomorrow.",
    },
    why: {
      text: "At Divy Power Pvt. Ltd., we don’t just install solar systems — we build lasting energy partnerships. What truly sets us apart is our commitment to quality, accountability, and long-term service, ensuring that your journey into clean energy is smooth, secure, and truly impactful.",
      img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
      note: "We are trustworthy — we don’t disappear after installation.",
    },
  };

  const activeContent = contentMap[activeTab];

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      activeTab === tab
        ? "bg-green-700 text-white shadow"
        : "bg-white text-green-800 border border-green-600 hover:bg-green-100"
    }`;

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-10">
        Our <span className="text-black About">Company</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg"
            alt="Solar panels"
            className="rounded-2xl shadow-lg object-cover w-full max-h-[400px] sm:max-h-[480px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col ">
          <h3 className="text-2xl sm:text-3xl About text-black mb-6 text-center lg:text-left leading-snug">
            Produce Your Own <br />
            <span className="text-green-700 About">Clean Energy</span> <br />
            Save The Environment
          </h3>

          {/* Tabs */}
          <div className="flex About flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
            {["mission", "vision", "why"].map((key) => (
              <button
                key={key}
                className={tabStyle(key)}
                onClick={() => setActiveTab(key)}
              >
                {key === "mission"
                  ? "Our Mission"
                  : key === "vision"
                  ? "Our Vision"
                  : "Why Choose Us?"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p className="mb-6 About">{activeContent.text}</p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Small Image with Play Icon */}
                <div className="relative w-full sm:w-28 h-36   overflow-hidden">
                  
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <FaPlay className="text-green-600 text-xl sm:text-2xl" />
                  </div>
                </div>

                {/* Note */}
                <p className="About text-black text-sm sm:text-base">{activeContent.note}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
