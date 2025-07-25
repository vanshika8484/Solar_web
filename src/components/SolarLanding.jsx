import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaTools,
  FaProjectDiagram,
  FaCog,
  FaRecycle,
  FaStethoscope,
  FaHandshake,
  FaGasPump,
  FaBolt,
} from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdSolarPower, MdMemory } from "react-icons/md";
import { GiLightningTrio, GiGroundSprout, GiWaterDrop } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import solarlogo from "../Images/logo2.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      {
        name: "Installation & Commissioning (INC)",
        path: "/Installation_&_Commissioning_(INC)",
        icon: <FaTools />,
      },
      {
        name: "Engineering, Procurement, and Construction (EPC)",
        path: "/Engineering_Procurement_and_Construction_(EPC)",
        icon: <FaProjectDiagram />,
      },
      {
        name: "Operations & Maintenance (O&M)",
        path: "/Operations_&_Maintenance_(O&M)",
        icon: <FaCog />,
      },
      {
        name: "Annual Maintenance Contracts (AMC)",
        path: "/Annual_Maintenance_Contracts(AMC)",
        icon: <FaRecycle />,
      },
      { name: "Health Check ups", path: "/Health_Check_ups", icon: <FaStethoscope /> },
    ],
  },
  { name: "Projects", path: "/projects" },
  {
    name: "Products",
    path: "/products",
    dropdown: [
      { name: "SOLAR PANEL", path: "/Solar-pannel", icon: <MdSolarPower /> },
      { name: "SOLAR PUMP", path: "/solar-pump", icon: <GiWaterDrop /> },
      { name: "MICRO INVERTER", path: "/micro-inverter", icon: <MdMemory /> },
      { name: "Earthing", path: "/earthing", icon: <GiGroundSprout /> },
      { name: "Lightning Arrestor (LA)", path: "/LA", icon: <GiLightningTrio /> },
      { name: "Diesel/Petrol Genset", path: "/Diesel/Petrol%20Genset", icon: <FaGasPump /> },
    ],
  },
  {
    name: "Work With Us",
    path: "/workwithus",
    dropdown: [{ name: "Become our Dealer", path: "/workwithus", icon: <FaHandshake /> }],
  },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

const overlayVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const SolarLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const overlayRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseLeave = (e) => {
    if (overlayRef.current && !overlayRef.current.contains(e.relatedTarget)) {
      setActiveDropdown(null);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setActiveDropdown(null)}>
            <img src={solarlogo} alt="Logo" className="w-12 h-12 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                >
                  {/* Parent Link (click navigates, hover opens dropdown) */}
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 cursor-pointer ${
                        isActive
                          ? "text-orange-500 font-semibold underline underline-offset-4"
                          : activeDropdown === link.name
                          ? "text-orange-500 font-semibold"
                          : "hover:text-orange-400"
                      }`
                    }
                    onClick={() => setActiveDropdown(null)}
                  >
                    {link.name} <IoIosArrowDown className="text-sm" />
                  </NavLink>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setActiveDropdown(null)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 font-semibold underline underline-offset-4"
                      : "hover:text-orange-400"
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* Call & Mobile Menu */}
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
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Panel for Desktop */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            ref={overlayRef}
            key={activeDropdown}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[64px] w-full bg-white shadow-lg z-40"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {navLinks
                .find((l) => l.name === activeDropdown)
                ?.dropdown?.map((subLink) => (
                  <Link
                    key={subLink.name}
                    to={subLink.path}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-4 p-5 hover:bg-gray-100 hover:rounded-xl hover:shadow-lg transition group"
                  >
                    <span className="text-3xl text-green-700 group-hover:scale-110 transition-transform">
                      {subLink.icon || <FaBolt />}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-black">
                        {subLink.name}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SolarLanding;
