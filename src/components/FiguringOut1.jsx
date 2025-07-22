import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reelsData = [
  {
    videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180180/Riddhi_Go_Solar_Save_Environment_kroi64.mp4",
    username: "Riddhi Agarwal",
    caption: "Reel 1: Go Solar, Save Environment",
  },
  {
    videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180182/Kaushlesh_Source_Of_Renewable_Energy_wvveuh.mp4",
    username: "Kaushlesh Sharma",
    caption: "Reel 2: Source of Renewable Energy",
  },
  {
    videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180181/Ateesh_Make_Your_Future_Bright_With_Solar_jhgwuu.mp4",
    username: "Ateesh Kumar",
    caption: "Reel 3: Make Your Future Bright With Solar",
  },
  {
    videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180181/Founder_And_Friends_Save_Environment_With_Solar_sqldlz.mp4",
    username: "Divy Power Team",
    caption: "Reel 4: Founder and Friends Save Environment",
  },
  {
    videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180180/Shivam_Go_Solar_Save_Environment_asbrgo.mp4",
    username: "Shivam Singh",
    caption: "Reel 5: Go Solar, Save Environment",
  },
  {
    videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180181/Ateesh_Breaking_The_Myth_oifrah.mp4",
    username: "Ateesh Kumar",
    caption: "Reel 6: Breaking The Myth About Solar",
  },
];


const FiguringOut1 = () => {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12 relative -mt-[120px]">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-green-800 mb-10">
        Breaking the Myth, Switch to Solar

        </h2>

        {/* Desktop/Tablet Arrows */}
        <div className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            onClick={() => scrollBy("left")}
            className="bg-black text-white rounded-full shadow p-3 hover:bg-green-600 active:scale-95 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button
            onClick={() => scrollBy("right")}
            className="bg-black text-white rounded-full shadow p-3 hover:bg-green-600 active:scale-95 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Video Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide py-4"
        >
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 sm:w-72 bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all"
            >
              <div className="relative rounded-lg overflow-hidden">
                <video
                  src={reel.videoSrc}
                  className="w-full aspect-[9/16] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  controls
                />
              </div>
              <div className="mt-3 text-sm text-gray-700 font-semibold">
               
              </div>
              <p className="text-xs text-gray-500">{reel.caption}</p>
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex sm:hidden justify-center gap-6 mt-4">
          <button
            onClick={() => scrollBy("left")}
            className="bg-black text-white rounded-full p-3 shadow hover:bg-green-600 transition active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="bg-black text-white rounded-full p-3 shadow hover:bg-green-600 transition active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiguringOut1;
