import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reelsData = Array.from({ length: 10 }).map((_, i) => ({
  videoSrc: `/videos/solar${(i % 3) + 1}.mp4`,
  username: `solar_user_${i + 1}`,
  caption: `Reel ${i + 1}: Clean and green energy revolution!`,
}));

const HoverVideoCard = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 250; // adjusted for new smaller size
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full px-4 py-8 bg-gradient-to-r from-[#fefefe] to-[#ffffff]">
      <h2 className="text-center text-2xl font-bold text-black mb-6"> Reels </h2>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full shadow backdrop-blur-sm"
        onClick={() => scroll("left")}
      >
        <FaChevronLeft className=" text-white" size={18} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full shadow backdrop-blur-sm"
        onClick={() => scroll("right")}
      >
        <FaChevronRight className=" text-white "  size={18} />
      </button>

      {/* Reels Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 scrollbar-hide"
      >
        {reelsData.map((reel, index) => (
          <motion.div
            key={index}
            className="relative snap-start flex-shrink-0 w-[220px] h-[350px] bg-black rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <video
              src={reel.videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
            {/* Overlay Info */}
            <div className="absolute bottom-0 w-full bg-black/30 backdrop-blur-sm text-white px-3 py-2">
              <h3 className="text-sm font-semibold">@{reel.username}</h3>
              <p className="text-xs">{reel.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HoverVideoCard;
