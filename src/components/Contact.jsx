import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Contact() {
  // Variants for the contact info and form
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-white py-20 min-h-screen px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 mt-5">Get in <span className=' text-green-600'>Touch</span></h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-6">Contact Information</h3>

            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-medium text-gray-900">📍 Address</h4>
                <p>
                  53, Ramte Ram Rd, Exta Vihar, Arjun Nagar, Nai Basti Dundahera,
                  <br /> Ghaziabad, Uttar Pradesh 201001
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">📧 Email</h4>
                <p>
                  Divye@gmail.com
                  <br />
                  Info@divyPower.in
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">📞 Phone</h4>
                <p>
                  +880 0184275965
                  <br />
                  Open 24 Hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
              <motion.button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(34,197,94, 0.8)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
          <iframe
            title="map"
            className="w-full h-96 rounded-2xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.4200211741384!2d77.42795185827646!3d28.681681412447353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0a53d63b979%3A0xcbe79e39d43f8339!2s53%2C%20Ramte%20Ram%20Rd%2C%20Exta%20Vihar%2C%20Arjun%20Nagar%2C%20Nai%20Basti%20Dundahera%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1656154860112!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
