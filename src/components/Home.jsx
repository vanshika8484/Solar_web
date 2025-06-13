import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Sun } from "lucide-react";
import solar from "../Images/solar.jpg";
import solarch from "../Images/chacha.png";
import img1 from "../Images/Img1.png";
import "./Home.css";

// import { FaRobot } from "react-icons/fa";
import { RiRobotLine } from "react-icons/ri";
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
import bg from "../Images/bg1.jpg";
import ChatbotPopup from "./ChatbotPopup";
import ChatbotToggle from "./ChatbotToggle";
import SolarSolutions from "./SolarSolutions";
import Solarabout from "./Solarabout";
import Hero from "./Hero";
import ChatUI1 from "./ChatUI1";
import ChatUI3 from "./BreakTheMyth";
import BreakTheMyth from "./BreakTheMyth";
import Ctpage from "./Ctpage";
import PageOne from "./PageOne";
import { Link } from "react-router-dom";
import Conversation from "./Conversation";

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,

    transition: { duration: 0.3 },
  };

  return (
    <div className="pt-7 relative overflow-hidden -mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <ChatbotToggle />
<div className="bgimg">
      <motion.section
        className="bgimg min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 font-sans "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      
        <motion.div 
          className="max-w-3xl w-full text-center "
          variants={itemVariants}
        >
          {/* Badge */} 
          <motion.span
            className="inline-block bg-green-100 text-green-700 px-3 py-1   rounded-full text-xs font-bold "
            variants={itemVariants}
          >
            Trusted by 23K+ users
          </motion.span>

          {/* Avatar Group */}
          <motion.div
            className="flex justify-center items-center space-x-4  "
            variants={itemVariants}
          >
            <img
              src={img1}
              alt="User 1"
              className=" w-36 h-36 object-cover -mt-4"
            />
           
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-green-600 GetfontHomeChat1 text-xl mb-2 -mt-4"
            variants={itemVariants}
          >
            Tired of high electricity bills?
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="mb-8 tracking-tight text-center "
            variants={itemVariants}
          >
            <div className="GetfontHome text-5xl sm:text-6xl lg:text-6xl text-black leading-snug">
              Go Solar, Save More:
            </div>
            <div className="GetfontHome text-4xl sm:text-5xl lg:text-5xl text-gray-300 mt-5 mb-4 ">
              Clean and Renewable <span className=" text-black ">Energy</span>
            </div>
            <div className="GetfontHome text-4xl sm:text-5xl lg:text-5xl text-black mt-5">
              for a Brighter Tomorrow
            </div>
          </motion.h1>

          {/* Separator */}
          {/* <motion.div
            className="h-1.5 w-24 mx-auto mb-10 bg-green-800 rounded-full shadow-md"
            variants={itemVariants}
          ></motion.div> */}

          {/* Description */}
          {/* <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-12 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Go solar today and enjoy clean, renewable energy for a sustainable
            tomorrow. Save on bills, reduce your carbon footprint, and power
            your home the smart way.
          </motion.p> */}

          {/* CTA Button */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-col items-center space-y-6"
              variants={itemVariants}
            >
              <motion.button
                type="button"
                className="group bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-7 py-3 text-lg inline-flex items-center gap-2 transition-all duration-300 GetfontHomeChat"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/Contact">
                  Get Solar Estimate
                </Link>
                <motion.span
                  className="inline-block"
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Circular Badge under button */}
          </motion.div>
         
        </motion.div>

      </motion.section>
        </div>

      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
      {/* <ChatUI /> */}
      <Conversation/>

      

      <section className=" py-16 px-4 md:px-10  GetfontHomeDash ">
        <section className="bg-[#f8f7f0] py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Sun className="text-orange-500 w-7 h-7" />
                <span className="uppercase text-sm font-semibold tracking-wider text-green-700">
                  Renewable Energy
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                What Is <span className="text-green-800">Solar?</span>
              </h2>

              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                Solar refers to anything related to the sun. In energy, it means
                harnessing the sun’s light and heat to generate electricity.
                It’s renewable, safe, and economical in the long run. With
                solar, you’re not only saving money—you’re saving the Earth.
              </p>

              <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-full transition-all shadow-md">
                Read More +
              </button>
            </motion.div>

            {/* Right Image */}
           <motion.div
  className="md:w-1/2 w-full"
  initial={{ x: 80, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="w-full max-w-md h-40 sm:h-48 rounded-xl overflow-hidden shadow-xl mx-auto">
    <img
      src={solar}
      alt="Solar Panel Field"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

          </div>
        </section>
        <section>
        <Solarabout/>
        
      </section>

        {/* Another Layout___________>>>>>>>>>>>>>>> */}

        {/* <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Image with gradient overlay */}
        {/* <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full h-72 md:h-[400px] rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={solar}
            alt="Solar Panel Field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div> */}

        {/* Right: Text content */}
        {/* <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sun className="text-green-600 w-6 h-6" />
            <span className="text-sm font-medium text-green-700 uppercase tracking-widest">
              Renewable Energy
            </span>
          </div> */}

        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Powering the Future with <span className="text-green-700">Solar Energy</span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
            Solar energy is harnessed from the sun to generate electricity. It's clean, sustainable, and reduces your carbon footprint. Choosing solar helps you save money and support a greener planet.
          </p>

          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition-all shadow">
            Learn More +
          </button>
        </motion.div> */}
        {/* </div> */}
        {/* </section> */}

        
      </section>

      {/* <section className="bg-white">
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
</section> */}
      <section className=" m-10">
        <StatsSection />
        <SolarSolutions />
      </section>
      

<section className="m-10">
  <div className="GetfontHomeDash max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-stretch relative mt-14">
    
    {/* Left: Images */}
    <div className="relative flex flex-col justify-center h-full">
      {/* Main Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-lg h-full">
        <img
          src="https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg"
          alt="Solar Field"
          className="rounded-xl object-cover w-full h-full min-h-[400px]"
        />
      </div>

      {/* Stacked Image for large screens */}
      <div className="absolute md:bottom-[-40px] md:left-[60px] w-3/4 border-4 border-white rounded-xl overflow-hidden shadow-xl md:block hidden">
        <img
          src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
          alt="Solar Roof Work"
          className="rounded-xl object-cover w-full h-[200px] md:h-[250px]"
        />
      </div>

      {/* Small screen stacked image below */}
      <div className="md:hidden mt-6 w-full border-4 border-white rounded-xl overflow-hidden shadow-xl">
        <img
          src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
          alt="Solar Roof Work"
          className="rounded-xl object-cover w-full h-[200px]"
        />
      </div>
    </div>

    {/* Right: Text Content */}
    <div className="text-gray-800 flex flex-col justify-center h-full px-2 sm:px-0">
      <h3 className="text-xl font-semibold text-green-800 tracking-wider uppercase mb-2">
        About Us
      </h3>
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
        We Believe Solar Power Should Be{" "}
        <span className="text-orange-600">Accessible</span>
      </h2>
      <p className="text-base leading-relaxed mb-4">
        At DIVY Power Pvt. Ltd., we’ve been lighting lives responsibly for
        over a decade as an authorized partner of Tata Power Solar. Backed
        by Tata’s legacy of trust, we deliver cost-effective solar
        solutions that prioritize energy safety, quality, and long-term
        performance.
      </p>
      <p className="text-base leading-relaxed">
        From planning to financing, and installation to maintenance, we
        offer customized solar services required to meet your project’s
        needs. With us, you don’t just go solar, you go safe, smart, and
        sustainable.
      </p>
    </div>
  </div>
</section>


<section className=" mt-16">
  
</section>
      <section className=" mt-36 m-10">
      
        <ChartCard />
      </section>
      <section className=" h-[800px]">
        <SolarCarousel />
      </section>

      <section></section>
      <section className="bg-[#f8f7f0] mr-10 ml-10">
        <SolarServices />
        <SolarProduct />
      <BreakTheMyth/>
      
       
      </section>
     

      <main className="max-w-7xl mx-auto px-6 py-16 bg-[#f8f7f0] GetFontSol mr-10 ml-10 ">
      
        <section className="bg-green-800 rounded-2xl p-10 md:p-16 flex flex-col  md:flex-row items-center justify-between gap-10">
          {/* Text content */}
          <div className="text-white max-w-3xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              We Are Expensive But We Are Safe
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-normal">
              At Divy Power, we believe that quality and safety come first.
              While our solutions may come at a premium, we never compromise on
              the integrity of our installations. Our systems are built with
              government-approved materials, installed by certified engineers,
              and designed for long-term durability. We take pride in ensuring
              that every solar installation is robust, reliable, and secure,
              giving you peace of mind that your investment will last for
              decades. When you choose Divy, you’re choosing safety,
              reliability, and performance that won’t fail you.
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

        <section className="">
          <ChatUI1/>
        </section>
      </main>

      <section className="mr-10 ml-10">
       <Ctpage/>
        <SolarCostCalculator />

        <FaqSection />
      </section>

      <section className="bg-[#f8f7f0] mr-10 ml-10">
        <SolarPortfolio />
      <CustomerCarousel />
      

      <ExactMatchPage />
      
      <ContactForm />
     
      
      <Footer />
      </section>
    </div>
  );
}

export default Home;
