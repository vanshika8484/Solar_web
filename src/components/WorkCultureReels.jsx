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
      <h2 className="text-3xl font-bold text-center mb-8">Work Culture at DIVY</h2>
      <div className="relative">
        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Video Scroll Section */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {videoData.map((item, index) => (
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

        {/* Right button */}
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

export default WorkCultureReels;
