// components/SocialIcons.jsx
import React, { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';

const iconStyle = `w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-md`;

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcons(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Left Side Icons - Facebook, Twitter (X), LinkedIn */}
      <div
        className={`flex fixed top-1/2 left-3 -translate-y-1/2 flex-col gap-16 sm:gap-28 z-[9999] transition-opacity duration-500 ${
          showIcons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-blue-600`}
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-black`}
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-blue-700`}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Right Side Icons - GitHub, Instagram, YouTube */}
      <div
        className={`flex fixed top-1/2 right-3 -translate-y-1/2 flex-col gap-16 sm:gap-28 z-[9999] transition-opacity duration-500 ${
          showIcons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-gray-900`}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600`}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-red-600`}
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
