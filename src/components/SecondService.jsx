import React from 'react'
import { Link } from 'react-router-dom';

const SecondService = () => {
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
                                "Operations_&_Maintenance_(O&M)",
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
                            src="https://divyby.redspace.in/assets/images/updated-images/img%202%20service.png"
                            alt="Installation Work"
                            className="rounded-xl shadow-md object-cover w-[500px] max-auto  h-auto"
                        />
                    </div>

                    {/* Content Block */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h1 className="text-3xl font-bold mb-4">Engineering, Procurement :</h1>
                        <p className="text-sm leading-relaxed mb-6">
                            We offer end-to-end EPC solutions for solar energy projects, handling everything from initial design and technical planning to sourcing high-quality materials and executing on-site construction. Our turnkey approach ensures timely delivery, cost efficiency, and seamless project execution with zero compromise on quality.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm mb-6">
                            <li>Smart Design with Site-Specific Engineering</li>
                            <li> Quality Procurement from Trusted Vendors</li>
                            <li> On-Time Construction with Expert Supervision</li>
                            <li>Turnkey Solutions for Seamless Execution</li>
                        </ul>

                        <p className="text-sm mb-4">
                            We handle all procurement needs, sourcing only the highest-quality solar panels, inverters, and related equipment from trusted manufacturers to ensure performance and durability in every installation.
                        </p>

                        <h2 className="font-semibold text-lg mb-2">Our Simple Four Steps</h2>
                        <p className="text-sm">
                            Our construction team ensures smooth execution with minimal delays. With expert supervision and strict quality control, we guarantee that your project is delivered on time, within budget, and built to last.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default SecondService