import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const La = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-20">
                <header className="text-center py-10">
                    <h1 className="text-4xl font-bold">Solar Solutions</h1>
                </header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    <div className="md:col-span-2 space-y-6">
                        <img
                            src="https://divyby.redspace.in/assets/images/updated-images/LA%201.jpg"
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Lightning Arrestor (LA)</h2>
                            <p>
                                Our lightning arrestors (LAs) provide essential protection against the destructive forces of lightning strikes, ensuring the safety and longevity of electrical systems and equipment. Designed to efficiently redirect lightning energy into the ground, our LAs serve as a critical defense mechanism, preventing severe damage caused by sudden electrical surges and voltage spikes.
                            </p>
                            <p className="mt-4">
                                Lightning strikes can lead to power disruptions, equipment failure, and even fire hazards, making reliable protection indispensable for residential, commercial, and industrial setups. Our high-performance LAs act as a shield, minimizing the risks associated with unpredictable weather conditions and preserving the integrity of sensitive electronic devices. Their advanced technology ensures quick response and effective energy dispersion upon impact.
                            </p>
                        </section>

                        <img
                            src="https://divyby.redspace.in/assets/images/updated-images/LA%202.jpg"
                            alt="Solar Panels Field"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>

                            <p>
                                Built with durable materials and precision engineering, our lightning arrestors are crafted to withstand extreme environmental conditions while maintaining superior functionality. Whether installed on rooftops, power grids, or industrial facilities, they provide a robust safety net against nature’s volatile forces. With proper placement and installation, these devices enhance system reliability and reduce maintenance costs.
                            </p>
                            <p className="mt-4">
                                At Divy Power, we prioritize safety and efficiency, delivering lightning protection solutions tailored to diverse energy needs. Our LAs not only safeguard infrastructure but also promote uninterrupted power flow, ensuring seamless operation even during storms. With our expertly designed lightning arrestors, you can trust that your electrical systems remain secure against one of nature’s most formidable threats.
                            </p>


                            <section className="mt-6 space-y-4 text-justify">
  <h3 className="text-xl font-semibold text-gray-800">Why Lightning Protection is a Necessity</h3>
  <p>
    With the increasing adoption of sensitive electronic systems and smart grid technology, even a minor lightning surge can result in significant equipment damage, data loss, or system failures. In renewable energy systems such as solar power setups, where inverters and batteries are integral components, safeguarding infrastructure becomes even more critical. Lightning Arrestors act as the first line of defense in such scenarios, absorbing and redirecting the massive electrical discharges safely to the ground.
  </p>
  <p>
    The cost of lightning damage not only includes physical harm to equipment but also the associated downtime and repair costs. In industries like telecommunications, healthcare, and manufacturing, where continuity is essential, even short outages can translate to financial losses and customer dissatisfaction. A properly installed LA significantly reduces such risks by ensuring that transient overvoltages do not reach sensitive areas of the system.
  </p>
  <p>
    Moreover, lightning events are becoming more frequent and severe due to changing weather patterns and climate change. Structures located on elevated terrain, open fields, or near water bodies are particularly vulnerable. Residential buildings with metal rooftops or solar panels installed on terraces are also at higher risk. Hence, incorporating high-quality lightning arrestors is not just a safety protocol but a proactive investment in long-term infrastructure resilience.
  </p>

  <h3 className="text-xl font-semibold text-gray-800">Technical Advantages of Our LAs</h3>
  <p>
    Our Lightning Arrestors are engineered with state-of-the-art metal oxide varistor (MOV) technology, ensuring ultra-fast response times and excellent energy absorption capacity. They are rigorously tested for thermal stability, impulse current withstand capabilities, and resistance to environmental degradation. With IP-rated enclosures, corrosion-resistant materials, and self-healing mechanisms, our LAs provide reliable protection even in challenging weather conditions such as heavy rainfall, intense heat, or humidity.
  </p>
  <p>
    Each unit undergoes stringent quality checks and complies with both Indian and international safety standards, including IEC 60099 and IS/IEC 62305. Available in multiple voltage ratings and current handling capacities, our products cater to a wide variety of applications—from small-scale solar rooftops to large-scale commercial and industrial grids.
  </p>

  <h3 className="text-xl font-semibold text-gray-800">Installation & Maintenance</h3>
  <p>
    At Divy Power, we offer comprehensive installation services backed by expert technicians. Our team conducts site assessments to determine optimal placement and grounding conditions for the arrestor, ensuring maximum efficiency. Post-installation, we also provide regular maintenance checks to verify continuity, test discharge paths, and inspect mechanical integrity.
  </p>
  
</section>


                        </section>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            {["STEP ONE", "STEP TWO", "STEP THREE"].map((step, i) => (
                                <div key={i} className="bg-white p-6 rounded shadow text-center">
                                    <div className="text-green-600 text-2xl font-bold">0{i + 1}</div>
                                    <div className="mt-2 font-semibold">{step}</div>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Tactical services through market web services
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-white p-6 rounded shadow">
                            <input
                                type="text"
                                placeholder="Enter Keyword"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-2">Our Products</h3>
                            {[
                                "Solar-pannel",
                                "Solar-Pump",
                                "Micro-Inverter",
                                "Earthing",
                                "Gas-Genset",
                                "Diesel/Petrol Genset",
                            ].map((product, i) => (
                                <Link
                                    to={`/${product}`}
                                    key={i}
                                    className="block w-full px-4 py-2 rounded-lg text-green-700 hover:text-white hover:bg-green-600 transition-all duration-200 font-medium"
                                >
                                    {product.replace("-", " ")} &rarr;
                                </Link>
                            ))}
                        </div>

                       

                        <div className="bg-white p-6 rounded shadow text-sm space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Email:</span>
                                <a href="mailto:info@example.com" className="text-green-700 hover:underline">
                                    info@divyapower.in
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Phone:</span>
                                <a href="tel:+011234567890" className="text-green-700 hover:underline">
                                    +91 9310259325
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Address:</span>
                                <span>53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,
Nai Basti Dundaher Ghaziabad,
Uttar Pradesh 201001</span>
                            </div>

                            <div className="flex items-start gap-2">
                               
                             
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default La