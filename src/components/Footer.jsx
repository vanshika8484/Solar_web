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
    <footer className="bg-[#03132B] text-white GetFontSol px-6 py-12 rounded-t-3xl">
      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1">
            Contact Info
          </h4>
          <ul className="text-blue-100 text-sm space-y-3">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-white" />
              <a href="tel:+919310259325" className="hover:text-white">
                +91 9310259325
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-white" />
              <a href="tel:+919876543210" className="hover:text-white">
                +91 0987654321
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-white" />
              <a href="mailto:divy@gmail.com" className="hover:text-white">
                divy@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-white" />
              <a href="mailto:info@divypower.in" className="hover:text-white">
                info@divypower.in
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1">
            Useful Links
          </h4>
          <ul className="text-blue-100 text-sm space-y-3">
            {routes.map((route) => (
              <li key={route.name} className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-white" />
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Solutions */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1">
            Our Solutions
          </h4>
          <ul className="text-blue-100 text-sm space-y-3">
            {solutions.map((item) => (
              <li key={item} className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-blue-300 pb-1">
            Office Address
          </h4>
          <address className="text-blue-100 text-sm leading-relaxed not-italic mb-6">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-white" />
              <span>
                53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,<br />
                Nai Basti Dundaher Ghaziabad,<br />
                Uttar Pradesh 201001
              </span>
            </div>
          </address>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-white text-[#03132B] w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-200"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-[#03132B] w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-200"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-[#03132B] w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-200"
              aria-label="Dribbble"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-blue-100">
        &copy; {new Date().getFullYear()} DIVY POWER. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
