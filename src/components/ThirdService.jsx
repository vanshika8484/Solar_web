import React from 'react'
import { Link } from 'react-router-dom';

const ThirdService = () => {
    return (
        <div className="bg-[#f9f9f4] text-[#222] min-h-screen py-12 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Sidebar */}
                <aside className="space-y-8 lg:sticky top-12 h-fit">
                    {/* Services */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">🔧 Services</h3>
                        <ul className="space-y-3 text-sm">
                            {[
                                "Installation_&_Commissioning_(INC)",
                                "Engineering_Procurement",
                                "Recycling_&_Sustainability",
                                "Customized_Solar_Solutions",
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex justify-between items-center hover:bg-green-600 font-bold transition-colors duration-200 px-4 py-2 rounded"
                                >
                                    <Link to={`/${item}`}>
                                        <span>{item}</span>
                                    </Link>
                                    <span className="text-green-600 text-lg">→</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brochure */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">📄 Brochures</h3>
                        <div className="space-y-4">
                            {[1, 2].map((_, index) => (
                                <div key={index} className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                                    <div>
                                        <div className="font-medium">Document New Business</div>
                                        <div className="text-gray-500 text-xs">Business Consultation</div>
                                    </div>
                                    <span className="text-green-600 text-xl">⬇️</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-2">
                    {/* Header Image */}
                    <div className="w-full mb-8">
                        <img
                            src="https://divyby.redspace.in/assets/images/updated-images/img%203%20service.png"
                            alt="Installation Work"
                            className="rounded-xl shadow-md object-cover w-[500px] max-auto  h-auto"
                        />
                    </div>

                    {/* Content Block */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h1 className="text-3xl font-bold mb-4">Operations & Maintenance (O&M):</h1>
                        <p className="text-sm leading-relaxed mb-6">
                            Divy Power provides comprehensive maintenance and performance monitoring for your solar and power systems. Our O&M services are designed to detect issues early, prevent breakdowns, and ensure that your system runs safely, efficiently, and at peak output, year after year.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm mb-6">
                            <li>Regular Inspections & Preventive Maintenance</li>
                            <li> Real-Time Performance Monitoring</li>
                            <li>  Fast Issue Detection & Resolution</li>
                            <li>Long-Term System Reliability & Output</li>
                        </ul>

                        <p className="text-sm mb-4">
                            Our proactive approach helps identify potential faults before they become costly problems. With real-time monitoring and analytics, we maximize uptime and extend the life of your system.
                        </p>

                        <h2 className="font-semibold text-lg mb-2">Our Simple Four Steps</h2>
                        <p className="text-sm">
                            From cleaning solar modules to replacing worn components, we ensure your system operates at peak efficiency year-round—with minimal disruptions and consistent energy output.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default ThirdService