import { motion } from "framer-motion";
import ProcessSteps from "./ProcessSteps";
import ExpertTeam from "./ExpertTeam";
import SolarCards from "./SolarCards";
import ContactCards from "./ContactCards";
import Footer from "./Footer";
import CompanySection from "./CompanySection";

import ChatUI4 from "./ChatUI4";


const aboutUsContent = [
  {
    heading: "Not Just Selling Solar – We are a Partner in Your Energy Journey",
    subheading: "At Divy Power Pvt. Ltd., we don’t just sell solar panels. We listen, understand, and build solutions.",
    points: [
      "Every home, business, or factory has a unique energy need – we begin by understanding yours.",
      "Our approach is not sales-driven, it’s solution-focused.",
      "We help you avoid costly mistakes caused by one-size-fits-all solar kits.",
      "We design systems that fit your life, not force you to adapt to them.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg",
    alt: "Team discussing solar design solution on paper with panels in background",
  },
  {
    heading: "What If You Delay Solar? The Hidden Cost of Waiting",
    subheading: "We believe in honesty – waiting to switch to solar can cost more than you think.",
    points: [
      "Every electricity bill is money lost that could’ve been saved.",
      "Electricity prices are rising, and power cuts are more frequent.",
      "Delaying solar means losing not just money, but energy independence.",
      "Going solar isn’t just smart, it’s urgent – and we help you act now.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/a6bb9ba5-9710-4d97-6623-f283a7ce4df1.jpg",
    alt: "Clock with electric cables symbolizing urgency",
  },
  {
    heading: "Powering Every Home – from Rooftops to Rural Villages",
    subheading: "We build energy solutions for all, from high-rise buildings to the heart of rural India.",
    points: [
      "No terrain or challenge is too complex – we deliver where it’s needed.",
      "Our systems are designed to endure Indian conditions: dust, heat, and rain.",
      "Be it a home, farm, or school – our mission is to light it up, cleanly and reliably.",
      "We believe clean energy is a right, not a luxury.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Solar panels on rooftops and rural homes",
  },
  {
    heading: "A Legacy You Can Rely On",
    subheading: "With over 25 years in the energy sector, trust is not claimed – it’s earned.",
    points: [
      "We’ve grown with the solar industry and bring decades of expertise.",
      "Our systems are known for longevity and reliability.",
      "We focus on doing what’s right, not just what sells.",
      "Our client relationships last because we deliver consistent results.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/a6bb9ba5-9710-4d97-6623-f283a7ce4df1.jpg",
    alt: "Old and new solar projects representing legacy and evolution",
  },
  {
    heading: "Creating Real Change Through Government Collaborations",
    subheading: "We don’t just talk about impact – we create it, in partnership with the Government.",
    points: [
      "As a UPNEDA-approved vendor, we drive solar adoption at scale.",
      "We power not just homes, but hospitals, schools, and public infrastructure.",
      "We empower communities to control their energy future.",
      "We act on our mission to build a better, solar-powered India.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Government officials and solar technicians inspecting installation",
  },
];


// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div>
      (
      <div className="bg-white text-black px-6 md:px-12 lg:px-20 xl:px-32 py-12 GetfontHomeDash ">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-green-800">Us</span>
        </motion.h2>

       <section>
        <ChatUI4/>
       </section>
        {/* Cards Container */}
        <motion.div
          className="space-y-14 md:space-y-20 -mt-[350px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {aboutUsContent.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-10 p-6 md:p-10 border border-gray-200 bg-[#f8f9fb] rounded-3xl shadow-md transition hover:shadow-lg`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <div className="w-full max-w-md h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg mx-auto">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-3/5">
                <h3 className="text-xl font-semibold mb-2 text-green-900">
                  {item.heading}
                </h3>
                <p className="text-gray-800 mb-3">{item.subheading}</p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm md:text-base">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>


      <div>
        <CompanySection />
      </div>

     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="bg-[#fdf6ee] shadow-xl rounded-2xl p-6 sm:p-10 md:p-12 max-w-4xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8 text-center md:text-left">
      Why Choose Us as Your Solar Partner?
    </h2>

    {/* Intro Paragraph */}
    <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
      At <strong>Divy Power Pvt. Ltd.</strong>, we don’t just install solar systems — we build
      <span className="text-green-800 font-semibold"> lasting energy partnerships</span>.
      What truly sets us apart is our commitment to quality, accountability, and long-term
      service, ensuring that your journey into clean energy is smooth, secure, and impactful.
    </p>

    {/* Bullet Points */}
    <ul className="list-disc list-inside space-y-4 text-gray-800 text-base md:text-lg leading-relaxed pl-2">
      <li>
        <strong>Committed to quality, accountability, and long-term service</strong>.
      </li>
      <li>
        <strong>Post-installation support</strong>, real-time maintenance, and performance
        monitoring throughout the system’s lifecycle.
      </li>
      <li>
        <strong>Top-grade components, certified engineers & government-approved materials</strong> ensure maximum durability and safety.
      </li>
      <li>
        <strong>MNRE-approved & UPNEDA-certified</strong>; officially recognized by the Government of India.
      </li>
      <li>
        <strong>Proven track record</strong> with solar projects across villages, schools, societies, and institutions.
      </li>
      <li>
        <strong>Delivered measurable impact</strong> — reduced <span className="text-green-800 font-semibold">158 million+ kg of CO₂</span> emissions and counting.
      </li>
      <li>
        <strong>Custom-designed solar solutions</strong> tailored to your specific energy needs and budget — no one-size-fits-all approach.
      </li>
      <li>
        <strong>Fast installation, hassle-free service, and guaranteed performance</strong>.
      </li>
      <li>
        <strong>Seamless, transparent experience</strong> — from first consultation to final handover.
      </li>
    </ul>

    {/* Closing Paragraph */}
    <p className="mt-6 text-gray-800 text-base md:text-lg leading-relaxed">
      When you choose <strong>Divy Power</strong>, you’re not just choosing solar —
      you’re choosing a <span className="text-green-800 font-semibold">trusted partner</span> in building a greener, smarter future.
    </p>
  </div>
</section>

      <section className="ml-16 mr-16">
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
