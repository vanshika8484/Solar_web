import { motion } from "framer-motion";
import ProcessSteps from "./ProcessSteps";
import ExpertTeam from "./ExpertTeam";
import SolarCards from "./SolarCards";
import ContactCards from "./ContactCards";
import Footer from "./Footer";

const aboutUsContent = [
  {
    img: "https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg",
    alt: "Solar panels field under bright sunlight with blue sky and some clouds",
    text: `At Divy Power Pvt. Ltd., we are not just another solar company – we are a movement toward a cleaner, smarter, and more sustainable future. With over 25 years in the energy sector, we deliver efficient, long-lasting solar systems tailored for every client At Divy Power Pvt. Ltd., we are not just another solar company, we are a movement toward a cleaner, smarter, and more sustainable future. With over 25 years of experience in the energy sector, we have evolved into a new-age solar solutions firm dedicated to transforming the way India powers its homes, institutions, and industries. Our expertise lies in delivering clean, efficient, and long-lasting solar power systems that are customized to fit the unique needs of every client we serve..`,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Close up of solar panels in a field with clear blue sky",
    text: `We simplify solar energy. From consultation to implementation, we partner with you to build sustainable infrastructure. From rooftops to rural villages, we bring engineering excellence and environmental responsibility What sets us apart is our deep-rooted commitment to making solar simple and accessible. We don’t just install panels, we offer complete energy consulting, act as your green infrastructure partners, and serve as advocates for long-term sustainability. Whether it’s a rooftop in a residential colony or a government-backed solar transformation of an entire village, we bring a rare combination of engineering excellence, innovation, and environmental responsibility to every project..`,
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/a6bb9ba5-9710-4d97-6623-f283a7ce4df1.jpg",
    alt: "Solar panels with cloudy sky background",
    text: `Our collaborations with government programs like UPNEDA reflect our mission to expand access to renewable energy. We empower communities and businesses to embrace solar energy for a better tomorrow.Our association with government programs, including our work under UPNEDA, reflects our commitment to driving impact at scale. A prime example of this is our role in creating Net-Zero Villages like Kumheera, where our solar solutions have helped reduce millions of kilograms of carbon emissions, generated clean electricity, and enabled significant financial savings for local communities.`,
  },
];

export default function About() {
  return (
    <div className="bg-white text-black px-6 md:px-12 lg:px-20 xl:px-32 py-12">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center  mt-11"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-green-500">Us</span>
      </motion.h2>

      {/* Content Sections */}
      <div className="space-y-14 md:space-y-20 mt-32">
        {aboutUsContent.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-6 md:gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full md:w-2/5 h-auto rounded-xl shadow-md object-cover"
            />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed md:w-3/5">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
      <div>
      <h2 className=" mt-32 text-center font-bold text-3xl">Our <span className="text-green-500">Company</span></h2>
        <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
        
        <div className="lg:w-1/2">
          <img
            src="https://storage.googleapis.com/a1aa/image/d6efe2a9-79f9-4e75-1498-0238beb30b59.jpg"
            alt="Large solar panels installed on a grassy field under a clear blue sky"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-4xl font-extrabold text-black leading-tight text-center lg:text-left">
            Produce Your Own<br />Clean<br />Save The Environment
          </h1>

          <div className="flex items-center justify-center lg:justify-start space-x-16 mt-8 mb-6 text-sm font-semibold text-black">
            <span>Our Mission</span>
            <span>Our Vision</span>
            <button
              type="button"
              className="bg-[#4caf50] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#449d48] transition"
            >
              Why Choose Us?
            </button>
          </div>

          <p className="text-gray-600 text-sm max-w-xl mb-8">
            At Divy Power Pvt. Ltd., we don’t just install solar systems — we build lasting energy partnerships. What truly sets us apart is our commitment to quality, accountability, and long-term service, ensuring that your journey into clean energy is smooth, secure, and truly impactful. We are a trusted name in the solar industry, known for our reliability and consistency. Our job doesn’t end at installation. We stay with you throughout your system’s life cycle, offering ongoing support and care.
          </p>

          <div className="flex items-center space-x-4 mb-10 max-w-xs">
            <img
              src="https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg"
              alt="Worker installing solar panels"
              className="rounded-xl object-cover w-30 h-36"
            />
            <p className="text-black text-sm leading-relaxed">
              We are trustworthy — we don’t disappear after installation.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              aria-label="Play video"
              className="w-12 h-12 border border-[#4caf50] rounded-full flex items-center justify-center text-[#4caf50] hover:bg-[#4caf50] hover:text-white transition"
            >
              <i className="fas fa-play text-lg ml-[2px]"></i>
            </button>
            <div className="border-t border-[#4caf50] w-8"></div>
            <span className="text-black text-sm">Play Video</span>
          </div>
        </div>
      </main>

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
  <ProcessSteps/>
  <ExpertTeam/>
  <SolarCards/>
  <ContactCards/>
  <Footer/>
</section>

      </div>
    </div>
  );
}
