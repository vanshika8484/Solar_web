import React, { useState } from "react";
import { motion } from "framer-motion";
import ElectricitySavedCard from "./ElectricitySavedCard";
import { FaBolt } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SolarCostCalculator = () => {


  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    electricityBill: "",
    roofArea: "",
    state: "",
    district: "",
    peakSunHours: "",
    roofType: "",
    phoneNumber: "",
    meterKW: "",
    meterConnection: "",
    continuousLoadKW: "",
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://solar-4-8a9b.onrender.com/api/submit", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setResults(response.data.results);
      setShowResults(true);
      alert('Calculate successfully!');
      setFormData({
        electricityBill: "",
        roofArea: "",
        state: "",
        district: "",
        peakSunHours: "",
        roofType: "",
        phoneNumber: "",
        meterKW: "",
        meterConnection: "",
        continuousLoadKW: "",
      });
    } catch (error) {
      const msg = error.response?.data?.error || error.message;
      alert("Please provide all Fields");
    } finally {
      setLoading(false); // ✅ always stop loading
    }
  };


  const handleCancel = () => {
    setShowResults(false);
    setResults(null);
  };

  return (
    <motion.div
      className="bg-[#F8F7F0] min-h-screen GetFontSol px-4 md:px-10 lg:px-16 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Main Heading */}
      <motion.div className="text-center mb-8" variants={cardVariants}>
        <h1 className="text-xl sm:text-2xl md:text-xl font-bold text-[#E50C0C] leading-snug max-w-5xl mx-auto">
          Aaj hi Solar Lagwao, environment bachao <br />
          aur agle 5 saal me 3 lakh se jyada apne electricity bills par bhi Bachao
        </h1>
      </motion.div>

      {/* Cards Grid (Responsive) */}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-10 items-stretch space-y-6 lg:space-y-0">
        {/* Info Card */}
        <motion.section
          className="bg-white rounded-xl px-6 py-5 h-full flex flex-col w-full lg:max-w-md"
          variants={cardVariants}
        >
          <h2 className="text-xl font-semibold text-[#1e1e1e] mb-3">Power Your Home With Solar</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Discover how affordable solar can be. Enter your details below to get your personalized cost estimate and start saving!
          </p>
          <ul className="list-disc list-inside text-blue-700 text-sm space-y-1.5 mb-5">
            <li>Reduce your carbon footprint</li>
            <li>Lock in energy savings</li>
            <li>Maximize your roof potential</li>
          </ul>

          <div className=" hidden lg:block  md:block xl:block 2xl:block flex items-center justify-center  p-4 font-['Inter']">
            <div className="flex flex-col items-center justify-center p-6 w-72 sm:w-80">
              <h2 className="text-gray-700 font-semibold text-lg mb-4">
                Electricity Saved
              </h2>

              {/* SVG Circle */}
              <div className="relative flex justify-center items-center mb-4">
                <svg
                  className="w-36 h-36"
                  viewBox="0 0 160 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circle */}
                  <circle cx="80" cy="80" r="70" stroke="#D9D9D9" strokeWidth="20" />
                  {/* Red Arc - Electricity */}
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#EF4444"
                    strokeWidth="20"
                    strokeDasharray="87.96 439.82"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    transform="rotate(-90 80 80)"
                  />
                  {/* Green Arc - Solar Energy */}
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#22C55E"
                    strokeWidth="20"
                    strokeDasharray="351.86 439.82"
                    strokeDashoffset="-87.96"
                    strokeLinecap="round"
                    transform="rotate(-90 80 80)"
                  />
                </svg>

                {/* Center Icon and Text */}
                <div className="absolute flex flex-col items-center -mt-2">
                  <FaBolt className="text-black text-2xl mb-1" />
                  <span className="text-black font-semibold text-2xl leading-none">
                    75%
                  </span>
                  <span className="text-gray-400 text-xs mt-1">Electricity</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center space-x-4 mb-2">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: "#EF4444" }}
                  ></div>
                  <span className="text-gray-700 text-xs">Electricity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: "#22C55E" }}
                  ></div>
                  <span className="text-gray-700 text-xs">Solar Energy</span>
                </div>
              </div>

              <p className="text-gray-700 font-semibold text-sm text-center">
                75% <span className="font-normal">electricity saved</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-auto">
            <div className="flex items-center space-x-3">
              <i className="fas fa-solar-panel text-green-800 text-xl"></i>
              <div>
                <p className="text-blue-800 font-semibold text-base">2500+</p>
                <p className="text-gray-600 text-xs">Systems Installed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-leaf text-green-800 text-xl"></i>
              <div>
                <p className="text-blue-800 font-semibold text-base">45%</p>
                <p className="text-gray-600 text-xs">Avg. Savings</p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section className="bg-[#d9f0d6] lg:w-[400px] xl:w-[400px] 2xl:w-[400px] md:w-[400px] w-full rounded-xl px-6 py-5 h-full lg:h-[620px] md:h-[620px] xl:h-[620px]  2xl:h-[610px]flex flex-col" variants={cardVariants}>
          {!showResults ? (
            <>
              <p className="text-green-800 text-xs uppercase tracking-widest mb-1 flex items-center space-x-2 -mt-2">
                <span className="w-2 h-2 rounded-full bg-green-800 inline-block"></span>
                <span>About Calculator</span>
              </p>
              <h3 className="text-xl font-semibold text-[#1e1e1e] mb-4">Solar Cost Calculator</h3>
              <form className="space-y-3 text-sm text-gray-700 flex-1 flex flex-col justify-between -mt-2" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  {[
                    { name: "electricityBill", icon: "fas fa-bolt", placeholder: "Monthly Electricity Bill (₹)" },
                    { name: "roofArea", icon: "fas fa-ruler-combined", placeholder: "Roof Area (sq. ft.)" },
                    { name: "state", icon: "fas fa-map-marker-alt", placeholder: "State" },
                    { name: "district", icon: "fas fa-city", placeholder: "District" },
                    { name: "peakSunHours", icon: "fas fa-sun", placeholder: "Avg. Peak Sun Hours (hrs/day)" },
                    { name: "continuousLoadKW", icon: "fas fa-battery-three-quarters", placeholder: "Continuous Load (KW)" },
                    { name: "phoneNumber", icon: "fas fa-phone", placeholder: "Phone Number" },
                    { name: "meterKW", icon: "fas fa-plug", placeholder: "Meter KW" },
                    { name: "meterConnection", icon: "fas fa-network-wired", placeholder: "Meter Connection Type" },
                  ].map(({ name, icon, placeholder }) => (
                    <div key={name}>
                      <div className="flex items-center border border-blue-300 rounded-full px-4 py-2 bg-white hover:shadow-md transition">
                        <i className={`${icon} text-green-800 mr-3`}></i>
                        <input
                          name={name}
                          type="text"
                          value={formData[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent text-sm"
                        />
                      </div>
                    </div>
                  ))}

                  <div>
                    <select
                      name="roofType"
                      value={formData.roofType}
                      onChange={handleChange}
                      className="w-full border border-blue-300 rounded-full px-4 py-2 bg-white text-blue-800 font-medium hover:shadow-md transition text-sm"
                    >
                      <option disabled value="">
                        Roof Type
                      </option>
                      <option value="flat">Flat</option>
                      <option value="sloped">Sloped</option>
                      <option value="metal">Metal</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.03 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className={`w-full ${loading ? "bg-gray-400" : "bg-green-800 hover:bg-green-700"} text-white font-bold rounded-full py-2.5 mt-3 transition text-sm`}
                >
                  {loading ? "Calculating..." : "Calculate Cost"}
                </motion.button>

              </form>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-[#1e1e1e] mb-4">Estimated Results</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Monthly Generation:</strong> {results.adjustedMonthlyGeneration}</li>
                <li><strong>CO₂ Saved:</strong> {results.co2Saved}</li>
                <li><strong>25-Year Savings:</strong> {results.savings25Years}</li>
                <li><strong>Savings in Words:</strong> {results.savingsInWords}</li>
                <li><strong>Total Power Saved:</strong> {results.totalPowerSaved}</li>
                <li><strong>Trees Saved:</strong> {results.treesSaved}</li>
                <li><strong>Water Saved:</strong> {results.waterSaved}</li>
              </ul>
              <button
                onClick={handleCancel}
                className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full py-2 text-sm transition"
              >
                Cancel
              </button>
            </>
          )}
        </motion.section>


        {/* Electricity Saved Card (only shown in mobile and tablet, hidden on lg+) */}
        <motion.section
          className="lg:hidden flex justify-center items-center h-full"
          variants={cardVariants}
        >
          <div className="w-full max-w-md">
            <ElectricitySavedCard />
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default SolarCostCalculator;






