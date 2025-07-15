import { motion } from 'framer-motion';
import e1 from "../Images/e1.JPG"
import e2 from "../Images/e2.JPG"
import e3 from "../Images/e3.JPG"
import e4 from "../Images/e4.JPG"




const images = [
  {
    src: e1,
    alt: "People walking near solar panels and wind turbine",
  },
  {
    src: e2,
    alt: "Engineer with clipboard near solar panels",
  },
  {
    src: e3,
    alt: "Close-up of solar panels with wind turbine",
  },
  {
    src: e4,
    alt: "Person looking at solar panels and wind turbine",
  },
];

const Gallery = () => {
  return (
    <main className="p-4 md:p-6 max-w-7xl mx-auto  md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.concat(images).map((image, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden group"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-xl object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-sm p-4 opacity-0 group-hover:opacity-100"
            >
              <p>{image.alt}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
