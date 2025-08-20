import React from "react";

const FullScreenVideo = ({ mode = "cover" }) => {
  return (
    <div className="w-full h-[260px] md:h-screen xl:h-screen 2xl:h-screen lg:h-screen relative overflow-hidden bg-black">
      <video
        className={`absolute top-0 left-0 w-full h-full 
          ${mode === "cover" ? "object-cover" : "object-contain"} 
          md:object-cover`}
        src="https://res.cloudinary.com/dcvmuus25/video/upload/v1755670067/Homepage_landing_video_asxqkt.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default FullScreenVideo;
