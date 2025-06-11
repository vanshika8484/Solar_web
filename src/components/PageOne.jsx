import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";

const features = [
  {
    icon: <AiOutlineSwap className="text-4xl text-green-800" />,
    title: "Renewable & Sustainable",
    description:
      "Solar energy is derived from the sun, a virtually unlimited source, making it one of the most sustainable energy options.",
  },
  {
    icon: <IoStatsChart className="text-4xl text-green-800" />,
    title: "Increased Property Value",
    description:
      "Installing solar panels can increase your property's value and attract eco-conscious buyers.",
  },
  {
    icon: <BsGlobe className="text-4xl text-green-800" />,
    title: "Government Incentives",
    description:
      "Enjoy benefits like tax credits, subsidies, and rebates when switching to solar energy.",
  },
];

const PageOne = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageOne;
