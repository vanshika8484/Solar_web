import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151542] text-white  py-12 px-6 md:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">DIVY POWER</h3>
          <p className="text-base font-semibold mb-4 text-blue-100">Contact Us</p>

          <ul className="space-y-3 text-blue-100">
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneAlt className="text-white" />
              <a href="tel:+11234567890">+(1) 123 456 7890</a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneAlt className="text-white" />
              <a href="tel:+10987654321">+(1) 098 765 4321</a>
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="text-white mt-1" />
              <address className="not-italic text-blue-100 leading-snug">
                53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,<br />
                Nai Basti Dundaher Ghaziabad,<br />
                Uttar Pradesh 201001
              </address>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope className="text-white" />
              <a href="mailto:divy@gmail.com">divy@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope className="text-white" />
              <a href="mailto:Info@divypower.in">Info@divypower.in</a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 border-b border-blue-300 pb-2 w-max">Useful Links</h4>
          <ul className="space-y-3 text-blue-100 font-medium">
            {["About Us", "Our Service", "What We Do", "Our Team", "Contact"].map((link) => (
              <li
                key={link}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaAngleRight className="text-white" />
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Solutions */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-6 border-b border-blue-300 pb-2 w-max">Our Solutions</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blue-100 font-medium">
            {[
              "Solar Rooftop",
              "Solar Water Pump",
              "EV Charging Stations",
              "Battery Storage Solutions",
              "Solar Street Lights",
              "Hybrid Solar Systems",
            ].map((solution) => (
              <li
                key={solution}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaAngleRight className="text-white" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
