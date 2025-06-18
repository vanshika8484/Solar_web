import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const reelsData = Array.from({ length: 10 }).map((_, i) => ({
  videoSrc: `/videos/solar${(i % 3) + 1}.mp4`,
  username: `solar_user_${i + 1}`,
  caption: `Reel ${i + 1}: Clean and green energy revolution!`,
}));

const HoverVideoCard = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const card = containerRef.current.children[index];
      if (card) {
        containerRef.current.scrollTo({
          left: card.offsetLeft - containerRef.current.offsetLeft,
          behavior: "smooth",
        });
        setActiveIndex(index);
      }
    }
  };

  // Update activeIndex based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0].offsetWidth + 16; // includes space-x-4
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full px-4 py-12 bg-gradient-to-r from-[#fefefe] to-[#ffffff]">
      <h2 className="text-center text-3xl font-bold text-black mb-10">Reels</h2>

      {/* Reels Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 scrollbar-hide px-2"
      >
        {reelsData.map((reel, index) => (
          <motion.div
            key={index}
            className="relative snap-start flex-shrink-0 w-[220px] h-[350px] bg-black rounded-xl overflow-hidden shadow-md"
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
            <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm text-white px-3 py-2">
              <h3 className="text-sm font-semibold">@{reel.username}</h3>
              <p className="text-xs">{reel.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {reelsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-green-600 scale-110" : "bg-gray-300"
            }`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to reel ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HoverVideoCard;
