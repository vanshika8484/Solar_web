import React, { useState } from "react";

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
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
      <h4 className="text-2xl font-robotoslab font-bold text-green-500 mb-4">
         OUR FAQ
        </h4>
        <h2 className="text-4xl font-robotoslab font-bold text-gray-800 mb-4">
           Chacha Ki Free Solar Salah
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Jo bhi confusion ho, Chacha sab samjhayenge – ekdum desi style mein!
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md"
          >
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-gray-800 font-medium text-base sm:text-lg">
                {faq.question}
              </span>
              <span className="text-2xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
