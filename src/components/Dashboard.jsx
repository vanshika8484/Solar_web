import React from "react";
import { motion } from "framer-motion";
import './Home.css'

function Dashboard() {
  // Variants for the entire dashboard container
  const dashboardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="GetfontHomeDash max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
      variants={dashboardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Current Power */}
      <section className="GetfontHomeDash bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[280px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">Current Power, kW</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <p className="text-4xl font-light text-gray-900 mb-3">5.48</p>
        <div className="space-y-1 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
            <span>Solar</span>
            <span className="ml-auto font-light text-gray-700">2.74</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-700 inline-block" />
            <span>Grid</span>
            <span className="ml-auto font-light text-gray-700">2.74</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
            <span>Battery</span>
            <span className="ml-auto font-light text-gray-700">0.34</span>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-4 font-light tracking-wide">
          <span>3 Nov</span>
          <span>9 Nov</span>
        </div>
        <div className="bar-chart flex items-end gap-2 mt-1">
          {[40, 40, 20, 60, 40, 40, 60].map((h, i) => (
            <div
              key={i}
              className="w-1.5 bg-orange-500 rounded-t"
              style={{ height: `${h}px` }}
            />
          ))}
          {[40, 40, 20, 60, 40, 40, 60].map((h, i) => (
            <div
              key={i + 7}
              className="w-1.5 bg-gray-700 rounded-t"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </section>

      {/* Production */}
      <section className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">Production, kW</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <p className="text-3xl font-light text-gray-900 mb-3">28.5</p>
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Low</span>
          <div className="flex-1 h-[2px] bg-gray-300 rounded overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-[2px] bg-gray-600"
              style={{ width: "50%" }}
            />
          </div>
          <span>50</span>
          <span>100</span>
        </div>
        <div className="flex gap-1 text-gray-400 text-xs">
          <span>0</span>
          <span className="flex-1" />
        </div>
      </section>

      {/* Consumption */}
      <section className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">Consumption, kW</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <p className="text-3xl font-light text-gray-900 mb-3">56.4</p>
        <div className="flex items-center gap-2 text-xs text-orange-500 mb-1">
          <span>Normal</span>
          <div className="flex-1 h-[2px] bg-gray-300 rounded overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-[2px] bg-orange-500"
              style={{ width: "50%" }}
            />
          </div>
          <span>50</span>
          <span>100</span>
        </div>
        <div className="flex gap-1 text-gray-400 text-xs">
          <span>0</span>
          <span className="flex-1" />
        </div>
      </section>

      {/* Site Power */}
      <section className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[280px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">Site Power, kWh</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <div className="flex justify-between mb-3">
          <div>
            <p className="text-2xl font-light text-gray-900">3.93</p>
            <p className="text-xs text-gray-400">Product</p>
          </div>
          <div>
            <p className="text-2xl font-light text-gray-900">7.86</p>
            <p className="text-xs text-gray-400">Consump</p>
          </div>
        </div>
        <div className="space-y-1 text-xs text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-700 inline-block" />
            <span>to Home</span>
            <span className="ml-auto font-light text-gray-700">3.93</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
            <span>from Solar</span>
            <span className="ml-auto font-light text-gray-700">3.93</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
            <span>from Grid</span>
            <span className="ml-auto font-light text-gray-700">3.93</span>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 font-light tracking-wide mb-1">
          <span>00:00</span>
          <span>00:00</span>
        </div>
        <div className="flex items-end gap-2">
          {[20, 40, 20, 40, 20, 40, 40, 20, 40].map((h, i) => {
            const colorClasses = ["bg-gray-700", "bg-orange-500", "bg-gray-400"];
            return (
              <div
                key={i}
                className={`w-1.5 ${colorClasses[i % 3]} rounded-t`}
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>
      </section>

      {/* Alerts */}
      <section className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">Alerts</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <p className="text-3xl font-light text-gray-900 mb-3">3</p>
        <div className="flex gap-2 text-xs text-gray-400">
          <div className="flex-1">
            <p className="mb-1">Voltage</p>
            <div className="h-4 bg-orange-500 rounded" />
          </div>
          <div className="flex-1">
            <p className="mb-1">Inverter</p>
            <div className="h-4 bg-gray-300 rounded" />
          </div>
          <div className="flex-1">
            <p className="mb-1">System</p>
            <div className="h-4 bg-gray-300 rounded" />
          </div>
        </div>
      </section>

      {/* CO2 */}
      <section className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">Co2</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <p className="text-3xl font-light text-gray-900 mb-3">42</p>
        <p className="text-xs text-gray-600">Emissions Saved</p>
      </section>

      {/* MI */}
      <section className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">Mi</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <p className="text-3xl font-light text-gray-900 mb-3">48</p>
        <p className="text-xs text-gray-600">Driven on Sunshine</p>
      </section>

       <section className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-600">DI</p>
          <i className="fas fa-external-link-alt text-gray-600 text-xs" />
        </div>
        <p className="text-3xl font-light text-gray-900 mb-3">58</p>
        <p className="text-xs text-gray-600">Solar on Rays</p>
      </section>
    </motion.div>
  );
}

export default Dashboard;
