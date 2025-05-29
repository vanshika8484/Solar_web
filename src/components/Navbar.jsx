import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiSolarPower } from 'react-icons/gi'; // Solar icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Products', path: '/products' },
    { name: 'Work With Us', path: '/workwithus' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center gap-2">
          <GiSolarPower className="text-yellow-500 text-3xl" />
          <span className="text-xl font-bold text-gray-800 tracking-wide">DIVY POWER</span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 transition duration-200">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:items-center gap-8 absolute md:static top-[70px] left-0 w-full md:w-auto bg-white transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:block'}`}>
          {navLinks.map(link => (
            <li key={link.name} className="group">
              <Link
                to={link.path}
                onClick={closeMenu}
                className={`block px-4 py-2 font-medium text-gray-700 hover:text-black relative transition duration-300 ${
                  pathname === link.path ? 'text-black' : ''
                }`}
              >
                {link.name}
                <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
                <span className="absolute right-1/2 -bottom-0.5 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-1/2 group-hover:right-0"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
