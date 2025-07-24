import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videoData = [
  { name: "Vivek", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181318/Vivek_Our_Culture_mfuutx.mp4" },
  { name: "Rajeev Arora - Teamwork", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181317/Rajeev_Arora_Team_Work_Culture_At_Divy_gxihbm.mp4" },
  { name: "Lal Singh", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181316/Lal_Singh_Our_Culture_Is_Our_Legacy_aenhnl.mp4" },
  { name: "Shivam", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181315/Shivam_Work_Culture_iefwij.mp4" },
  { name: "Riddhi", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181315/Riddhi_Work_Culture_didwqt.mp4" },
  { name: "Rajeev Arora - Legacy", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181315/Rajeev_Arora_Our_Culture_Is_Our_Legacy_nztj89.mp4" },
  { name: "Asha", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181314/Asha_Team_Work_Culture_nbkmlj.mp4" },
  { name: "Kaushlesh Singh", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181314/Kaushlesh_Singh_Our_Culture_Is_Our_Legacy_d0d100.mp4" },
  { name: "Bhawna", video: "https://res.cloudinary.com/drz2uocug/video/upload/v1753181313/Bhawna_Our_Culture_zidwcp.mp4" },
];

const WorkCultureReels = () => {
  const scrollRef = useRef(null);
  const videoRefs = useRef([]);

  // Scroll horizontally
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Pause all other videos when one starts playing
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
        Work Culture at DIVY
      </h2>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Video Scroll Section */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-8"
        >
          {videoData.map((item, index) => (
            <div
              key={index}
              className="w-60 h-[400px] sm:w-56 md:w-64 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden group transition-transform duration-300"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                controls
                playsInline
                onPlay={() => handlePlay(index)}
                className="w-60 h-[400px] object-cover rounded-t-xl"
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

export default WorkCultureReels;
