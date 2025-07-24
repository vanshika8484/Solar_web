import React, { useRef } from "react";

const reelsData = [
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180799/Kaushlesh_Singh_Growth_At_Divyy_b7cnhq.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180798/Kaushlesh_Growth_At_Divy_egqssb.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180798/Shruti_Growth_At_Divy_qolr0f.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180798/Asha_Growth_At_Divy_gklhuy.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180798/Rajeev_Arora_Growth_At_Divy_With_Updated_Tech_qmcrud.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1753180797/Riddhi_Growth_At_Divy_f94d23.mp4",
  },
];

const HoverVideoCard3 = () => {
  const videoRefs = useRef([]);

  // Pause all videos except the current one
  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-green-800 mb-8">
          Growth At Divy
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg w-56 shadow p-2 hover:shadow-lg transition-all"
            >
              <div className="relative rounded-md overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.reel}
                  className="w-full aspect-[9/16] object-cover rounded-md hover:scale-105 transition-transform duration-300"
                  controls
                  playsInline
                  onPlay={() => handlePlay(index)}
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

export default HoverVideoCard3;
