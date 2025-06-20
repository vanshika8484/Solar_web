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

import Ctpage from "./Ctpage";
import PageOne from "./PageOne";
import { Link } from "react-router-dom";
import Conversation from "./Conversation";
import Homestart from "./Homestart";

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
    <div className=" relative overflow-hidden -mt-20  max-w-7xl mx-auto">
      <ChatbotToggle />
      <div>
        <section>
          <Homestart />
        </section>
      </div>

      <Suspense fallback={<div></div>}>
        <Dashboard />
      </Suspense>
      {/* <ChatUI /> */}
      <Conversation />

      {/* <Solarabout /> */}

      {/* <section className=" m-10">
        <StatsSection />
        <SolarSolutions />
      </section> */}


      <section className=" -mt-11 m-10">
        <ChartCard />
      </section>
      <section>
        <SolarCostCalculator />
      </section>
      <section>
        <SolarSolutions />
      </section>
      <section>
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
                We Don’t Just Sell Solar. <br className="hidden sm:block" /> We
                Engineer Smart Power Solutions.
              </h2>
              <p className="text-base leading-relaxed mb-4">
                At <strong>DIVY Power</strong>, we believe solar isn’t just a
                product, it’s your power freedom. From site assessment to
                installation and support, we handle everything.
              </p>
              <p className="text-base leading-relaxed mb-4">
                We’ve been lighting lives responsibly for over a decade as an
                authorized partner of <strong>Tata Power Solar</strong>. Backed
                by Tata’s legacy of trust, we deliver cost-effective solar
                solutions that prioritize energy safety, quality, and long-term
                performance.
              </p>
              <p className="text-base leading-relaxed">
                From planning to financing, and installation to maintenance, we
                offer customized solar services required to meet your project’s
                needs. With us, you don’t just go solar — you go{" "}
                <strong>safe, smart, and sustainable</strong>.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className=" ">
        <PageOne />
      </section>
      <section>
        <ChatUI1 />
      </section>
      <section className="bg-[#f8f7f0] mr-10 ml-10">
        
        <SolarProduct />
      </section>

      <main className="max-w-full mx-auto  bg-[#f8f7f0] GetFontSol mr-10 ml-10 ">
        <section className="bg-green-800  p-10 md:p-16 flex flex-col  md:flex-row items-center justify-between gap-10">
          {/* Text content */}
          <div className="text-white w-full text-center md:text-left">
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
          <ChatUI />
        </section>
      </main>

      <section className="mr-10 ml-10">
        <Ctpage />

        <ExactMatchPage />
      </section>

      <section className="bg-[#f8f7f0] mr-10 ml-10">
        <SolarPortfolio />

        <FaqSection />

        <ContactForm />

        <section>


        </section>

        <Footer />
      </section>
    </div>
  );
}

export default Home;
