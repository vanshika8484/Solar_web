import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import solarlogo from '../Images/logo2.png';
import './SolarLanding.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services', // Main page for services
    dropdown: [
      { name: 'Installation & Commissioning (INC)', path: '/Installation_&_Commissioning_(INC)' },
      { name: 'Engineering, Procurement, and Construction (EPC)', path: '/Engineering_Procurement_and_Construction_(EPC)' },
      { name: 'Operations & Maintenance (O&M)', path: '/Operations_&_Maintenance_(O&M)' },
      { name: 'Annual Maintenance Contracts (AMC)', path: '/Annual_Maintenance_Contracts(AMC)' },
      { name: 'Health Check ups', path: '/Health_Check_ups' },
    ],
  },
  { name: 'Projects', path: '/projects' },
  {
    name: 'Products',
    path: '/products', // Main page for products
    dropdown: [
      { name: 'SOLAR PANEL', path: '/Solar-pannel' },
      { name: 'SOLAR PUMP', path: '/solar-pump' },
      { name: 'MICRO INVERTER', path: '/micro-inverter' },
      { name: 'Earthing', path: '/earthing' },
      { name: 'Lightning Arrestor (LA)', path: '/LA' },
      { name: 'Diesel/Petrol Genset', path: '/Diesel/Petrol%20Genset' },
    ],
  },
  {
    name: 'Work With Us',
    path: '/workwithus', // Main page for workwithus
    dropdown: [
      { name: 'Become our Dealer', path: '/workwithus' },
      // { name: 'Become our Partner', path: '/workwithus/partner' },
    ],
  },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

const SolarLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => setActiveDropdown(name);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <div
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={solarlogo} alt="Logo" className="w-12 h-12 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Parent NavLink */}
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center gap-1 text-orange-500 font-semibold'
                      : 'flex items-center gap-1 hover:text-orange-400 transition'
                  }
                >
                  {link.name} <IoIosArrowDown className="text-sm" />
                </NavLink>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-200 transform origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 ${activeDropdown === link.name ? 'opacity-100 scale-y-100' : ''
                    }`}
                >
                  {link.dropdown.map((subLink) => (
                    <NavLink
                      key={subLink.name}
                      to={subLink.path}
                      className="block px-5 py-2 text-sm text-gray-800 hover:bg-orange-100 hover:text-orange-600 transition"
                    >
                      {subLink.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-orange-500 font-semibold underline underline-offset-4'
                    : 'hover:text-orange-400 transition'
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Call & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a href="tel:+919310259325" className="hidden md:flex items-center gap-2">
            <div className="bg-white p-2 rounded-full shadow">
              <FaPhoneAlt className="text-green-800" />
            </div>
            <div className="text-sm text-black">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </a>
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 rounded-lg px-6 py-4 shadow-lg">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="mb-2">
                {/* Main Page Link + Dropdown */}
                <div className="flex justify-between items-center">
                  <NavLink
                    to={link.path}
                    className="text-base font-medium text-white hover:text-orange-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.name ? null : link.name)
                    }
                    className="text-white"
                  >
                    <IoIosArrowDown
                      className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                </div>
                {activeDropdown === link.name && (
                  <div className="pl-4 mt-1">
                    {link.dropdown.map((subLink) => (
                      <NavLink
                        key={subLink.name}
                        to={subLink.path}
                        className="block text-sm text-gray-300 hover:text-orange-400 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subLink.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className="block text-base font-medium text-white hover:text-orange-400 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            )
          )}
          <div className="border-t border-gray-700 my-3"></div>
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full">
              <FaPhoneAlt className="text-green-800" />
            </div>
            <div className="text-sm text-white">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolarLanding;
