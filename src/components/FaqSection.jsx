import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: " What makes Divy Power different from other solar companies ?",
    answer:"We are an authorized partner of Tata Power Solar with over a decade of experience...",
  },
  {
    question: " Do you provide complete solar project solutions ?",
    answer:
      "Yes, from conceptual planning and feasibility studies to installation...!",
  },
  {
    question: "Sarkari subsidy kaise milti hai?",
    answer:
      "Online apply karna hota hai ya approved vendor ke through kaam karwana hota hai. Hum help kar denge usme bhi, tu tension na le.",
  },
  {
    question: "Can I get a customized solar solution for my home or business ?",
    answer:
      "Absolutely! We assess your energy needs, location, and budget...",
  },
  {
    question: " What is included in your AMC (Annual Maintenance Contract)?",
    answer:
      "Our AMC covers regular maintenance, system health checks...",
  },
  {
    question: "How safe are your solar systems?",
    answer:
      "Safety is our top priority. We include certified earthing systems...",
  },
  {
    question: "What is the lifespan of a solar panel system?",
    answer:
      " With proper maintenance, our high-quality solar panels can last 25 years or more...",
  },
  {
    question: "Do you provide gensets along with solar systems?",
    answer:
      "Yes, we offer both gas and diesel/petrol gensets...",
  },
  {
    question: "How long does it take to install a solar system?",
    answer:
      "Installation time depends on system size, but most residential projects...",
  },
  {
    question: "Do solar systems work during cloudy weather or at night?",
    answer:
      "Yes, though performance may reduce in cloudy conditions...!",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-green-900 py-20 px-4 sm:px-8 lg:px-32 GetfontHomeDash">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-2xl font-robotoslab font-bold text-white mb-4">
          OUR FAQ
        </h4>
        <h2 className="text-4xl font-robotoslab font-bold text-white mb-4">
          Chacha Ki Free Solar Salah
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Jo bhi confusion ho, Chacha sab samjhayenge!
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#dedede] border border-[#d6eaf0] rounded-xl transition hover:shadow-lg"
          >
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-gray-900 font-medium text-base sm:text-lg">
                {faq.question}
              </span>
              <span className="text-gray-900">
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-6 pb-5 text-gray-900 text-sm sm:text-base"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
