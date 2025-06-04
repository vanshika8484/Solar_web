import React from "react";
import didiImg from "../Images/didi.png"; // Replace with your local image if needed

const BreakTheMyth = () => {
  return (
    <div className="bg-[#f8f7f0] w-full px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Left Side: Text */}
      <div className="flex flex-col space-y-4 sm:max-w-3xl">
        <p className="text-green-600 font-semibold tracking-widest text-sm sm:text-base uppercase">
          BREAK THE MYTH
        </p>
        <h1 className="text-black text-3xl sm:text-2xl font-sans GetFontSol leading-tight">
          Solar Se Bachat Hoti Hai, Kharcha Nahi
        </h1>
      </div>

      {/* Right Side: Button and Image */}
      <div className="flex flex-col items-end mt-6 sm:mt-0 space-y-4">
        <button
          type="button"
          className="bg-green-600 text-white text-base GetfontHomeDash rounded-lg px-8 py-4 whitespace-nowrap "
        >
          Lagwane ke paise kahan se laayein?
        </button>

        <div className="flex flex-col items-center">
          <img
            src={didiImg}
            alt="Roshni Didi"
            className="block w-[120px] h-[140px] object-contain"
          />
          
        </div>
      </div>
    </div>
  );
};

export default BreakTheMyth;
