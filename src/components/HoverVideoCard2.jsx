import React, { useRef } from "react";

const reelsData = [
  {
    role: "Employees Are Our Partners",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1754415925/Our_Employees_Are_Our_Partner_yvsc5j.mp4",
  },
  {
    role: "25 Years into Energy",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1754415925/We_Believe_In_Solution_Based_Approach_jsbzhw.mp4",
  },
  {
    role: "Company is a Group Company",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1754415924/Our_Company_Is_A_Group_Company_cfa3ux.mp4",
  },
  {
    role: "I Am A Worker Not Owner",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1754415924/Mission_And_Vision_ihqskf.mp4",
  },
  {
    role: "Mission & Vision",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1754415924/I_Am_A_Worker_Not_A_Owner_cysvpa.mp4",
  },
  {
    role: "We Believe in Solution",
    reel: "https://res.cloudinary.com/drz2uocug/video/upload/v1754415924/1_s7ae04.mp4",
  },
];

const HoverVideoCard2 = () => {
  const videoRefs = useRef([]);

  const handlePlayPause = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause();
      }
    });

    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl text-green-800 mb-8 font-bold">
          Our Founder Philosophy
        </h2>

        {/* Mobile: Grid 3 cols, Desktop: Centered row */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-2 rounded-lg hover:shadow-lg transition-all w-full sm:w-full md:w-[180px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.reel}
                  className="w-full aspect-[9/16] object-cover"
                  playsInline
                />
                <button
                  onClick={() => handlePlayPause(index)}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-[10px] px-2 py-1 rounded-full hover:bg-green-700 transition"
                >
                  Play / Pause
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverVideoCard2;
