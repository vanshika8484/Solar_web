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



        </div>
    );
}

export default CareerForm;
