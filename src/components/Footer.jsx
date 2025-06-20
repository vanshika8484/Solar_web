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
    <div className="bg-[#00122E] text-white GetfontHomeDash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call Back Consultation Box */}
        <div className="mt-10 mb-8 border border-green-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-green-800 font-semibold leading-tight">
            CALL US NOW
            <p className="font-bold text-white text-base leading-tight mt-1">
              Free Consultation by <br /> Calling
              <span className="text-green-800"> +91 9310259325</span>
            </p>
          </div>
          <form className="flex gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter your number"
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent flex-grow sm:w-64"
            />
            <button
              type="submit"
              className="bg-green-800 text-white rounded-md px-5 py-2 font-semibold hover:bg-green-700 transition"
            >
              Call Me Back
            </button>
          </form>
        </div>

        {/* Main Footer Section */}
        <footer className="pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold border-b border-green-800 pb-2 mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2 text-sm text-[#B0B9D1]">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +91 9310259325
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +91 0987654321
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> divy@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> info@divypower.in
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-sm font-semibold border-b border-green-800 pb-2 mb-4">
                Useful Links
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[#B0B9D1]">
                {routes.map((route) => (
                  <NavLink
                    key={route.name}
                    to={route.path}
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaAngleRight /> {route.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Our Solutions + Social Icons */}
            <div>
              <h3 className="text-sm font-semibold border-b border-green-800 pb-2 mb-4">
                Our Solutions
              </h3>
              <ul className="text-[#B0B9D1] text-sm space-y-2">
                {[
                  "Solar Rooftop",
                  "Battery Storage",
                  "Solar Street Lights",
                  "Hybrid Solar Systems",
                  "Solar Water Pump",
                  "EV Charging Stations",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 hover:text-white">
                    <FaAngleRight /> {item}
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="flex gap-2 mt-4">
                <a
                  href="#"
                  className="bg-white text-[#00122E] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="bg-white text-[#00122E] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  className="bg-white text-[#00122E] w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <FaDribbble size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="bg-green-800 rounded-full max-w-md flex items-center px-5 py-3 gap-4 mb-8">
            <img
            src="https://storage.googleapis.com/a1aa/image/7b3a6d02-f780-4d75-352b-f382cb430dec.jpg"
            alt="Newsletter Icon"
            className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0"
          />
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full flex-grow px-4 py-2 text-sm text-white placeholder-white bg-green-800 focus:outline-none"
            />
            <button className="bg-green-800 border border-white rounded-full px-4 py-1 text-white text-sm font-semibold flex items-center gap-1 hover:bg-white hover:text-green-800 transition">
              Subscribe <i className="fas fa-plus" />
            </button>
          </div>

          {/* Address */}
          <p className="text-[#B0B9D1] text-xs flex items-center gap-2 mb-4">
            <FaMapMarkerAlt />
            53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar, Nai Basti Dundaher Ghaziabad, Uttar Pradesh 201001
          </p>

          {/* Copyright */}
          <p className="text-[#B0B9D1] text-xs text-center">
            &copy; {new Date().getFullYear()} DIVY POWER. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
