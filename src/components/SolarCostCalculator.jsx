import React from "react";

const SolarCostCalculator = () => {
  return (
    <div className="bg-[#f9f8f0] min-h-screen">
   

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-12 mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 pt-11">
        {/* Left Section */}
        <section className="relative bg-white rounded-xl px-4 py-8 sm:px-8 sm:py-12 md:px-10 md:py-14 max-w-6xl mx-auto">
  {/* Title */}
  <h2 className="font-robotoslab text-2xl sm:text-3xl font-semibold text-[#1e1e1e] text-center md:text-left">
    Power Your Home With Solar
  </h2>

  {/* Description */}
  <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed text-center md:text-left max-w-2xl mx-auto md:mx-0">
    Discover how affordable solar can be. Enter your details below to get your personalized cost estimate and start saving!
  </p>

  {/* Bullet Points */}
  <ul className="mt-6 list-disc list-inside text-blue-700 text-sm sm:text-base font-normal space-y-2 text-center md:text-left max-w-2xl mx-auto md:mx-0">
    <li>Reduce your carbon footprint</li>
    <li>Lock in energy savings</li>
    <li>Maximize your roof potential</li>
  </ul>

  {/* Stats Cards */}
  <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-start gap-6 max-w-2xl mx-auto md:mx-0">
    {/* Card 1 */}
    <div className="flex items-center space-x-3 bg-[#d9f0d6] rounded-xl px-6 py-4 w-full sm:w-auto">
      <i className="fas fa-solar-panel text-green-600 text-2xl"></i>
      <div>
        <p className="text-blue-800 font-semibold text-lg">2500+</p>
        <p className="text-gray-600 text-xs sm:text-sm">Systems Installed</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center space-x-3 bg-[#d9f0d6] rounded-xl px-6 py-4 w-full sm:w-auto">
      <i className="fas fa-leaf text-green-600 text-2xl"></i>
      <div>
        <p className="text-blue-800 font-semibold text-lg">45%</p>
        <p className="text-gray-600 text-xs sm:text-sm">Avg. Savings</p>
      </div>
    </div>
  </div>
</section>


        {/* Right Section */}
        <section className="bg-[#d9f0d6] rounded-xl px-6 py-10 sm:px-10 sm:py-14 max-w-md mx-auto md:mx-0">
          <p className="text-green-600 text-xs uppercase tracking-widest mb-2 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
            <span>About Calculator</span>
          </p>
          <h3 className="text-3xl font-normal text-[#1e1e1e] mb-6 font-robotoslab">Solar Cost Calculator</h3>
          <form className="space-y-4 text-gray-600 text-sm sm:text-base">
            {[
              { id: 'monthly-bill', icon: 'fas fa-bolt', placeholder: 'Monthly Electricity Bill (₹)' },
              { id: 'roof-area', icon: 'fas fa-ruler-combined', placeholder: 'Roof Area (sq. ft.)' },
              { id: 'location', icon: 'fas fa-map-marker-alt', placeholder: 'Location / State' },
              { id: 'peak-sun-hours', icon: 'fas fa-sun', placeholder: 'Avg. Peak Sun Hours (hrs/day)' },
              { id: 'panel-efficiency', icon: 'fas fa-palette', placeholder: 'Panel Efficiency (%)' },
            ].map(({ id, icon, placeholder }) => (
              <div key={id}>
                <div className="flex items-center border border-blue-300 rounded-full px-4 py-2 bg-white">
                  <i className={`${icon} text-green-600 mr-3`}></i>
                  <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    className="w-full outline-none text-gray-700 placeholder-gray-500 rounded-full"
                  />
                </div>
              </div>
            ))}
            <div>
              <select className="w-full border border-blue-300 rounded-full px-4 py-2 bg-white text-blue-800 font-semibold cursor-pointer" id="roof-type">
                <option disabled selected value="">Roof Type</option>
                <option value="flat">Flat</option>
                <option value="sloped">Sloped</option>
                <option value="metal">Metal</option>
              </select>
            </div>
            <div className="flex items-center text-green-700 text-sm">
              <input id="govt-subsidy" type="checkbox" className="w-4 h-4 text-green-600 border-green-600 rounded focus:ring-green-500 focus:ring-2" />
              <label htmlFor="govt-subsidy" className="ml-2 cursor-pointer">Govt. Subsidy Eligible?</label>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white font-bold rounded-full py-3 mt-6 hover:bg-green-700 transition-colors">
              Calculate Cost
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SolarCostCalculator;