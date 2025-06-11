import React from 'react'
import { Link } from 'react-router-dom';

const FiveService = () => {
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
                                "Recycling_&_Sustainability",
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
                            src="https://divyby.redspace.in/assets/images/updated-images/img%205%20service.png"
                            alt="Installation Work"
                            className="rounded-xl shadow-md w-full object-cover"
                        />
                    </div>

                    {/* Content Block */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h1 className="text-3xl font-bold mb-4">Customized Solar Solutions:</h1>
                        <p className="text-sm leading-relaxed mb-6">
                           Just like the human body requires routine check-ups to stay healthy, your energy system needs regular assessments to maintain efficiency and reliability. Our detailed evaluations cover critical components such as solar panels, wiring, inverters, batteries, and generators, ensuring every part functions optimally. By proactively identifying wear and inefficiencies, we help you avoid costly breakdowns and unexpected power failures.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm mb-6">
                            <li>Concise & Professional</li>
                            <li> Customer-Centric & Reassuring</li>
                            <li>  Technical & Detail-Oriented</li>
                            <li>Marketing & Engaging</li>
                        </ul>

                        <p className="text-sm mb-4">
                            Through comprehensive diagnostics, we detect early signs of deterioration and potential risks before they escalate into major issues. Our expert technicians thoroughly inspect connections, performance metrics, and structural integrity, providing tailored solutions to optimize your system’s lifespan and output.
                        </p>

                        <h2 className="font-semibold text-lg mb-2">Our Simple Four Steps</h2>
                        <p className="text-sm">
                           Think of it as a full-body scan for your power setup—giving you peace of mind and ensuring continuous, smooth operation. With our proactive approach, you’ll always have a healthy and efficient energy system, ready to support your power needs without disruption.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default FiveService