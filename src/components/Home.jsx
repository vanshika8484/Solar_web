import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Sun } from "lucide-react";
import solar from "../Images/solar.jpg";
import solarch from "../Images/chacha.png";
import img1 from "../Images/Img1.png";
import DivyRedesign from "../Images/DivyRedesign.png";

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
import frongimg from "../Images/SolarChahaFront.png";
import ChatbotPopup from "./ChatbotPopup";
import ChatbotToggle from "./ChatbotToggle";
import SolarSolutions from "./SolarSolutions";
import Solarabout from "./Solarabout";
import Hero from "./Hero";
import ChatUI1 from "./ChatUI1";

import Ctpage from "./Ctpage";
import PageOne from "./PageOne";
import { Link, Links } from "react-router-dom";
import Conversation from "./Conversation";
import Homestart from "./Homestart";
import HomeStart2 from "./HomeStart2";
import ExpertTeam from "./ExpertTeam";
import HoverVideoCard1 from "./HoverVideoCard1";
import FiguringOut1 from "./FiguringOut1";
import ExactMatchPage1 from "./ExactMatchPage1";

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
    <div className=" relative overflow-hidden   max-w-7xl mx-auto">
      <ChatbotToggle />
      <div>
        <section className="About">
          <Homestart />
          <HomeStart2 />


        </section>
      </div>

      <section>
        <Conversation />
      </section>
      <Suspense fallback={<div></div>}>

      </Suspense>



      <section className=" -mt-72  md:-mt-72 lg:-mt-72 xl:-mt-72 2xl:-mt-[500px]  m-10">
        {/* <ChartCard /> */}
      </section>
      <section className="About">
        <SolarCostCalculator />

      </section>
      <section className=" mt-24 About1">
        <Dashboard />
      </section>
      <section>
        <div className="text-center About1  py-6 mb-10  -mt-36 lg:-mt-44 md:-mt-40 ">
          <button className="bg-[#E50C0C] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            <Link to="./contact">Contact Us to Get Started</Link>
          </button>
        </div>

      </section>

      <section className="About">
        <SolarSolutions />
      </section>
      <section className=" mt-20 About1">
        <ContactForm />
      </section>

      <section className="About ">
        <PageOne />
      </section>
      <section className="About">
        <ChatUI1 />
      </section>
      <section className="bg-green-800  About  -mt-0 md:-mt-0 lg:-mt-0 xl:-mt-0 2xl:-mt-[200px]">

        <SolarProduct />
      </section>

      <section className=" mt-10 animate-float">
        <img src={DivyRedesign} />
      </section>
      <section className=" mt-36 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20  About1">
        <FiguringOut1 />
      </section>
      <section className=" mt-16 About1">
      <ExactMatchPage1/>
        <Ctpage />


      </section>
      <section className=" -mt-28 sm:-mt-28 md:-mt-36 lg:-mt-36 xl:-mt-36 ">
        <ExactMatchPage />
      </section>

      <section className="bg-[#f8f7f0] About1 -mt-48 md:-mt-48 lg:-mt-48 xl:-mt-56 2xl:-mt-[630px]">
        <SolarPortfolio />
        <HoverVideoCard1 />


        <section className="About1 mt-20">
          <FaqSection />
        </section>



       

        <section className=" About -mt-11">
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default Home;
