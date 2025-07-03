import React, { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: 'Mark Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751351996/Founder_Mission_And_Vision_naxvpa.mp4',
  },
  {
    name: 'John Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751351688/Founder_And_Friends_Company_Is_A_Group_Company_iaih5d.mp4',
  },
  {
    name: 'Arvvani Joe',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751351804/Founder_Company_Growth_pcuxia.mp4',
  },
  {
    name: 'Matchine Mue 1',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751351804/Founder_And_Friends_Solving_Government_Propaganda_bc76ta.mp4',
  },
  {
    name: 'Matchine Mue 2',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751351837/Founder_1_va6xls.mp4',
  },
  {
    name: 'Matchine Mue 3',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751351593/Founder_2_pu2tf6.mp4',
  },
];

const HoverVideoCard2 = () => {
  const scrollRef = useRef(null);
  const animationFrame = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollPos = 0;

    const autoScroll = () => {
      if (!isPaused && scrollRef.current) {
        scrollPos += 0.5;
        if (scrollPos >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollPos = 0;
        }
        scrollRef.current.scrollLeft = scrollPos;
      }
      animationFrame.current = requestAnimationFrame(autoScroll);
    };

    animationFrame.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame.current);
  }, [isPaused]);

  return (
    <div className="bg-white min-h-screen py-8 px-4 -mt-20 sm:px-6 lg:px-8 GetFontSol">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-center text-xl md:text-3xl font-bold text-green-800 mb-10">
          OUR FOUNDER PHILOSOPHY
        </h2>

        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-hide"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="flex space-x-6 w-max">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <video
                    src={member.reel}
                    className="w-full h-56 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                    controls
                  />
                </div>
                <div className="mt-3 text-left">
                  <h3 className="text-md font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard2;
