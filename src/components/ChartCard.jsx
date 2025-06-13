import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { motion } from "framer-motion";

const chartOptions = (series) => ({
  series,
  chart: {
    type: "line",
    height: "100%",
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 3,
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
    const seriesWithoutSolar = [
      {
        name: "CO2 Consumption",
        data: [12, 10, 15, 20, 40, 60],
        color: "#F97316", // Orange
      },
      {
        name: "Electricity Bill",
        data: [0, 10, 30, 25, 40, 55],
        color: "#22C55E", // Green
      },
      {
        name: "Nature Harm",
        data: [18, 25, 30, 32, 35, 38],
        color: "#9CA3AF", // Gray
      },
    ];

    const seriesWithSolar = [
      {
        name: "CO2 Consumption",
        data: [60, 50, 30, 20, 15, 12],
        color: "#F97316",
      },
      {
        name: "Electricity Bill",
        data: [55, 40, 35, 25, 15, 0],
        color: "#22C55E",
      },
      {
        name: "Nature Harm",
        data: [35, 33, 30, 28, 25, 18],
        color: "#9CA3AF",
      },
    ];

    const withoutSolar = new ApexCharts(document.querySelector("#chart-without-solar"), chartOptions(seriesWithoutSolar));
    const withSolar = new ApexCharts(document.querySelector("#chart-with-solar"), chartOptions(seriesWithSolar));

    withoutSolar.render();
    withSolar.render();

    return () => {
      withoutSolar.destroy();
      withSolar.destroy();
    };
  }, []);

  const ChartBox = ({ title, chartId, highlightColor }) => (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-[#f8f7f0] rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
        <h3 className={`text-xl font-semibold mb-4 ${highlightColor}`}>{title}</h3>

        <div className="w-full h-[200px] bg-black rounded-lg overflow-hidden shadow-inner relative">
          <div className="absolute top-3 right-3 text-green-600 text-sm px-2 py-1 rounded-full">
           
          </div>
          <div id={chartId} className="w-full h-full" />
        </div>

        <div className="flex justify-around items-center mt-6 flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 rounded-full bg-green-400"></span>
            <span className="text-sm font-medium text-gray-700">Electricity Bill</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 rounded-full bg-orange-400"></span>
            <span className="text-sm font-medium text-gray-700">CO2 Consumption</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4 rounded-full bg-gray-400"></span>
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
      <ChartBox title="Without Solar" chartId="chart-without-solar" highlightColor="text-orange-600" />
      <ChartBox title="With Solar" chartId="chart-with-solar" highlightColor="text-green-600" />
    </motion.div>
  );
};

export default ChartCard;
