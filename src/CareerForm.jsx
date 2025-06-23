import React, { useState } from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../Loader";
import 'react-toastify/dist/ReactToastify.css';

function CareerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`https://solar-4-8a9b.onrender.com/api/senddata`, {
        name,
        email,
        phoneNo,
        message,
      });
      toast.success('Message sent successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      toast.error('Something went wrong. Try again.');
    }
    setLoading(false);
  };

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
    <div className="max-h-screen bg-gradient-to-br from-green-50 to-white py-20 min-h-screen px-6  m-16 ">
      {/*  */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Get a chance to Work with Us.</h2>
      <form className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
       {/* Email & Phone Row */}
<div className="flex flex-col md:flex-row gap-4">
  {/* Email */}
  <div className="w-full md:w-1/2">
    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      type="email"
      placeholder="Email"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Phone No */}
  <div className="w-full md:w-1/2">
    <label className="block text-sm font-medium text-gray-700 mb-1">Phone No</label>
    <input
      type="tel"
      placeholder="Phone"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>


        {/* Position Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a position</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="designer">UI/UX Designer</option>
          </select>
        </div>

{/* Message / Text Box */}
<div>
  {/* <label className="block text-sm font-medium text-gray-700 mb-1">Message</label> */}
  <textarea
    rows="5"
    placeholder="Tell Us Something about you"
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
  ></textarea>
</div>
 
        {/* CV Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Update your CV</label>
          <input
            type="file"
            placeholder='Upload a CV'
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
      {/*  */}
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto GetFontSol">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 mt-5">
          Get in <span className="text-green-800">Touch</span>
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info */}
          <motion.div className="bg-white p-8 rounded-2xl shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Contact Information</h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-medium text-gray-900">📍 Address</h4>
                <p>53, Ramte Ram Rd, Exta Vihar, Arjun Nagar, Nai Basti Dundahera, Ghaziabad, Uttar Pradesh 201001</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">📧 Email</h4>
                <p>Divy@gmail.com<br />Info@divyPower.in</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">📞 Phone</h4>
                <p>+91 9310259325<br />Open 24 Hours</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-white p-8 rounded-2xl shadow-lg" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                required
                value={phoneNo}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                placeholder="Your Message"
                required
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>

              <motion.button
                type="submit"
                className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex justify-center items-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(34,197,94, 0.8)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {loading ? <Loader /> : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Google Map */}
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

export default CareerForm;
