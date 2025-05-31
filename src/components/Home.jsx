import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Sun } from "lucide-react";
import solar from '../Images/solar.jpg'
import solarch from '../Images/chacha.png'
import ChatUI from "./ChatUI";

const Dashboard = lazy(() => import("./Dashboard"));
import { useState } from "react";
import StatsSection from "./StatsSection";
import ChartCard from "./ChartCard";
import SolarCarousel from "./SolarCarousel";
import SolarServices from "./SolarServices";
import SolarProduct from "./SolarProduct";
import SolarCostCalculator from "./SolarCostCalculator";
import FaqSection from "./FaqSection";
import SolarPortfolio from "./SolarPortfolio";
import CustomerCarousel from "./CustomerCarousel";
import ExactMatchPage from "./ExactMatchPage";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import bg from '../Images/bg1.jpg'



  

function Home() {
const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const accordionData = [
  {
    title: "What is Solar Energy?",
    content:
      "Solar energy is the energy derived from the sun’s radiation. It is a clean, renewable source of energy that can be harnessed using solar panels to generate electricity or heat.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How Do Solar Panels Work?",
    content:
      "Solar panels convert sunlight directly into electricity using photovoltaic cells. When sunlight hits these cells, it creates an electric current that can be used to power homes and businesses.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Benefits of Solar Energy",
    content:
      "Solar energy reduces electricity bills, lowers carbon footprint, and requires minimal maintenance. It’s sustainable and helps in energy independence.",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
  },
];
    
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for children elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 8px 15px rgba(34, 197, 94, 0.6)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="pt-7 relative overflow-hidden">
      <motion.section
        className="bg-gradient-to-br from-white via-gray-50 to-white min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 font-sans"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-3xl w-full text-center"
          variants={itemVariants}
        >
          {/* Badge */}
          <motion.span
            className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-5"
            variants={itemVariants}
          >
            Trusted by 23K+ users
          </motion.span>

          {/* Avatar Group */}
          <motion.div
            className="flex justify-center items-center space-x-4 mb-6"
            variants={itemVariants}
          >
            <img
              src="https://storage.googleapis.com/a1aa/image/4ad767a4-1ab5-47ea-69e8-87c9da967695.jpg"
              alt="User 1"
              className="rounded-full w-14 h-14 object-cover shadow"
            />
            <div className="rounded-full w-20 h-20 p-1 bg-gray-300 flex items-center justify-center shadow">
              <img
                src="https://storage.googleapis.com/a1aa/image/d0d47f12-4a07-4b10-c5f3-95839086ecba.jpg"
                alt="User 2"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <img
              src="https://storage.googleapis.com/a1aa/image/2a8648ad-ee33-4b97-bf7e-89ed3c278848.jpg"
              alt="User 3"
              className="rounded-full w-14 h-14 object-cover shadow"
            />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-green-600 font-semibold text-lg mb-4"
            variants={itemVariants}
          >
            Tired of high electricity bills?
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="mb-8 font-extrabold tracking-tight drop-shadow-md text-center"
            variants={itemVariants}
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-900 to-green-900 leading-snug">
              Go Solar, Save More:
            </div>
            <div className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-500 to-gray-500 mt-4 mb-4">
              Clean and Renewable Energy
            </div>
            <div className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-900 to-green-900">
              for a Brighter Tomorrow
            </div>
          </motion.h1>

          {/* Separator */}
          <motion.div
            className="h-1.5 w-24 mx-auto mb-10 bg-green-800 rounded-full shadow-md"
            variants={itemVariants}
          ></motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-12 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Go solar today and enjoy clean, renewable energy for a sustainable
            tomorrow. Save on bills, reduce your carbon footprint, and power
            your home the smart way.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={itemVariants}
          >
            <motion.button
              type="button"
              className="group bg-green-800 hover:bg-green-700 text-white font-semibold rounded-full px-7 py-3 text-lg inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Get Solar Estimate
              <motion.span
                className="inline-block"
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>

            {/* Circular Badge under button */}
            <motion.div
              className="w-24 h-24 sm:w-28 sm:h-28 bg-green-800 text-white flex items-center justify-center rounded-full shadow-xl text-center text-xs sm:text-sm font-semibold leading-tight p-2 sm:p-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              <div>
                <span className="text-lg sm:text-xl font-bold block">2 Lakh+</span>
                Customers <br /> Powered
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

   <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
      <ChatUI/>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-white to-green-50 gap-10">
      <motion.div
        className="md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Sun className="text-green-600 w-8 h-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Is Solar?
          </h2>
        </div>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Solar refers to anything related to the sun. In the context of energy and technology, solar usually means using the sun’s light and heat to generate electricity or power systems. It’s renewable, safe, and cost-effective in the long run. With solar, you’re not just saving money, you’re also saving the Earth.
        </p>
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-all">
          Read More +
        </button>
      </motion.div>

      <motion.div
        className="md:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
       <div className="w-full h-72 md:h-96 bg-green-800 rounded-xl overflow-hidden shadow-lg">
          <img
            src={solar}
            alt="Solar Panel Field"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>

    <section className="bg-white">
  <div className="max-w-6xl mx-auto px-6 py-12">
    <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
      About Solar Energy
    </h1>
    <p className="text-center max-w-3xl mx-auto mb-12 text-green-800 text-lg">
      Learn about the power of solar energy, how solar panels work, and the
      many benefits this renewable energy source offers for a sustainable
      future.
    </p>

    <div className="space-y-8">
      {accordionData.map(({ title, content, img }, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-green-500"
        >
          <button
            className="w-full px-6 py-4 flex justify-between items-center text-left text-orange-400 font-semibold text-xl focus:outline-none focus:ring-2 focus:text-green-800"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            {title}
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-6 pb-6 pt-2 text-green-800 flex flex-col md:flex-row items-center gap-6">
              <p className="md:w-2/3">{content}</p>
              <img
                src={img}
                alt={title}
                className="md:w-1/3 rounded-lg shadow-lg object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
<section>
    <StatsSection/>
</section>
<section>
  <ChartCard/>
  <SolarCarousel/>
  
</section>
<section>
   <section className="bg-[#fdfbf5] py-16 px-4 md:px-10 mt-11">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left: Images and circular text */}
        <div className="relative w-full h-full">
          {/* Circular Text */}
         

          {/* Image 1 */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg"
              alt="Solar Field"
              className="rounded-xl object-cover"
            />
          </div>

          {/* Image 2 - overlayed */}
          <div className="absolute bottom-[-40px] left-[60px] w-3/4 border-4 border-white rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
              alt="Solar Roof Work"
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right: Text content */}
        <div className="text-gray-800">
          <h3 className="text-xl font-semibold text-green-800 tracking-wider uppercase mb-2">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            We Believe Solar Power Should Be <span className="text-orange-600">Accessible</span>
          </h2>
          <p className="text-base leading-relaxed mb-4">
            At DIVY Power Pvt. Ltd., we’ve been lighting lives responsibly for over a decade as an authorized partner of Tata Power Solar. Backed by Tata’s legacy of trust, we deliver cost-effective solar solutions that prioritize energy safety, quality, and long-term performance.
          </p>
          <p className="text-base leading-relaxed">
            From planning to financing, and installation to maintenance, we offer customized solar services required to meet your project’s needs. With us, you don’t just go solar, you go safe, smart, and sustainable.
          </p>
        </div>
      </div>
    </section>
</section>
<section>
  <SolarServices/>
  <SolarProduct/>
</section>
<section>
  <main className="max-w-7xl mx-auto px-6 py-16">
      <section className="bg-[#4BA63F] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text content */}
        <div className="text-white max-w-3xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            We Are Expensive But We Are Safe
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-normal">
            At Divy Power, we believe that quality and safety come first. While our solutions may come at a premium, we never compromise on the integrity of our installations. Our systems are built with government-approved materials, installed by certified engineers, and designed for long-term durability. We take pride in ensuring that every solar installation is robust, reliable, and secure, giving you peace of mind that your investment will last for decades. When you choose Divy, you’re choosing safety, reliability, and performance that won’t fail you.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={solarch}
            alt="Smiling sun emoji wearing sunglasses and orange shoes with text 'SOLAR CHACHA' above it in black bold font"
            className="w-48 h-48 md:w-52 md:h-52 object-contain"
            width={200}
            height={200}
          />
        </div>
      </section>


      <SolarCostCalculator/>
      <FaqSection/>
      <SolarPortfolio/>
      <CustomerCarousel/>
      <ExactMatchPage/>
      <ContactForm/>
      <Footer/>
    </main>
    
    
</section>




    </div>
  );
}

export default Home;
