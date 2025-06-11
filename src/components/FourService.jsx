import React from 'react'
import { Link } from 'react-router-dom';

const FourService = () => {
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
                                "Operations_&_Maintenance_(O&M)",
                                "Customized_Solar_Solutions",
                            ].map((item, idx) => (
                                <li key={idx} className="flex justify-between items-center">
                                    <Link to={`/${item}`}> <span>{item}</span></Link>
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
                            src="https://divyby.redspace.in/assets/images/updated-images/img%204%20service.png"
                            alt="Installation Work"
                            className="rounded-xl shadow-md w-full object-cover"
                        />
                    </div>

                    {/* Content Block */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h1 className="text-3xl font-bold mb-4">Recycling & Sustainability:</h1>
                        <p className="text-sm leading-relaxed mb-6">
                           We provide adaptable Annual Maintenance Contract (AMC) packages tailored for solar systems, diesel generators, and a range of other equipment, ensuring uninterrupted performance and long-term reliability. Our proactive approach focuses on preserving efficiency while minimizing operational disruptions, allowing you to enjoy a hassle-free power solution.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm mb-6">
                            <li>Concise & Professiona</li>
                            <li> Customer-Centric & Reassuring</li>
                            <li>  Technical & Detail-Oriented</li>
                            <li>Marketing & Engaging</li>
                        </ul>

                        <p className="text-sm mb-4">
                            With regular check-ups and preventive maintenance, we detect potential issues before they escalate, keeping your systems in peak condition. Our skilled technicians conduct detailed inspections, replacing worn-out components and fine-tuning performance to prevent unnecessary breakdowns.
                        </p>

                        <h2 className="font-semibold text-lg mb-2">Our Simple Four Steps</h2>
                        <p className="text-sm">
                            In case of unexpected failures, we prioritize swift issue resolution through rapid troubleshooting and expert intervention. From minor adjustments to major repairs, we handle it all with professionalism—so you never have to worry about downtime affecting your operations
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default FourService