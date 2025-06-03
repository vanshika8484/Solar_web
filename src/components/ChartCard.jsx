import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { motion } from "framer-motion";

const chartOptions = () => ({
  series: [
    {
      name: "Electricity Bill",
      data: [20, 30, 15, 40, 25, 35],
      color: "#60A5FA",
    },
    {
      name: "CO2 Consumption",
      data: [10, 40, 25, 30, 40, 20],
      color: "#34D399",
    },
    {
      name: "Nature Harm",
      data: [5, 20, 30, 25, 35, 15],
      color: "#FBBF24",
    },
  ],
  chart: {
    type: "line",
    height: "100%",
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 4,
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  grid: { show: false },
  dataLabels: { enabled: false },
  legend: { show: false },
  markers: {
    size: 4,
    strokeWidth: 2,
    hover: { size: 6 },
  },
  tooltip: {
    enabled: true,
    x: { show: false },
  },
});

const ChartCard = () => {
  useEffect(() => {
    const withoutSolar = new ApexCharts(document.querySelector("#chart-without-solar"), chartOptions());
    const withSolar = new ApexCharts(document.querySelector("#chart-with-solar"), chartOptions());

    withoutSolar.render();
    withSolar.render();

    return () => {
      withoutSolar.destroy();
      withSolar.destroy();
    };
  }, []);

  const ChartBox = ({ title, chartId }) => (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-[#f8f7f0] GetFontSol rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

        {/* Chart Container */}
        <div className="w-full h-[300px] bg-gray-800 rounded-lg overflow-hidden shadow-inner relative">
          <div className="absolute top-3 right-3 bg-blue-500 text-white text-sm px-2 py-1 rounded-full shadow-md">
            ●
          </div>
          <div id={chartId} className="w-full h-full" />
        </div>

        {/* Labels below the chart */}
        <div className="flex justify-around items-center mt-6 flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 rounded-full bg-blue-400"></span>
            <span className="text-sm font-medium text-gray-700">Electricity Bill</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 rounded-full bg-green-400"></span>
            <span className="text-sm font-medium text-gray-700">CO2 Consumption</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 rounded-full bg-yellow-400"></span>
            <span className="text-sm font-medium text-gray-700">Nature Harm</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row w-full h-auto p-6 md:p-12 bg-[#11592c] gap-6"
    >
      {/* Order updated: First Without Solar, then With Solar */}
      <ChartBox title="Without Solar" chartId="chart-without-solar" />
      <ChartBox title="With Solar" chartId="chart-with-solar" />
    </motion.div>
  );
};

export default ChartCard;
