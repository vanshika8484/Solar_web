import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { FaTools, FaCogs, FaRecycle, FaSun } from "react-icons/fa";

const services = [
  {
    label: "Installation & Commissioning",
    path: "Installation_&_Commissioning_(INC)",
    // icon: <FaTools className="text-green-700 text-3xl" />,
  },
  {
    label: "Operations & Maintenance",
    path: "Operations_&_Maintenance_(O&M)",
    // icon: <FaCogs className="text-green-700 text-3xl" />,
  },
  {
    label: "Recycling & Sustainability",
    path: "Recycling_&_Sustainability",
    // icon: <FaRecycle className="text-green-700 text-3xl" />,
  },
  {
    label: "Customized Solar Solutions",
    path: "Customized_Solar_Solutions",
    // icon: <FaSun className="text-green-700 text-3xl" />,
  },
];

const SecondService = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen GetfontHome mb-2">
    

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-10">🔧 Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-lg mt-4 mb-2 text-blue-900">{service.label}</h3>
              <Link
                to={`/${service.path}`}
                className="mt-auto text-blue-900 font-medium hover:underline"
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white text-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 mb-16">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src="https://divyby.redspace.in/assets/images/updated-images/img%202%20service.png"
          alt="Installation"
          className="rounded-xl mb-6 w-full max-h-[400px] object-cover"
        />

        <h2 className="text-2xl font-bold text-blue-900 mb-4">Engineering, Procurement & Construction</h2>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          We offer end-to-end EPC solutions for solar energy projects—handling everything from
          design and planning to material sourcing and construction. Our turnkey approach ensures
          your project is on-time, efficient, and built to last.
        </p>

        <ul className="list-disc pl-6 text-sm mb-4 text-gray-700 marker:text-blue-900">
          <li>Smart Design with Site-Specific Engineering</li>
          <li>Quality Procurement from Trusted Vendors</li>
          <li>On-Time Construction with Expert Supervision</li>
          <li>Turnkey Solutions for Seamless Execution</li>
        </ul>

        <p className="text-sm text-gray-700 mb-4">
          We source only the highest-quality solar panels, inverters, and components to ensure long-term
          performance, reliability, and safety in every installation.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 ">Our Simple Four Steps</h3>
        <p className="text-sm text-gray-700">
          Our team ensures smooth execution with expert supervision, minimal delays, and strict
          quality control—from planning to power-up.
        </p>
      </main>
    </div>
  );
};

export default SecondService;



// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const services = [
//   "Installation_&_Commissioning_(INC)",
//   "Operations_&_Maintenance_(O&M)",
//   "Recycling_&_Sustainability",
//   "Customized_Solar_Solutions",
// ];

// const SecondService = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-12 lg:px-24">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Sidebar */}
//         <aside className="space-y-8 lg:sticky top-12 h-fit">
//           {/* Services */}
//           <div className="bg-gray-800 rounded-xl shadow-md p-6">
//             <h3 className="text-xl font-semibold mb-4 text-blue-400">🔧 Services</h3>
//             <ul className="space-y-3 text-sm">
//               {services.map((item, idx) => (
//                 <li
//                   key={idx}
//                   className="flex justify-between items-center hover:bg-blue-700 transition-colors duration-200 px-4 py-2 rounded font-semibold"
//                 >
//                   <Link to={`/${item}`} className="text-white hover:underline">
//                     <span>{item}</span>
//                   </Link>
//                   <span className="text-blue-400 text-lg">→</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Brochure */}
//           <div className="bg-gray-800 rounded-xl shadow-md p-6">
//             <h3 className="text-xl font-semibold mb-4 text-blue-400">📄 Brochures</h3>
//             <div className="space-y-4">
//               {[1, 2].map((_, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between items-center text-sm p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition"
//                 >
//                   <div>
//                     <div className="font-medium">Document New Business</div>
//                     <div className="text-gray-300 text-xs">Business Consultation</div>
//                   </div>
//                   <span className="text-blue-400 text-xl">⬇️</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="lg:col-span-2">
//           {/* Header Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full mb-8"
//           >
//             <img
//               src="https://divyby.redspace.in/assets/images/updated-images/img%202%20service.png"
//               alt="Installation Work"
//               className="rounded-xl shadow-lg object-cover w-full max-h-[400px]"
//             />
//           </motion.div>

//           {/* Content Block */}
//           <section className="bg-gray-800 p-8 rounded-xl shadow-md">
//             <h1 className="text-3xl font-bold mb-4 text-blue-400">
//               Engineering, Procurement & Construction
//             </h1>
//             <p className="text-gray-200 text-sm leading-relaxed mb-6">
//               We offer end-to-end EPC solutions for solar energy projects, handling everything from
//               initial design and technical planning to sourcing high-quality materials and executing
//               on-site construction. Our turnkey approach ensures timely delivery, cost efficiency,
//               and seamless project execution with zero compromise on quality.
//             </p>

//             <ul className="list-disc pl-5 space-y-2 text-sm mb-6 marker:text-blue-500 text-gray-100">
//               <li>Smart Design with Site-Specific Engineering</li>
//               <li>Quality Procurement from Trusted Vendors</li>
//               <li>On-Time Construction with Expert Supervision</li>
//               <li>Turnkey Solutions for Seamless Execution</li>
//             </ul>

//             <p className="text-sm text-gray-300 mb-4">
//               We handle all procurement needs, sourcing only the highest-quality solar panels,
//               inverters, and related equipment from trusted manufacturers to ensure performance and
//               durability in every installation.
//             </p>

//             <h2 className="font-semibold text-lg mb-2 text-blue-400">Our Simple Four Steps</h2>
//             <p className="text-sm text-gray-300">
//               Our construction team ensures smooth execution with minimal delays. With expert
//               supervision and strict quality control, we guarantee that your project is delivered
//               on time, within budget, and built to last.
//             </p>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SecondService;
