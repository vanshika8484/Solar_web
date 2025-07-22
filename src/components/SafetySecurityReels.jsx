import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const safetyVideos = [
  {
    name: "Lal Singh - Safety & Security",
    video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181458/Lal_Singh_Safety_And_Security_At_Divy_nk2xbw.mp4",
  },
  {
    name: "Lal Singh - Team Safety",
    video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181457/Lal_Singh_Team_Safety_b0r83u.mp4",
  },
  {
    name: "Kaushlesh Singh - Precautions",
    video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181456/Kaushlesh_Singh_Safety_Precautions_At_Divy_ybrnwh.mp4",
  },
  {
    name: "Kaushlesh - Employee Safety",
    video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181456/Kaushlesh_Employee_Safety_At_Divy_ogdq6o.mp4",
  },
  {
    name: "Rajeev Arora - Safety & Benefits",
    video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181456/Rajeev_Arora_Safety_And_Benefit_At_Divy_mybckj.mp4",
  },
  {
    name: "Asha - Employee Safety",
    video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181455/Asha_Employee_Safety_fnetk3.mp4",
  },
  {
    name: "Riddhi - Team Safety",
    video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181455/Riddhi_Team_Safety_eouwll.mp4",
  },
];


const SafetySecurityReels = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-20 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8">Safety and Security at DIVY</h2>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Video Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {safetyVideos.map((item, index) => (
            <div
              key={index}
              className="w-64 md:w-72 flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <video
                src={item.video}
                controls
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="py-2 text-center font-semibold text-gray-800 group-hover:text-indigo-600">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default SafetySecurityReels;
