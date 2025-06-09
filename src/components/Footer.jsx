import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Products", path: "/products" },
  { name: "Work With Us", path: "/workwithus" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#03132B] GetFontSol text-white rounded-t-3xl px-6 py-10 max-w-screen-xl mx-auto ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left: Contact Info including Address */}
        <div className="md:w-1/3 grid grid-cols-2 gap-x-8 gap-y-6">
          {/* Phones */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1 w-max">
              Contact Phones
            </h4>
            <ul className="space-y-3 text-blue-100 text-sm font-medium">
              <li className="flex items-center gap-3 hover:text-white transition">
                <FaPhoneAlt className="text-white" />
                <a href="tel:+11234567890">+91 9310259325</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition">
                <FaPhoneAlt className="text-white" />
                <a href="tel:+10987654321">+91 0987654321</a>
              </li>
            </ul>
          </div>

          {/* Emails */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1 w-max">
              Emails
            </h4>
            <ul className="space-y-3 text-blue-100 text-sm font-medium">
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

          {/* Address */}
          <div className="col-span-2">
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1 w-max">
              Address
            </h4>
            <address className="not-italic leading-snug text-blue-100 text-sm">
              53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,<br />
              Nai Basti Dundaher Ghaziabad,<br />
              Uttar Pradesh 201001
            </address>
          </div>
        </div>

        {/* Right: Useful Links and Our Solutions side by side */}
        <div className="md:w-2/3 flex gap-12">
          {/* Useful Links */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1 w-max">
              Useful Links
            </h4>
            <ul className="space-y-3 text-blue-100 text-sm font-medium">
              {routes.map((route) => (
                <li
                  key={route.name}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaAngleRight className="text-white" />
                  <NavLink to={route.path} className="hover:text-white">
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1 w-max">
              Our Solutions
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-100 text-sm font-medium">
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
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-blue-100 text-sm">
        <div>&copy; {new Date().getFullYear()} DIVY POWER. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#03132B] hover:bg-gray-200"
          >
            <FaFacebookF className="text-base" />
          </button>
          <button
            aria-label="Instagram"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#03132B] hover:bg-gray-200"
          >
            <FaInstagram className="text-base" />
          </button>
          <button
            aria-label="Dribbble"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#03132B] hover:bg-gray-200"
          >
            <FaDribbble className="text-base" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
