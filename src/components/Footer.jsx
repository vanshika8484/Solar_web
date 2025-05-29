import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 px-6 md:px-20 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* Company Info */}
        <div>
          <h3 className="text-3xl font-extrabold mb-8 text-green-600 tracking-wide">
            DIVY POWER
          </h3>
          <p className="text-lg font-semibold mb-6 text-gray-600">Contact Us</p>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition">
              <FaPhoneAlt className="text-green-600" />
              +(1) 123 456 7890
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition">
              <FaPhoneAlt className="text-green-600" />
              +(1) 098 765 4321
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="text-green-600 mt-1" />
              <address className="not-italic text-gray-500 text-sm">
                53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,
                <br />
                Nai Basti Dundaher Ghaziabad,
                <br />
                Uttar Pradesh 201001
              </address>
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition text-sm">
              <FaEnvelope className="text-green-600" />
              divy@gmail.com
            </li>
            <li className="flex items-center gap-3 hover:text-green-600 cursor-pointer transition text-sm">
              <FaEnvelope className="text-green-600" />
              Info@divypower.in
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-semibold mb-8 border-b-2 border-green-600 pb-3 w-max">
            Useful Links
          </h4>
          <ul className="space-y-4 text-gray-600 font-medium">
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

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-8 border-b-2 border-green-600 pb-3 w-max">
            Newsletter
          </h4>
          <p className="mb-8 text-gray-600 max-w-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <form className="flex max-w-md shadow-lg rounded-full overflow-hidden border border-gray-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 transition flex items-center gap-2"
            >
              Subscribe Now <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
