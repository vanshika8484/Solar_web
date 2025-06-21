import React from "react";
import { FaBolt } from "react-icons/fa";

const ElectricitySavedCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center h-[700px] p-4 font-['Inter']">
      <div className="  p-6 w-72 sm:w-80">
        <h2 className="text-gray-700 font-semibold text-lg mb-6">
          Electricity Saved
        </h2>

        {/* SVG Circle */}
        <div className="relative flex justify-center items-center mb-6">
          <svg
            className="w-40 h-40"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#D9D9D9"
              strokeWidth="20"
            />
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
            <span className="text-black font-semibold text-3xl leading-none">
              75%
            </span>
            <span className="text-gray-400 text-sm mt-1">Electricity</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div
              className="w-5 h-5 rounded-sm"
              style={{ backgroundColor: "#EF4444" }}
            ></div>
            <span className="text-gray-700 text-sm">Electricity</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-5 h-5 rounded-sm"
              style={{ backgroundColor: "#22C55E" }}
            ></div>
            <span className="text-gray-700 text-sm">Solar Energy</span>
          </div>
        </div>

        <p className="text-gray-700 font-semibold text-sm">
          75% <span className="font-normal">electricity saved</span>
        </p>
      </div>
    </div>
  );
};

export default ElectricitySavedCard;
