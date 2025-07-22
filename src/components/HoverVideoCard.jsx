import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";


const reelsData = [
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179478/C10_zcceyn.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179478/C7_Check_clbniv.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179478/C9_Check_bz0sn0.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179477/C8_Xmcheck_eqchqo.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179477/C6_u3oakv.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179476/C2_Check_jcidtc.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179476/C5_Check_bcoqoj.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179476/C3_fdmvns.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179476/C4_snosg4.mp4" },
  { videoSrc: "https://res.cloudinary.com/drz2uocug/video/upload/v1753179476/C1_nwahcx.mp4" }
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
    <section className="relative w-[1100px]  px-4 py-12 bg-gradient-to-r from-[#fefefe] to-[#ffffff]">
      <h2 className="text-center text-3xl font-bold text-green-800 mb-10">Stories Of Change We're Proud of
        <p className=" p-5 text-sm text-black font-medium">Our client belived in us - and so can you,See how solar changed their lives.</p></h2>


      {/* Reels Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory space-x-4 px-2"
        style={{
          height: "430px",
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
            className="relative snap-start flex-shrink-0 w-[220px] h-[400px] bg-black rounded-xl overflow-hidden shadow-md"
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
            {/* <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm text-white px-3 py-2">
              <h3 className="text-sm font-semibold">@{reel.username}</h3>
              <p className="text-xs">{reel.caption}</p>
            </div> */}
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
      <div>
        <p className=" mt-8 text-orange-400 font-semibold text-center">Aap kis cheez intezaar kar rahe hai ? Aaj hi contact karein Divy power ko-Trust bhi,Bachat bhi.</p>
      </div>
    </section>
  );
};

export default HoverVideoCard;
