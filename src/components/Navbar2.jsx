import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaClock, FaPhoneAlt, FaFacebookF,
  FaInstagram, FaTwitter, FaLinkedinIn
} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { GiSolarPower } from 'react-icons/gi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Products', path: '/products' },
  { name: 'Work With Us', path: '/workwithus' },
  { name: 'Contact', path: '/contact' },
];

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Info */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2 text-sm text-gray-600 border-b">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-green-600" />
            <span>53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,
              Nai Basti Dundaher Ghaziabad,
              Uttar Pradesh 201001</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-green-600" />
            <span>Sunday – Friday: <strong>9 am – 8 pm</strong></span>
          </div>
        </div>
        <div className="hidden md:flex gap-4 text-lg">
          <FaFacebookF className="hover:text-green-600 cursor-pointer" />
          <FaInstagram className="hover:text-green-600 cursor-pointer" />
          <FaTwitter className="hover:text-green-600 cursor-pointer" />
          <FaLinkedinIn className="hover:text-green-600 cursor-pointer" />
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">

          <Link to="/" className="flex items-center gap-2">
            <GiSolarPower className="text-yellow-500 text-3xl" />
            <span className="text-xl font-bold text-gray-800 tracking-wide">DIVY POWER</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-base font-medium text-gray-900">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'text-green-600 font-semibold' : 'hover:text-green-600'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-4">
          {/* Call Info */}
          <div className="hidden md:flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-full">
              <FaPhoneAlt className="text-green-600" />
            </div>
            <div className="text-sm">
              <p className="text-gray-700 font-medium">Requesting A Call:</p>
              <p className="font-bold text-gray-900">(629) 555-0129</p>
            </div>
          </div>

          {/* Get a Quote Button */}
          <button className="hidden md:flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Get a quote →
          </button>

          {/* Search Toggle */}
          <FiSearch
            className="text-xl text-gray-700 cursor-pointer hover:text-green-600"
            onClick={() => setShowSearch(!showSearch)}
          />

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Search Input */}
      {showSearch && (
        <div className="w-full px-4 md:px-8 pb-3 transition-all duration-300 ease-in-out">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-6 bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0'
          }`}
      >
        {navLinks.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className="block py-2 text-base font-medium text-gray-800 hover:text-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">
          Get a quote →
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
