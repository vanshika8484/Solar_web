import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrophyIcon,
  BriefcaseIcon,
  UsersIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { id: 1, label: "Winning Awards", target: 20, Icon: TrophyIcon },
  { id: 2, label: "Completed Projects", target: 10000, Icon: BriefcaseIcon },
  { id: 3, label: "Team Members", target: 300, Icon: UsersIcon },
  { id: 4, label: "Clients Review", target: 200, Icon: ChatBubbleBottomCenterTextIcon },
];

function StatCard({ target, label, Icon, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const steps = target >= 1000 ? target / 1000 : target;
    const increment = target >= 1000 ? 1000 : 1;
    const stepTime = Math.max(50, Math.floor(duration / steps));

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      className="p-4 md:w-1/4 sm:w-1/2 w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 px-6 py-8 border-t-4 border-green-500 text-center">
        <div className="flex justify-center mb-4">
          <Icon className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          {target >= 1000 ? `${(count / 1000).toFixed(0)}K+` : `${count}+`}
        </h2>
        <p className="mt-2 text-green-700 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

function StatsSection() {
  return (
    <section className="bg-white py-24 text-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Our <span className="text-orange-500">Impact</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            We are growing every day, thanks to your trust and support!
          </p>
        </motion.div>

        <div className="flex flex-wrap -m-4 text-center">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              target={stat.target}
              label={stat.label}
              Icon={stat.Icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
