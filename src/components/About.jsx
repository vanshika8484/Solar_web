import { motion } from "framer-motion";
import ProcessSteps from "./ProcessSteps";
import ExpertTeam from "./ExpertTeam";
import SolarCards from "./SolarCards";
import ContactCards from "./ContactCards";
import Footer from "./Footer";
import CompanySection from "./CompanySection";
import ChatUI2 from "./ChatUI2";


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
    text: `Our collaborations with government programs like UPNEDA reflect our mission to expand access to renewable energy. We empower communities and businesses to embrace solar energy for a better tomorrow.Our association with government programs, including our work under UPNEDA, reflects our commitment to driving impact at scale..`,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Close up of solar panels in a field with clear blue sky",
    text: `We simplify solar energy. From consultation to implementation, we partner with you to build sustainable infrastructure. From rooftops to rural villages, we bring engineering excellence and environmental responsibility What sets us apart is our deep-rooted commitment to making solar simple and accessible...`,
  },
];

export default function About() {
  return (
    <div className="bg-white max-h-screen text-black px-6 md:px-12 lg:px-20 xl:px-32 py-12 GetfontHomeDash ">
   
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center  mt-11"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-green-800">Us</span>
      </motion.h2>

<section className=" mt-14">
   <ChatUI2/>
</section>
      {/* <ConstructionHome /> */}
      {/* Content Sections */}
   <div className="space-y-14 md:space-y-20 -mt-4">
  {aboutUsContent.map((item, index) => (
    <motion.div
      key={index}
      className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
        } gap-6 md:gap-10 p-6 md:p-10 border border-gray-200 bg-[#f8f9fb] rounded-3xl shadow-md transition hover:shadow-lg`}
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
            alt="Solar Panel Field"
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

      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fdf6ee] shadow-xl rounded-xl p-6 sm:p-10 md:p-12 max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6 text-center md:text-left">
            At Divy Power Pvt. Ltd.
          </h2>
          <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-5">
            <p>
              At Divy Power Pvt. Ltd., we don’t just install solar systems — we build lasting energy partnerships. What truly sets us apart is our commitment to quality, accountability, and long-term service, ensuring that your journey into clean energy is smooth, secure, and truly impactful.
            </p>
            <p>
              We are a trusted name in the solar industry, known for our reliability and consistency. Our job doesn’t end at installation. We stay with you throughout your system’s life cycle, offering support, maintenance, and real-time solutions whenever needed. When you choose Divy, you choose peace of mind.
            </p>
            <p>
              Our systems are built to last — and we mean it. With top-grade components, certified engineers, and government-approved materials, we ensure that your solar panels won’t "fly off in the wind" or suffer from poor installation practices. We prioritize safety and durability, making sure your investment pays off for decades.
            </p>
            <p>
              As an MNRE-approved and UPNEDA-certified partner, we are officially recognized by the Government of India and regularly work alongside government bodies to deliver high-impact solar projects across villages, schools, societies, and institutions. From rural zones to urban rooftops, our credibility speaks for itself.
            </p>
            <p>
              Our impact isn’t just on paper — we’ve reduced over 158 million kilograms of CO₂ emissions and counting. That’s not just a number; it’s a tangible step toward a cleaner, healthier planet, made possible through every project we complete.
            </p>
            <p>
              We don’t believe in one-size-fits-all. Whether you're a homeowner, a school, a housing society, or a large enterprise, we offer custom-designed solar solutions that are optimized for your unique energy requirements and budget.
            </p>
            <p>
              What’s more, we pride ourselves on fast installations, hassle-free service, and guaranteed performance. From the first consultation to the final handover, we ensure a seamless, transparent experience that keeps your goals at the center.
            </p>
            <p>
              When you choose Divy Power, you’re not just choosing solar — you’re choosing a partner in building a greener, smarter future.
            </p>
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
