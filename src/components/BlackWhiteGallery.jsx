import React from "react";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://placehold.co/400x300?text=Photo+1",
    alt: "Black and white photo of people climbing and sitting on a large architectural structure with a cityscape in the background",
    width: 400,
    height: 300,
  },
  {
    src: "https://placehold.co/400x300?text=Photo+2",
    alt: "Black and white photo of people sitting and lying on a curved rooftop overlooking a river with boats and people in the water",
    width: 400,
    height: 300,
  },
  {
    src: "https://placehold.co/300x300?text=Photo+3",
    alt: "Black and white close-up photo of an elderly woman with hands clasped in prayer, wearing a white headscarf",
    width: 400,
    height: 300,
  },
  {
    src: "https://placehold.co/150x300?text=Photo+4",
    alt: "Black and white photo of a small group of people near a large statue by a river with trees overhead",
    width: 400,
    height: 300,
  },
];

export default function BlackWhiteGallery() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-4">
      <motion.div
        className="flex space-x-4 max-w-full overflow-x-auto no-scrollbar"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        dragElastic={0.2}
      >
        {photos.map(({ src, alt, width, height }, index) => (
          <motion.img
            key={index}
            src={src}
            alt={alt}
            className="flex-shrink-0 object-cover grayscale"
            style={{ width: width + "px", height: height + "px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
