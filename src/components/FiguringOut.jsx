import React, { useRef } from "react";

const teamMembers = [
  {
    name: "Architect",
    role: "Architect",
    image:
      "https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg",
    reel:
      "https://res.cloudinary.com/drz2uocug/video/upload/v1753181164/Architecture_Interviews_Cosmopolitan_Development_2_zbw4s1.mp4",
  },
  {
    name: "Architect",
    role: "Architect",
    image:
      "https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg",
    reel:
      "https://res.cloudinary.com/drz2uocug/video/upload/v1753181164/Architecture_Interviews_Evolving_Tech_Using_Solar_1_r7eqrw.mp4",
  },
  {
    name: "Entrepreneur",
    role: "Entrepreneur",
    image:
      "https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg",
    reel:
      "https://res.cloudinary.com/drz2uocug/video/upload/v1753181164/Founder_And_Friends_Solar_And_Hesitation_vzvned.mp4",
  },
  {
    name: "Head of Architect",
    role: "Solar Specialist",
    image:
      "https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg",
    reel:
      "https://res.cloudinary.com/drz2uocug/video/upload/v1753181163/Architecture_Interviews_Challenges_Among_Industries_1_nbvvzb.mp4",
  },
];

const FiguringOut = () => {
  const videoRefs = useRef([]);

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-red-800">
         Figuring out with DIVY with Architects
        </h2>

        {/* Responsive Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-2 sm:px-0">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={member.reel}
                className="w-full max-h-[300px] aspect-[9/16] object-cover rounded-md hover:scale-105 transition-transform duration-300"
                controls
                playsInline
                onPlay={() => handlePlay(index)}
              />
              <p className="mt-2 text-xs text-gray-600">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiguringOut;
