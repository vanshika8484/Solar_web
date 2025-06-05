import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  `cursor-pointer transition px-4 py-2 rounded-md text-sm font-medium ${
    activeTab === tab
      ? "bg-green-800 text-white shadow-md"
      : "bg-transparent text-black hover:text-green-800"
  }`;

  return (
    <section className="mt-32 GetFontSol">
      <h2 className="text-center GetFontSol text-3xl">
        Our <span className="text-green-800">Company</span>
      </h2>

      <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left image */}
        <div className="lg:w-1/2 ml-4">
        
          <img
            src="https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg"
            alt="Solar panels"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-4xl GetFontSol text-black leading-tight text-center lg:text-left">
            Produce Your Own<br />Clean<br />Save The Environment
          </h1>

          {/* Tabs */}
          <div className="flex items-center justify-center lg:justify-start space-x-8 mt-8 mb-6 text-sm font-semibold text-black">
            <span className={tabStyle("mission")} onClick={() => setActiveTab("mission")}>
              Our Mission
            </span>
            <span className={tabStyle("vision")} onClick={() => setActiveTab("vision")}>
              Our Vision
            </span>
            <span className={tabStyle("why")} onClick={() => setActiveTab("why")}>
              Why Choose Us?
            </span>
          </div>

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-600 text-sm max-w-xl mb-8">{activeContent.text}</p>

              <div className="flex items-center space-x-4 mb-10 max-w-xs">
                <img
                  src={activeContent.img}
                  alt="Content related visual"
                  className="rounded-xl object-cover w-30 h-36"
                />
                <p className="text-black text-sm leading-relaxed">{activeContent.note}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Play video button */}
          
        </div>
      </main>
    </section>
  );
};

export default CompanySection;
