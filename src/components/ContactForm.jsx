import React from "react";
import solarg from '../Images/chacha.png';

const ContactForm = () => {
  return (
    <main className="max-w-7xl GetFontHomeChat bg-[#f8f7f0] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10  -mt-24">
      
      {/* Left: Form */}
      <form
        action="#"
        method="POST"
        className="bg-[#f8f7f0]  rounded-2xl p-6 sm:p-8 w-full max-w-2xl flex flex-col gap-6"
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-green-800">Talk to Solar Chacha</h2>
          <p className="text-gray-600 text-sm">We’ll get back to you shortly.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 rounded-full py-3 px-5 placeholder-gray-500 focus:outline-none border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 rounded-full py-3 px-5 placeholder-gray-500 focus:outline-none border border-gray-300"
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          className="rounded-full py-3 px-5 placeholder-gray-500 focus:outline-none border border-gray-300"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          required
          className="rounded-2xl py-3 px-5 placeholder-gray-500 resize-none focus:outline-none border border-gray-300"
        ></textarea>

        <button
          type="submit"
          className="bg-green-800 text-white font-bold rounded-full py-4 px-8 w-full flex items-center justify-center gap-2 hover:bg-[#449d48] transition"
        >
          SUBMIT NOW
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>

      {/* Right: Info & Image */}
      <section className="md:w-1/2 flex flex-col justify-start items-center md:items-start gap-6 text-center md:text-left">
        <h2 className="flex items-center gap-2 text-green-800 font-mono tracking-widest text-sm">
          <i className="fas fa-lightbulb"></i> CONTACT US
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
          Apne Ghar Ka Bijli Ka Bill Bhejo,
          <br />
          Chacha Batayenge Kitna Bacha Sakte Ho.
        </h3>
        <div className="flex flex-col gap-4 text-lg text-black">
          <p className="flex items-center justify-center md:justify-start gap-3">
            <i className="fas fa-phone-alt text-green-800"></i>
            <a className="font-semibold underline hover:text-[#3a8e3a]" href="tel:+16295550129">
              (629) 555-0129
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3">
            <i className="fas fa-map-marker-alt text-green-800"></i>
            6391 Elgin St. Celina, 10299
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3">
            <i className="fas fa-envelope text-green-800"></i>
            <a className="font-semibold underline hover:text-[#3a8e3a]" href="mailto:info@example.com">
              info@divypower.in
            </a>
          </p>
        </div>
        <div className="mt-4">
          <img
            src={solarg}
            alt="Solar Chacha"
            className="max-w-[250px]"
            width={250}
            height={250}
          />
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
