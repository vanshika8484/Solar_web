import React from "react";

const reelsData = [
  {
    role: "Mission & Vision",
    reel:
      "https://res.cloudinary.com/dpopicwcb/video/upload/v1751351996/Founder_Mission_And_Vision_naxvpa.mp4",
  },
  {
    role: "Company is a Group Company",
    reel:
      "https://res.cloudinary.com/dpopicwcb/video/upload/v1751351688/Founder_And_Friends_Company_Is_A_Group_Company_iaih5d.mp4",
  },
  {
    role: "Company & Growth",
    reel:
      "https://res.cloudinary.com/dpopicwcb/video/upload/v1751351804/Founder_Company_Growth_pcuxia.mp4",
  },
  {
    role: "Solving Government Propaganda",
    reel:
      "https://res.cloudinary.com/dpopicwcb/video/upload/v1751351804/Founder_And_Friends_Solving_Government_Propaganda_bc76ta.mp4",
  },
  {
    role: "25 Years into Energy",
    reel:
      "https://res.cloudinary.com/dpopicwcb/video/upload/v1751351837/Founder_1_va6xls.mp4",
  },
  {
    role: "We Believe in Solution",
    reel:
      "https://res.cloudinary.com/dpopicwcb/video/upload/v1751351593/Founder_2_pu2tf6.mp4",
  },
];

const HoverVideoCard2 = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl About1 text-green-800 mb-10">
          Our Founder Philosophy
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

export default HoverVideoCard2;
