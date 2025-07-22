import React from "react";
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
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl About1 text-green-800 mb-10">
          Growth At Divy
        </h2>

        {/* Grid: 2 cols on mobile, 3 cols on large screen */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all"
            >
              <div className="relative rounded-lg overflow-hidden">
                <video
                  src={reel.reel}
                  className="w-full aspect-[9/16] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  controls
                />
              </div>
              <p className="mt-3 text-xs text-gray-500 text-center font-medium">
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
