import React from "react";
import { Link } from "react-router-dom";

const InstallationServiceAltLayout = () => {
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
                                "Engineering_Procurement",
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
                                    <span className="text-green-600 text-2xl font-extrabold">→</span>
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Brochure */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">📄 Brochures</h3>
                        <div className="space-y-4">
                            {[1, 2].map((_, index) => (
                                <div key={index} className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-md hover:bg-gray-400">
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
                            src="https://divyby.redspace.in/assets/images/updated-images/img%201%20service.png"
                            alt="Installation Work"
                            className="rounded-xl shadow-md object-cover w-[500px] max-auto  h-auto"
                        />
                    </div>

                    {/* Content Block */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h1 className="text-3xl font-bold mb-4">Installation & Commissioning (INC)</h1>
                        <p className="text-sm leading-relaxed mb-6">
                            At Divy Power, we manage the complete installation and commissioning
                            of solar systems, generators, and energy equipment. Our team ensures every
                            part is installed and tested correctly, so your system performs seamlessly
                            from day one.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm mb-6 marker: text-green-900">
                            <li>Creating a Balanced and Nutritious Setup</li>
                            <li>The Importance of System Hydration (Cooling & Maintenance)</li>
                            <li>Connection Between Clean Energy & Mental Peace</li>
                            <li>Getting Reliable Energy Without Interruptions</li>
                        </ul>


                        <p className="text-sm mb-4">
                            We ensure high performance, safety, and long-term dependability through
                            precise site evaluation, custom system configuration, rigorous quality checks,
                            and operational guidance.
                        </p>

                        <h2 className="font-semibold text-lg mb-2">Our Simple Four Steps</h2>
                        <p className="text-sm">
                            Whether you're installing at home, at a factory, or a corporate site,
                            Divy Power ensures minimal downtime and maximum efficiency. We’re committed
                            to making sustainable energy easy, accessible, and reliable.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default InstallationServiceAltLayout;
