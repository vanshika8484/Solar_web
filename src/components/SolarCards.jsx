import React from 'react';

const cardData = [
  {
    image: 'https://storage.googleapis.com/a1aa/image/b76c2d14-7f1a-40cb-f873-a51cc19bdb92.jpg',
    date: 'March 15, 2022',
    tag: 'Oil Change',
    title: 'Praesent mus faucibus vitae tempor primis auctor',
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/94007e8e-102e-4294-ca25-30ae5989025c.jpg',
    date: 'March 15, 2022',
    tag: 'Oil Change',
    title: 'Future mus faucibus vitae tempor primis juso art',
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/edd211ce-1036-4217-2df7-143d0b7bc2e2.jpg',
    date: 'March 15, 2022',
    tag: 'Oil Change',
    title: 'Mosure mus faucibus vitae tempor primis auctor',
  },
];

const SolarCards = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-8 -mt-24 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-green-600 text-base sm:text-lg font-medium">
          Quality Handyman Solution
        </h2>
        <p className="  text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 font-montserrat">
          Inside Story Of Our Company
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <i className="fas fa-calendar-alt text-green-600" />
                  <span>{card.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fas fa-tag text-green-600" />
                  <span>{card.tag}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-800 font-montserrat uppercase tracking-wide leading-snug mb-5">
                {card.title}
              </h3>
              <a
                href="#"
                className="inline-block border border-green-600 text-green-700 font-medium px-6 py-2 text-sm rounded hover:bg-green-50 transition"
              >
                Read Details <i className="fas fa-arrow-right ml-2" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SolarCards;
