import { useState } from "react";
import { motion } from "framer-motion";
import ProcessSteps from "./ProcessSteps";
import ExpertTeam from "./ExpertTeam";
import SolarCards from "./SolarCards";
import ContactCards from "./ContactCards";
import sunPhoto from "../Images/chacha.png";
import sunImage from "../Images/didi.png";
import Footer from "./Footer";
import CompanySection from "./CompanySection";
import ChatUI4 from "./ChatUI4";
import localImage from "../Images/Background.jpg"

const aboutUsContent = [
  {
    img: "https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg",
    alt: "Solar panels field under bright sunlight with blue sky and some clouds",
    text: `At Divy Power Pvt. Ltd., we are not just another solar company – we are a movement toward a cleaner, smarter, and more sustainable future. With over 25 years in the energy sector, we deliver efficient, long-lasting solar systems tailored for every client At Divy Power Pvt. Ltd.,..`,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/a6bb9ba5-9710-4d97-6623-f283a7ce4df1.jpg",
    alt: "Close up of solar panels in a field with clear blue sky",
    text: `We simplify solar energy. From consultation to implementation, we partner with you to build sustainable infrastructure. From rooftops to rural villages, we bring engineering excellence and environmental responsibility What sets us apart is our deep-rooted commitment to making solar simple and accessible...`,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Close up of solar panels in a field with clear blue sky",
    text: `We simplify solar energy. From consultation to implementation, we partner with you to build sustainable infrastructure. From rooftops to rural villages, we bring engineering excellence and environmental responsibility What sets us apart is our deep-rooted commitment to making solar simple and accessible...`,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/a6bb9ba5-9710-4d97-6623-f283a7ce4df1.jpg",
    alt: "Solar panels with cloudy sky background",
    text: `Our collaborations with government programs like UPNEDA reflect our mission to expand access to renewable energy. We empower communities and businesses to embrace solar energy for a better tomorrow. Our association with government programs, including our work under UPNEDA, reflects our commitment to driving impact at scale..`,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Close up of solar panels in a field with clear blue sky",
    text: `We simplify solar energy. From consultation to implementation, we partner with you to build sustainable infrastructure. From rooftops to rural villages, we bring engineering excellence and environmental responsibility What sets us apart is our deep-rooted commitment to making solar simple and accessible...`,
  },
];

export default function About() {
  return (
    <div className="bg-white max-h-screen text-black px-6 md:px-12 lg:px-20 xl:px-32 py-12 GetfontHomeDash flex flex-col items-center">
   
      {/* Image Instead of Heading */}
      <motion.img
        src={localImage} // Use the imported local image
        alt="Descriptive Alt Text"
        className="w-full max-w-2xl h-auto mt-4 mb-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <section className="mt-14">
        <ChatUI4 />
      </section>

      {/* Content Sections */}
      <div className="space-y-14 md:space-y-20 -mt-96 max-w-4xl w-full">
        {aboutUsContent.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-6 md:gap-10 p-6 md:p-10 border border-gray-200 bg-[#f8f9fb] rounded-3xl shadow-md transition hover:shadow-lg`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-md h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg mx-auto">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed md:w-3/5">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div>
        <CompanySection />
      </div>

     <section className="bg-white py-8 px-4 sm:px-6 lg:px-8"> {/* Reduced padding */}
        <div className="bg-[#fdf6ee] shadow-xl rounded-xl p-6 sm:p-10 md:p-12 max-w-[1000px] mx-auto">
          <div className="flex items-center justify-center mb-4"> {/* Reduced margin-bottom */}
            <img src={sunPhoto} alt="Chacha" className="w-16 h-16 mr-4" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-red-700 text-center md:text-left">
              Why Choose Us as Your Solar Partner?
            </h2>
            <img src={sunImage} alt="Didi" className="w-16 h-16 ml-4" />
          </div>
          <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-5">
            <p>
              At <strong>Divy Power Pvt. Ltd.,</strong> we don't just install solar systems - we build <span className="text-green-500">lasting energy partnerships</span>. What truly sets us apart is our commitment to quality, accountability, and long-term service, ensuring that your journey into clean energy is smooth, secure, and impactful.
            </p>

            <ul className="list-disc list-inside space-y-2"> {/* Reduced space-y */}
              <li><strong>Committed to quality, accountability, and long-term service.</strong></li>
              <li><strong>Post-installation support</strong> real-time maintenance and performance monitoring throughout the <br /> system's lifecycle.</li>
              <li><strong>Top-grade components, certified engineers & government-approved materials</strong> ensure <br /> maximum durability and safety.</li>
              <li><strong>MNRE-approved & UPNEDA-certified;</strong> officially recognized by the government of India.</li>
              <li><strong>Proven track record</strong> with solar projects across villages, schools, societies, and institutions.</li>
            </ul>
          </div>
        </div>
      </section>


      <section>
        <ProcessSteps />
        <ExpertTeam />
        <SolarCards />
        <ContactCards />
      </section>

      <section>
        <Footer />
      </section>

    </div>
  );
}
