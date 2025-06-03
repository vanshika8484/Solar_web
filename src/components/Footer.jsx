import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 md:px-16 GetFontSol">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-extrabold mb-6 text-green-800 tracking-wide">
            DIVY POWER
          </h3>
          <p className="text-base font-semibold mb-4 text-gray-600">Contact Us</p>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition">
              <FaPhoneAlt className="text-green-800" />
              +(1) 123 456 7890
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition">
              <FaPhoneAlt className="text-green-800" />
              +(1) 098 765 4321
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="text-green-800 mt-1" />
              <address className="not-italic text-gray-500 text-sm GetFontSol">
                53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,<br />
                Nai Basti Dundaher Ghaziabad,<br />
                Uttar Pradesh 201001
              </address>
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition text-sm">
              <FaEnvelope className="text-green-800" />
              divy@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition text-sm">
              <FaEnvelope className="text-green-800" />
              Info@divypower.in
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 border-b-2 border-green-800 pb-2 w-max">
            Useful Links
          </h4>
          <ul className="space-y-3 text-gray-600 text-sm font-medium">
            {[
              "About Us",
              "Our Service",
              "What We Do",
              "Our Team",
              "Contact",
            ].map((link) => (
              <li
                key={link}
                className="flex items-center gap-2 hover:text-green-600 cursor-pointer transition"
              >
                <FaAngleRight />
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Solutions */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-6 border-b-2 border-green-800 pb-2 w-max">
            Our Solutions
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm font-medium">
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
                className="flex items-center gap-2 hover:text-green-600 cursor-pointer transition"
              >
                <FaAngleRight />
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
