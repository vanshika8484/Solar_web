import React from 'react';

const teamMembers = [
  {
    name: 'Mark Makana',
    role: 'Solar Specialist',
    image: 'https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg',
    reel: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1750768191/Architecture_Interviews_Cosmopolitan_Development_2_zk4bie.mp4', // Replace with actual video URL
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
  return (
    <div className="bg-white min-h-screen py-8 px-4 -mt-30 sm:px-6 lg:px-8 About ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl About1 mb-8 text-red-800">Figuring Out with Divy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 relative hover:shadow-lg transition-all GetFontSol">
              <div className="relative rounded-lg overflow-hidden GetFontSol">
                <video
                  src={member.reel}
                  alt={member.name}
                  className="w-full h-96 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                  controls
                />
                {/* <button
                  aria-label={`Play video for ${member.name}`}
                  className="absolute bottom-3 left-3 bg-green-800 hover:bg-green-700 text-white rounded-full p-3 shadow-md"
                >
                  
                </button> */}
              </div>
              {/* <div className="mt-3 text-center">
                <h3 className="text-lg GetFontSol">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiguringOut;
