import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: 'Mark Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751353920/Shruti_Growth_At_Divy_kbqin1.mp4',
  },
  {
    name: 'John Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354105/Riddhi_Growth_At_Divy_czkigm.mp4',
  },
  {
    name: 'Arvvani Joe',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354118/Rishika_Growth_At_Divy_r3mkm1.mp4',
  },
  {
    name: 'Matchine Mue',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354236/Kaushlesh_Singh_Growth_At_Divyy_ztexms.mp4',
  },
  {
    name: 'Matchine Mue',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354256/Asha_Growth_At_Divy_mua1bn.mp4',
  },
  {
    name: 'Matchine Mue',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354256/Kaushlesh_Growth_At_Divy_jshtlv.mp4',
  },
];

const HoverVideoCard3 = () => {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12 relative -mt-[120px]">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-green-800 mb-10">
          Growth At Divy
        </h2>

        {/* Desktop Scroll Buttons */}
        <div className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            onClick={() => scrollBy("left")}
            className="bg-black text-white rounded-full shadow p-3 hover:bg-green-600 active:scale-95 transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button
            onClick={() => scrollBy("right")}
            className="bg-black text-white rounded-full shadow p-3 hover:bg-green-600 active:scale-95 transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Scrollable Card Row with Padding */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide py-4 px-4 sm:px-8"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] sm:w-72 bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <video
                    src={member.reel}
                    className="w-full aspect-[9/16] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    controls
                  />
                </div>
                <div className="mt-3 text-left">
                  <p className="text-sm text-gray-600">Topic: Growth At Divy</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Buttons */}
        <div className="flex sm:hidden justify-center gap-6 mt-4">
          <button
            onClick={() => scrollBy("left")}
            className="bg-black text-white rounded-full p-3 shadow hover:bg-green-600 transition active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="bg-black text-white rounded-full p-3 shadow hover:bg-green-600 transition active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard3;
