import { motion } from 'framer-motion';

const images = [
  {
    src: "https://storage.googleapis.com/a1aa/image/4d40dcc9-bb33-42f7-0a8a-bc8ede1380df.jpg",
    alt: "People walking near solar panels and wind turbine",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/48bb4513-f5ae-41dc-bc7a-0b44fd77de0c.jpg",
    alt: "Engineer with clipboard near solar panels",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/da2c29ca-7bbe-4b83-ea23-e0ef58a9ed34.jpg",
    alt: "Close-up of solar panels with wind turbine",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/3eaac31e-b443-4d3c-1609-464df7dca822.jpg",
    alt: "Person looking at solar panels and wind turbine",
  },
];

const Gallery = () => {
  return (
    <main className="p-4 md:p-6 max-w-7xl mx-auto">
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
