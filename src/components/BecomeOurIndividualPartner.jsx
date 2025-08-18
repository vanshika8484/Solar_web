import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const BecomeOurIndividualPartner = () => {
  return (
    <div className="bg-[#f8f7f0] text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800"
        >
          Earn with Divy Power. <span className=" text-green-800">No Investment Required.</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          Turn your network into income while contributing to India’s clean
          energy mission.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-[#f8f7f0] ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-black">
            How It Works
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Share solar leads with us.</li>
            <li>We handle consultation, installation, and service.</li>
            <li>You earn an attractive commission for every successful sale.</li>
          </ul>
        </div>
      </section>

      {/* Work Models */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Work Models Available
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Commission Basis – Earn per closed sale you refer.</li>
          <li>
            Sublet Basis – Have projects executed under your own branding with
            our support.
          </li>
          <li>
            Vendor Installation – Work with us as an on-call installer for
            projects in your area.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-[#f8f7f0] ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Benefits for You
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Zero Investment – Start immediately, no inventory needed.</li>
            <li>Unlimited Earnings – The more leads you share, the more you earn.</li>
            <li>Flexible Work – Choose your own hours, no fixed targets.</li>
            <li>Marketing Support – Product info, pitch decks, and guidance.</li>
            <li>Brand Leverage – Build trust with Divy Power’s reputation.</li>
          </ul>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Who Can Join
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Freelancers & entrepreneurs</li>
          <li>Students</li>
          <li>Corporate employees</li>
          <li>Influencers & environmental advocates</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <button className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition">
          Start Earning as a Partner
        </button>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default BecomeOurIndividualPartner;
