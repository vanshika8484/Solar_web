import { useState } from "react";
import { Link } from "react-router-dom";
import DivyRedesign from "../Images/DivyRedesign.webp";
import "./Home.css";

import Dashboard from "./Dashboard";
import SolarProduct from "./SolarProduct";
import SolarCostCalculator from "./SolarCostCalculator";
import FaqSection from "./FaqSection";
import SolarPortfolio from "./SolarPortfolio";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ChatbotToggle from "./ChatbotToggle";
import SolarSolutions from "./SolarSolutions";
import ChatUI1 from "./ChatUI1";
import PageOne from "./PageOne";
import Conversation from "./Conversation";
import HomeStart2 from "./HomeStart2";
import HoverVideoCard1 from "./HoverVideoCard1";
import FiguringOut1 from "./FiguringOut1";
import ExactMatchPage1 from "./ExactMatchPage1";
import FullScreenVideo from "./FullScreenVideo";
import RatingWorks from "./RatingWorks";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-full mx-auto overflow-x-hidden pb-0">
      {/* ChatbotToggle */}
      <ChatbotToggle />

      {/* Page Content */}
      <div className="home-content">
        {/* Hero Section */}
        <section className="About">
          <FullScreenVideo />
          <HomeStart2 />
        </section>

        {/* Conversation Section */}
        <section className="px-4 sm:px-6 lg:px-12">
          <Conversation />
        </section>

        {/* Solar Cost Calculator Section */}
        <section
          className="mt-24 px-4 sm:px-6 lg:px-12 relative"
          style={{ transform: "translateY(-450px)" }}
        >
          <SolarCostCalculator />
          <div className="flex justify-center mt-10">
            <Link to="./contact">
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                Adhik jaankari ke liye click krein
              </button>
            </Link>
          </div>
        </section>

        {/* Solar Solutions Section */}
        <section
          className="About px-4 sm:px-6 lg:px-12"
          style={{ transform: "translateY(-250px)" }}
        >
          <SolarSolutions />
        </section>

        {/* Contact Form */}
        <section className="mt-20 About1 ">
          <ContactForm />
        </section>

        {/* PageOne & ChatUI */}
        <section className="About">
          <PageOne />
        </section>
        <section className="About px-4 sm:px-6 lg:px-12">
          <ChatUI1 />
        </section>

        {/* Products Section */}
        <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col gap-8">
            <SolarProduct />
          </div>
        </section>

        {/* Floating Image */}
        <section className="mt-10 animate-float">
          <img src={DivyRedesign} alt="Design" />
        </section>

        {/* Other Sections */}
        <section className="mt-20 sm:mt-28 md:mt-36 px-4 sm:px-6 lg:px-12">
          <FiguringOut1 />
        </section>
        <section className="mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-12">
          <ExactMatchPage1 />
        </section>
        <div className="relative z-10">
          <div className="h-24 sm:h-32 md:h-40 lg:h-48"></div>
          <section className="px-4 sm:px-6 lg:px-12 -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48">
            <RatingWorks />
          </section>
        </div>
      </div>

      {/* HoverVideo + FAQ */}
      <section
        style={{ transform: "translateY(-300px)" }}
        className="bg-[#f8f7f0] relative z-0"
      >
        <HoverVideoCard1 />
        <section className="About1 mt-15">
          <FaqSection />
        </section>
      </section>

      {/* Footer */}
      <section className="About -mt-[340px]">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
