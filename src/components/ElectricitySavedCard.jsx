import React from "react";
import { FaBolt } from "react-icons/fa";

const ElectricitySavedCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center h-[400px] lg:h-[610px] md:h-[610px] xl:h-[610px] 2xl:h-[610px]  p-4 font-['Inter']">
      <div className="flex flex-col items-center justify-center p-6 w-72 sm:w-80">
        <h2 className="text-gray-700 font-semibold text-lg mb-4">
          Electricity Saved
        </h2>

        {/* SVG Circle */}
        <div className="relative flex justify-center items-center mb-4">
          <svg
            className="w-36 h-36"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle */}
            <circle cx="80" cy="80" r="70" stroke="#D9D9D9" strokeWidth="20" />
            {/* Red Arc - Electricity */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#EF4444"
              strokeWidth="20"
              strokeDasharray="87.96 439.82"
              strokeDashoffset="0"
              strokeLinecap="round"
              transform="rotate(-90 80 80)"
            />
            {/* Green Arc - Solar Energy */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#22C55E"
              strokeWidth="20"
              strokeDasharray="351.86 439.82"
              strokeDashoffset="-87.96"
              strokeLinecap="round"
              transform="rotate(-90 80 80)"
            />
          </svg>

          {/* Center Icon and Text */}
          <div className="absolute flex flex-col items-center -mt-2">
            <FaBolt className="text-black text-2xl mb-1" />
            <span className="text-black font-semibold text-2xl leading-none">
              75%
            </span>
            <span className="text-gray-400 text-xs mt-1">Electricity</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: "#EF4444" }}
            ></div>
            <span className="text-gray-700 text-xs">Electricity</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: "#22C55E" }}
            ></div>
            <span className="text-gray-700 text-xs">Solar Energy</span>
          </div>
        </div>

        <p className="text-gray-700 font-semibold text-sm text-center">
          75% <span className="font-normal">electricity saved</span>
        </p>
      </div>
    </div>
  );
};

export default ElectricitySavedCard;
