import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
const teamMembers = [
  {
    name: 'Asha Gupta',
    role: 'Safety Advocate',
    image: 'https://storage.googleapis.com/a1aa/image/asha-profile.jpg',
    reel: 'https://res.cloudinary.com/drz2uocug/video/upload/v1753180383/Asha_Cheaper_Is_Not_Always_Safer_vuzxb7.mp4',
  },
  {
    name: 'Ateesh Kumar',
    role: 'TATA Solar Partner',
    image: 'https://storage.googleapis.com/a1aa/image/ateesh-profile.jpg',
    reel: 'https://res.cloudinary.com/drz2uocug/video/upload/v1753180381/Ateesh_Tata_Authorised_Solar_Partner_drukkj.mp4',
  },
  {
    name: 'Shivam Singh',
    role: 'Solar Consultant',
    image: 'https://storage.googleapis.com/a1aa/image/shivam-profile.jpg',
    reel: 'https://res.cloudinary.com/drz2uocug/video/upload/v1753180381/Shivam_Choose_Divy_As_Your_Solar_Partner_ag2l1a.mp4',
  },
  {
    name: 'Kaushlesh Sharma',
    role: 'Solar Analyst',
    image: 'https://storage.googleapis.com/a1aa/image/kaushlesh-profile.jpg',
    reel: 'https://res.cloudinary.com/drz2uocug/video/upload/v1753180381/Kaushlesh_We_And_Our_Competitors_fksvib.mp4',
  },
  {
    name: 'Asha Gupta',
    role: 'Warranty Expert',
    image: 'https://storage.googleapis.com/a1aa/image/asha-profile.jpg',
    reel: 'https://res.cloudinary.com/drz2uocug/video/upload/v1753180381/Asha_Warranty_On_Solars_pwji0y.mp4',
  },
  {
    name: 'Rajeev Arora',
    role: 'Quality Head',
    image: 'https://storage.googleapis.com/a1aa/image/rajeev-profile.jpg',
    reel: 'https://res.cloudinary.com/drz2uocug/video/upload/v1753180381/Rajeev_Arora_Our_Quality_Is_Our_Legacy_gejaps.mp4',
  },
  {
    name: 'Asha Gupta',
    role: 'SOP Trainer',
    image: 'https://storage.googleapis.com/a1aa/image/asha-profile.jpg',
    reel: 'https://res.cloudinary.com/drz2uocug/video/upload/v1753180381/Asha_Divy_Power_Sop_s_a7v2yo.mp4',
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
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-3xl  text-red-800 mb-10 About1">
        Choose DIVY as your Solar Partner
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
                  src={member.reel}
                  className="w-full aspect-[9/16] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  controls
                />
              </div>
              <div className="text-left mt-2 px-2 pb-2">
                <div className="text-sm font-semibold text-gray-800"></div>
                <p className="text-xs text-gray-500">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard1;
