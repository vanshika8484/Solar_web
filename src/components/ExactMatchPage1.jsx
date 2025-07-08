import React from "react";

import L1 from '../Images/P1.jpg';
import L2 from '../Images/P2.png';
import L3 from '../Images/P3.png';
import L4 from '../Images/P4.jpg';
import L5 from '../Images/P5.png';
import L6 from '../Images/P6.png';
import L7 from '../Images/P7.jpg';
import L8 from '../Images/P8.png';

const logos = [L1, L2, L3, L4,L5,L6,L7,L8];

export default function ExactMatchPage1() {
  return (
    <div className="bg-[#f8f7f0] min-h-screen About1">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl  font-bold text-center pt-10 text-gray-800">
        Our Clients
      </h2>

      {/* Animated Logos */}
      <div className="overflow-hidden py-10 sm:py-16 -mt-8">
        <div
          className="flex space-x-10 px-4 sm:px-8"
         
          
        >
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-[100px] w-[120px] object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
