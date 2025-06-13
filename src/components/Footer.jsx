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

const solutions = [
  "Solar Rooftop",
  "Solar Water Pump",
  "EV Charging Stations",
  "Battery Storage Solutions",
  "Solar Street Lights",
  "Hybrid Solar Systems",
];

const Footer = () => {
  return (
    <footer className="bg-[#03132B] text-white GetFontSol px-6 py-8 rounded-t-3xl text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-2 border-b border-blue-300 pb-1">
            Contact Info
          </h4>
          <ul className="text-blue-100 space-y-2 leading-relaxed">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-white" />
              <a href="tel:+919310259325" className="hover:text-white">+91 9310259325</a>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-white" />
              <a href="tel:+919876543210" className="hover:text-white">+91 0987654321</a>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-white" />
              <a href="mailto:divy@gmail.com" className="hover:text-white">divy@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-white" />
              <a href="mailto:info@divypower.in" className="hover:text-white">info@divypower.in</a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-base font-semibold mb-2 border-b border-blue-300 pb-1">Useful Links</h4>
          <div className="grid grid-cols-2 gap-2 text-blue-100">
            {routes.map((route) => (
              <div key={route.name} className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-white" />
                <NavLink to={route.path}>{route.name}</NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions + Social */}
        <div>
          <h4 className="text-base font-semibold mb-2 border-b border-blue-300 pb-1">Our Solutions</h4>
          <ul className="text-blue-100 space-y-2 leading-relaxed">
            {solutions.map((item) => (
              <li key={item} className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 mt-4">
            <a href="#" className="bg-white text-[#03132B] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="bg-white text-[#03132B] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="bg-white text-[#03132B] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200">
              <FaDribbble size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Address + Bottom */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-gray-700 pt-4">
        <div className="flex items-start gap-3 text-blue-100 leading-snug text-xs">
          <FaMapMarkerAlt className="mt-0.5 text-white" />
          <span>
            53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar, Nai Basti Dundaher Ghaziabad, Uttar Pradesh 201001
          </span>
        </div>

        <div className="text-center text-xs mt-4 text-blue-100">
          &copy; {new Date().getFullYear()} DIVY POWER. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
