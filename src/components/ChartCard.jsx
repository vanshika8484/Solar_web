import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { motion } from "framer-motion";

const ChartCard = () => {
  useEffect(() => {
    const options = {
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
    };

    const chart = new ApexCharts(document.querySelector("#custom-line-chart"), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-start md:items-center justify-between w-full h-screen p-8   bg-[#11592c] text-black"
    >
      {/* Labels */}
      <div className="space-y-6 mb-8 md:mb-0 md:mr-8">
        <div className="flex items-center space-x-3">
          <span className="h-4 w-4 rounded-full bg-blue-400"></span>
          <span className="text-lg font-medium text-white">Electricity Bill</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="h-4 w-4 rounded-full bg-green-400"></span>
          <span className="text-lg font-medium text-white">CO2 Consumption</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="h-4 w-4 rounded-full bg-yellow-400"></span>
          <span className="text-lg font-medium text-white">Nature Harm</span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[400px] md:w-3/4 relative rounded-lg overflow-hidden bg-gray-900 shadow-inner">
        {/* Circular Marker */}
        <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-2 py-1 rounded-full shadow-md">
          ●
        </div>
        <div id="custom-line-chart" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default ChartCard;
