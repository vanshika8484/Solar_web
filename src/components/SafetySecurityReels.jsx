import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const safetyVideos = [
  { name: "Lal Singh - Safety & Security", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181458/Lal_Singh_Safety_And_Security_At_Divy_nk2xbw.mp4" },
  { name: "Lal Singh - Team Safety", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181457/Lal_Singh_Team_Safety_b0r83u.mp4" },
  { name: "Kaushlesh Singh - Precautions", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181456/Kaushlesh_Singh_Safety_Precautions_At_Divy_ybrnwh.mp4" },
  { name: "Kaushlesh - Employee Safety", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181456/Kaushlesh_Employee_Safety_At_Divy_ogdq6o.mp4" },
  { name: "Rajeev Arora - Safety & Benefits", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181456/Rajeev_Arora_Safety_And_Benefit_At_Divy_mybckj.mp4" },
  { name: "Asha - Employee Safety", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181455/Asha_Employee_Safety_fnetk3.mp4" },
  { name: "Riddhi - Team Safety", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181455/Riddhi_Team_Safety_eouwll.mp4" },
];

const SafetySecurityReels = () => {
  const scrollRef = useRef(null);
  const videoRefs = useRef([]);

  // Scroll videos horizontally
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Pause all other videos when one plays
  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };

  return (
    <section className="mt-16 px-4 md:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        Safety and Security at DIVY
      </h2>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Video Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-6"
        >
          {safetyVideos.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-52 md:w-60 h-[400px] flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden group  transition-transform duration-300"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                controls
                playsInline
                onPlay={() => handlePlay(index)}
                className="w-full h-[400px] object-cover rounded-t-xl"
              />
              <div className="py-2 text-center text-sm font-semibold text-gray-700 group-hover:text-green-600">
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
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default SafetySecurityReels;
