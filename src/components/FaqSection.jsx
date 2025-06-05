import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Solar panel lagane ka fayda kya hai?",
    answer:
      "Are beta, bijli ka bill to ghatega hi, saath hi environment bhi clean rahega! 25 saal tak aaram se bijli milegi, aur paisa bhi bachega!",
  },
  {
    question: "Kitna kharcha aayega poore setup ka?",
    answer:
      "Yeh depend karta hai tere monthly bill aur roof area pe. Par chinta mat kar, subsidy bhi milti hai Sarkar se!",
  },
  {
    question: "Sarkari subsidy kaise milti hai?",
    answer:
      "Online apply karna hota hai ya approved vendor ke through kaam karwana hota hai. Hum help kar denge usme bhi, tu tension na le.",
  },
  {
    question: "Maintenance ka kya scene hai?",
    answer:
      "Bas hafte mein ek baar paani se dhona. Na koi fuel, na noise, bilkul shaant aur clean energy!",
  },
  {
    question: "Solar system ka lifespan kitna hota hai?",
    answer:
      "Beta, solar panels 25-30 saal tak chal jaate hain. Inverter ko 10 saal mein replace karna pad sakta hai.",
  },
  {
    question: "Bijli raat ko kaise milegi?",
    answer:
      "Battery backup ya grid connection ka jugad hota hai. Raat ko bhi light jalegi, chinta na kar!",
  },
  {
    question: "Ghar chhota hai, fir bhi laga sakte hain?",
    answer:
      "Bilkul! Chhoti space ke liye compact systems hote hain. Jitni chhat, utni bijli – simple logic!",
  },
  {
    question: "Solar lagwane mein kitna time lagta hai?",
    answer:
      "Paperwork aur installation mila ke 1-2 hafte lagte hain. Speed Chacha ki guarantee hai!",
  },
  {
    question: "Kya baarish ya aandhi mein solar kaam karega?",
    answer:
      "Haan ji! Cloudy weather mein thoda kam generate karega, lekin system damage nahi hota. Full safety proof!",
  },
  {
    question: "Solar se AC ya fridge bhi chalega kya?",
    answer:
      "Arre bilkul! Sahi capacity ka system ho to sab chalega – AC, fridge, washing machine, sab kuch!",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#031926] py-20 px-4 sm:px-8 lg:px-32 GetfontHomeDash">
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
            className="bg-[#052736] border border-[#0f3d4b] rounded-xl transition hover:shadow-lg"
          >
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-gray-100 font-medium text-base sm:text-lg">
                {faq.question}
              </span>
              <span className="text-gray-100">
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
                  className="overflow-hidden px-6 pb-5 text-gray-100 text-sm sm:text-base"
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
