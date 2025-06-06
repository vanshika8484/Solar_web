import React from 'react';

const solarImages = [
  'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&auto=format&fit=crop&q=60',
  'https://plus.unsplash.com/premium_photo-1679952891276-2f991b868dfb?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1545209463-e2825498edbf?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1589275776107-e193042128bd?w=800&auto=format&fit=crop&q=60',
  'https://plus.unsplash.com/premium_photo-1668078530961-32f4a1107791?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1576068205458-845521b0c0c4?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1440940627368-bd68a386bb73?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1544245607-99ac92ec1da5?w=800&auto=format&fit=crop&q=60',
  'https://plus.unsplash.com/premium_photo-1679952890714-7eead60c1c12?w=800&auto=format&fit=crop&q=60'
];

const MasonryGallery = () => {
  return (
    <section className="bg-[#f8f7f0] py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">Solar Gallery</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {solarImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Solar Panel ${index}`}
              className="mb-4 w-full rounded-2xl border-4 border-white object-cover break-inside-avoid shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;
