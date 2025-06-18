// components/SocialIcons.jsx
import React, { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const iconStyle = `w-10 h-10 rounded-md flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-200`;

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Left Side Icons */}
      <div
        className={`fixed top-1/2 left-4 -translate-y-1/2 flex flex-col lg:gap-28 md:gap-28 gap-24 z-[9999] transition-opacity duration-500 ${
          showIcons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-blue-600`}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-sky-400`}
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-blue-700`}
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Right Side Icons */}
      <div
        className={`fixed top-1/2 right-4 -translate-y-1/2 flex flex-col lg:gap-28 md:gap-28 gap-24 z-[9999] transition-opacity duration-500 ${
          showIcons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-gray-800`}
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500`}
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-red-600`}
        >
          <FaYoutube />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
