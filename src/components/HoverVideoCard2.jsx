import React, { useRef } from "react";

const reelsData = [
  {
    role: "Employees Are Our Partners",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180630/Founder_And_Friends_Our_Employees_Are_Our_Partners_q8rdvn.mp4",
  },
  {
    role: "25 Years into Energy",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180629/Founder_1_mlm9ac.mp4",
  },
  {
    role: "Company is a Group Company",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180628/Founder_And_Friends_Company_Is_A_Group_Company_rjj1dj.mp4",
  },
  {
    role: "I Am A Worker Not Owner",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180628/Founder_I_Am_A_Worker_Not_Owner_k2jg2k.mp4",
  },
  {
    role: "Mission & Vision",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180628/Founder_Mission_And_Vision_dtyyay.mp4",
  },
  {
    role: "We Believe in Solution",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180628/Founder_We_Believe_In_Solution_avwksa.mp4",
  },
];

const HoverVideoCard2 = () => {
  const videoRefs = useRef([]);

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((v, i) => {
      if (i !== currentIndex && v && !v.paused) v.pause();
    });
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl text-green-800 mb-8">
          Our Founder Philosophy
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="bg-white  shadow-md p-2 hover:shadow-lg transition-all w-60 h-full"
            >
              <div className="relative overflow-hidden ">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.reel}
                  className="w-full aspect-[9/16] object-cover  hover:scale-105 transition-transform duration-300"
                  controls
                  onPlay={() => handlePlay(index)}
                  playsInline
                />
              </div>
              <p className="mt-2 text-[10px] sm:text-xs text-gray-600 text-center font-medium">
                {reel.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard2;
