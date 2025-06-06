import React from "react";

const testimonials = [
  {
    title: "Truly Wonderful!",
    content:
      "Lorem ipsum dolor sit amet consectetur. At sapien duis bibendum ac vitae pellentesque augue consequat vulputate. Pellentesque risus viverra molestie tellus neque vel donec facilisis.",
    name: "Renne Lannister",
    rating: 5,
    image: "https://storage.googleapis.com/a1aa/image/03218e09-cd13-4942-0b9f-ca5b83a0f336.jpg",
  },
  {
    title: "Amazing handywork!",
    content:
      "Pellentesque risus viverra molestie tellus neque vel donec facilisis. Lorem ipsum dolor sit amet consectetur. At sapien duis bibendum ac vitae pellentesque augue consequat vulputate.",
    name: "Grace Jones",
    rating: 5,
    image: "https://storage.googleapis.com/a1aa/image/3c9e27f8-ad1b-41cf-9e97-80eff65bba2d.jpg",
  },
  {
    title: "Creative Designs from Scratch!",
    content:
      "Enim lectus consectetur vitae egestas scelerisque morbi integer tellus. Lorem ipsum dolor sit amet consectetur. At sapien duis bibendum ac vitae pellentesque augue consequat vulputate.",
    name: "Micky Logan",
    rating: 5,
    image: "https://storage.googleapis.com/a1aa/image/668670d4-76f9-4e85-ae0e-98f29b9516ec.jpg",
  },
];

const RatingWorks = () => {
  return (
    <section className="GetFontSol relative bg-[#0c2340] rounded-[40px_0_40px_0] max-w-[1200px] mx-auto mt-10 px-6 py-12 md:py-16 md:px-12 overflow-visible text-white">
      <img
        src="https://storage.googleapis.com/a1aa/image/5b219d82-b430-4699-179a-07180ac3360c.jpg"
        alt="Modern house exterior with dark blue overlay"
        className="absolute inset-0 w-full h-full object-cover rounded-[40px_0_40px_0] opacity-20"
      />
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-extrabold tracking-wide">Solar Ratings</h2>
        <p className="mt-2 text-lg font-medium">
          What Our Satisfied Customers Say About Us
        </p>
      </div>

      <div className="relative z-10 flex gap-6 overflow-x-auto pb-6 md:pb-0">
        {testimonials.map((item, index) => (
          <article
            key={index}
            className="bg-white text-gray-800 rounded-tl-[40px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[40px] max-w-xs flex-shrink-0 p-8 shadow-lg relative min-w-[320px]"
          >
            {/* Decorative Icons */}
            <div className="absolute -top-6 left-6 flex space-x-1 text-[#5bc1c9]">
              {[...Array(2)].map((_, i) => (
                <svg key={i} className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.17 6.17a4 4 0 0 1 0 5.66L5.76 13.24l-1.41-1.41 1.41-1.41a2 2 0 0 0 0-2.83 2 2 0 0 0-2.83 0L1 8.83 2.41 10.24l1.41-1.41a4 4 0 0 1 5.66 0z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Content */}
            <p className="font-semibold italic mb-3">{item.title}</p>
            <p className="text-sm leading-relaxed text-gray-600">{item.content}</p>

            {/* Footer */}
            <footer className="flex items-center mt-8 space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-1 font-semibold text-gray-800">
                  <span>{item.rating}.0</span>
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-800 text-sm">{item.name}</p>
              </div>
            </footer>
          </article>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-8 right-8 flex space-x-3 z-20">
        <button
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-md bg-[#0c2340]/50 flex items-center justify-center text-white disabled:opacity-40"
          disabled
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-md bg-[#5bc1c9] flex items-center justify-center text-white"
        >
          <i className="fas fa-play"></i>
        </button>
      </div>
    </section>
  );
};

export default RatingWorks;
