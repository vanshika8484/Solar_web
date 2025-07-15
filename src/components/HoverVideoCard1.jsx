import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750682931/Kaushlesh_We_And_Our_Competitors_fqtpmh.mp4',
    username: "Kaushlesh Agarwal",
    caption: "Topic : We And Our Competitors",
  },
  {
    videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751711628/Shivam_Choose_Divy_As_Your_Solar_Partner_1_cy0ey7.mp4',
    username: "Shivam Shengar",
    caption: "Topic :Divy As Your Solar Partner",
  },
  {
    videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750683018/Rajeev_Arora_Our_Quality_Is_Our_Legacy_xvwpmw.mp4',
    username: " Rajeev Arora",
    caption: "Topic : Our Quality Is Our Legacy",
  },
  {
    videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750683050/Ateesh_Tata_Authorised_Solar_Partner_tpssdt.mp4',
    username: "Ateesh Kumar",
    caption: "Topic : Divy Tata Authorised Solar Partner",
  },
  {
    videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750683064/Asha_Divy_Power_Sop_s_elrwrz.mp4',
    username: "Asha Gupta",
    caption: "Topic : SOP's of Divy Power",
  },
  {
    videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750683064/Asha_Warranty_On_Solars_m82qbv.mp4',
    username: "Asha Gupta",
    caption: "Topic : Warranty On Solars",
  },
];

const HoverVideoCard1 = () => {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 -mt-10">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-3xl font-bold text-red-800 mb-10">
          Figuring Out with Divy
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scrollBy('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-20 hover:bg-green-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scrollBy('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-20 hover:bg-green-700"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth whitespace-nowrap px-2 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="rounded-lg overflow-hidden">
                <video
                  src={member.videoSrc}
                  className="w-full aspect-[9/16] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  controls
                />
              </div>
              <div className="text-left mt-2 px-2 pb-2">
                <div className="text-sm font-semibold text-gray-800"></div>
                <p className="text-xs text-gray-500">{member.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard1;
