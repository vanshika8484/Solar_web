import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const reelsData = [
  { videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751353920/Shruti_Growth_At_Divy_kbqin1.mp4' },
  { videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354105/Riddhi_Growth_At_Divy_czkigm.mp4' },
  { videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354118/Rishika_Growth_At_Divy_r3mkm1.mp4' },
  { videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354236/Kaushlesh_Singh_Growth_At_Divyy_ztexms.mp4' },
  { videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354236/Rajeev_Arora_Growth_At_Divy_With_Updated_Tech_cl7b5t.mp4' },
  { videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354256/Asha_Growth_At_Divy_mua1bn.mp4' },
  { videoSrc: 'https://res.cloudinary.com/dpopicwcb/video/upload/v1751354256/Kaushlesh_Growth_At_Divy_jshtlv.mp4' },
  
];

const HoverVideoCard3 = () => {
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
      <h2 className="text-center text-xl md:text-3xl font-bold text-green-800 mb-10">
         Growth at DIVY 
      </h2>

      {/* Video Reels Container */}
      <div
        ref={containerRef}
        className="flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory px-1 md:px-0"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
        onWheel={(e) => e.preventDefault()}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {reelsData.map((reel, index) => (
          <motion.div
            key={index}
            className="relative snap-start flex-shrink-0 w-[80vw] sm:w-[250px] md:w-full h-[320px] md:h-[360px] bg-black rounded-xl overflow-hidden shadow-lg"
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
              muted={false}
            />
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

export default HoverVideoCard3;
