import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";


const reelsData = [
  { videoSrc:'https://res.cloudinary.com/dpopicwcb/video/upload/v1750336141/rmnkle80uluxiowzuiad.mp4', username: "solar_user_1", caption: "Reel 1: Clean and green energy revolution!" },
  { videoSrc:'https://res.cloudinary.com/dpopicwcb/video/upload/v1750336042/euw0bne5rwftvk05nzfq.mp4', username: "solar_user_2", caption: "Reel 2: Solar is the future!" },
  { videoSrc:'https://res.cloudinary.com/dpopicwcb/video/upload/v1750335938/srjv4ckwwre2po1ijgif.mp4', username: "solar_user_3", caption: "Reel 3: Powering your world sustainably!" },
  { videoSrc:'https://res.cloudinary.com/dpopicwcb/video/upload/v1750335798/rzplfwwmiot0kof9c8qx.mp4', username: "solar_user_4", caption: "Reel 4: Clean energy in action!" },
  { videoSrc:'https://res.cloudinary.com/dpopicwcb/video/upload/v1750335599/mdxskru5npv1vokvifnv.mp4', username: "solar_user_5", caption: "Reel 5: Greener tomorrow starts today!" },
  { videoSrc:'https://res.cloudinary.com/dpopicwcb/video/upload/v1750334859/sc0churytfgb7kt9go2q.mp4', username: "solar_user_6", caption: "Reel 6" },
];

const HoverVideoCard = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollInterval = useRef(null);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % reelsData.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      startAutoScroll();
    }, 500);
    return () => {
      clearTimeout(timeout);
      stopAutoScroll();
    };
  }, []);

  return (
    <section className="relative w-full px-4 py-12 bg-gradient-to-r from-[#fefefe] to-[#ffffff]">
      <h2 className="text-center text-3xl font-bold text-black mb-10">Why switch to solar</h2>

      {/* Reels Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory space-x-4 px-2"
        style={{
          height: "360px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
        onWheel={(e) => e.preventDefault()} // prevent scroll on wheel
      >
        {/* Hide scrollbar manually */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {reelsData.map((reel, index) => (
          <motion.div
            key={index}
            className="relative snap-start flex-shrink-0 w-[220px] h-[350px] bg-black rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={() => {
              stopAutoScroll();
              const video = videoRefs.current[index];
              if (video) {
                video.currentTime = 0;
                video.play();
              }
            }}
            onMouseLeave={() => {
              const video = videoRefs.current[index];
              if (video) video.pause();
              startAutoScroll();
            }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={reel.videoSrc}
              className="w-full h-full object-cover"
              controls={false}
              muted={false} // play with sound
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-green-600 scale-110" : "bg-gray-300"
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
