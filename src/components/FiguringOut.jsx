import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mark Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750768191/Architecture_Interviews_Cosmopolitan_Development_2_zk4bie.mp4',
  },
  {
    name: 'John Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750768186/Founder_And_Friends_Growing_A_Business_wy02cz.mp4',
  },
  {
    name: 'Arvvani Joe',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750768099/Architecture_Interviews_Challenges_Among_Industries_1_ozawpm.mp4',
  },
  {
    name: 'Matchine Mue',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750768044/Architecture_Interviews_Bbe_And_Benefits_1_rncmne.mp4',
  },
];

const FiguringOut = () => {
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
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 -mt-10  ml-24">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-red-800">
          Figuring Out with Divy
        </h2>

        {/* Mobile Left/Right Scroll Buttons */}
        <div className="relative block sm:hidden">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => scrollBy('left')}
              className="bg-black text-white rounded-full p-2 shadow-md hover:bg-green-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => scrollBy('right')}
              className="bg-black text-white rounded-full p-2 shadow-md hover:bg-green-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 scroll-smooth overflow-x-auto sm:overflow-visible px-4 sm:px-0 pb-4"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 inline-block sm:block w-[240px] sm:w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="rounded-lg overflow-hidden">
                  <video
                    src={member.reel}
                    className="w-full aspect-[9/16] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    controls
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiguringOut;
