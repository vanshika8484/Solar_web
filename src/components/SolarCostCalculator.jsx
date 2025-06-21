import React from "react";
import { Link } from "react-router-dom";
import ElectricitySavedCard from "./ElectricitySavedCard";

const SolarCostCalculator = () => {
  return (
    <div className="bg-[#F8F7F0] min-h-screen GetFontSol px-4 md:px-10 lg:px-16 py-10">
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl About sm:text-3xl md:text-2xl font-bold text-[#E50C0C] leading-snug max-w-5xl mx-auto">
           Aaj hi Solar Lagwao, environment bachao <br />
          aur agle 5 saal me 3 lakh se jyada apne electricity bills par bhi Bachao
        </h1>
      </div>

      {/* Responsive 3-Card Layout */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Form Info Card */}
        <section className="bg-white rounded-xl px-6 py-8">
          <h2 className="text-2xl font-semibold text-[#1e1e1e] mb-4">Power Your Home With Solar</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Discover how affordable solar can be. Enter your details below to get your personalized cost estimate and start saving!
          </p>
          <ul className="list-disc list-inside text-blue-700 text-sm space-y-2 mb-6">
            <li>Reduce your carbon footprint</li>
            <li>Lock in energy savings</li>
            <li>Maximize your roof potential</li>
          </ul>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-3">
              <i className="fas fa-solar-panel text-green-800 text-2xl"></i>
              <div>
                <p className="text-blue-800 font-semibold text-lg">2500+</p>
                <p className="text-gray-600 text-sm">Systems Installed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-leaf text-green-800 text-2xl"></i>
              <div>
                <p className="text-blue-800 font-semibold text-lg">45%</p>
                <p className="text-gray-600 text-sm">Avg. Savings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Card */}
        <section className="bg-[#d9f0d6] rounded-xl px-6 py-8">
          <p className="text-green-800 text-xs uppercase tracking-widest mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-green-800 inline-block"></span>
            <span>About Calculator</span>
          </p>
          <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-6">Solar Cost Calculator</h3>
          <form className="space-y-4 text-sm text-gray-700">
            {[
              { id: 'monthly-bill', icon: 'fas fa-bolt', placeholder: 'Monthly Electricity Bill (₹)' },
              { id: 'roof-area', icon: 'fas fa-ruler-combined', placeholder: 'Roof Area (sq. ft.)' },
              { id: 'location', icon: 'fas fa-map-marker-alt', placeholder: 'Location / State' },
              { id: 'peak-sun-hours', icon: 'fas fa-sun', placeholder: 'Avg. Peak Sun Hours (hrs/day)' },
              { id: 'panel-efficiency', icon: 'fas fa-palette', placeholder: 'Panel Efficiency (%)' },
            ].map(({ id, icon, placeholder }) => (
              <div key={id}>
                <div className="flex items-center border border-blue-300 rounded-full px-4 py-2 bg-white">
                  <i className={`${icon} text-green-800 mr-3`}></i>
                  <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    className="w-full outline-none text-gray-700 placeholder-gray-500 rounded-full bg-transparent"
                  />
                </div>
              </div>
            ))}

            <div>
              <select className="w-full border border-blue-300 rounded-full px-4 py-2 bg-white text-blue-800 font-semibold">
                <option disabled selected value="">Roof Type</option>
                <option value="flat">Flat</option>
                <option value="sloped">Sloped</option>
                <option value="metal">Metal</option>
              </select>
            </div>

            <div className="flex items-center text-green-700 text-sm">
              <input
                id="govt-subsidy"
                type="checkbox"
                className="w-4 h-4 text-green-800 border-green-800 rounded focus:ring-green-500"
              />
              <label htmlFor="govt-subsidy" className="ml-2 cursor-pointer">
                Govt. Subsidy Eligible?
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 text-white font-bold rounded-full py-3 mt-4 hover:bg-green-700 transition"
            >
              Calculate Cost
            </button>
          </form>
        </section>

        {/* Electricity Saved Card */}
        <section className="flex justify-center items-center">
          <ElectricitySavedCard />
        </section>
      </main>

      {/* CTA Button */}
      
    </div>
  );
};

export default SolarCostCalculator;
