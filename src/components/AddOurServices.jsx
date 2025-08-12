import React from "react";
import Footer from "./Footer";

const AddOurServices = () => {
  return (
    <div className=" bg-[#f8f7f0] text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Expand Your Business.  <span className="font-extrabold text-green-800">Offer Solar Solutions with Divy Power</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Boost your revenue by adding high-demand renewable energy products to your existing portfolio with zero hassle.
        </p>
      </section>

      {/* Why Add Our Services */}
      <section className="bg-[#f8f7f0] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">
            Why Add Our Services
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>No Setup Costs – We manage production, quality checks, and logistics.</li>
            <li>More Value to Customers – Offer solar as a premium add-on.</li>
            <li>Cross-Selling Opportunities – Bundle with your current services.</li>
            <li>Full Technical Support – Our experts assist in sales and installation.</li>
            <li>Official Authorization – Get your <strong>Authorized Divy Power Partner</strong> certificate.</li>
          </ul>
        </div>
      </section>

      {/* Work Models */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          Work Models Available
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
          <li>Commission Basis – Earn per closed sale you refer.</li>
          <li>Sublet Basis – Have projects executed under your own branding with our support.</li>
          <li>Vendor Installation – Work with us as an on-call installer for projects in your area.</li>
        </ul>
      </section>

      {/* Industries */}
      <section className="bg-[#f8f7f0] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">
            Industries That Benefit Most
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            <li>Electrical shops</li>
            <li>Hardware retailers</li>
            <li>Appliance stores</li>
            <li>Building contractors</li>
            <li>Energy consultants</li>
          </ul>
        </div>
      </section>

      {/* Authorization Steps */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">
          Authorization Steps
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 max-w-3xl mx-auto">
          <li>Submit your business details.</li>
          <li>Get approved and sign the agreement.</li>
          <li>Receive certification and co-branded marketing material.</li>
          <li>Start offering Divy Power products immediately.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <button className="bg-green-700 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-green-800 transition">
          Add Solar to Your Business Today
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddOurServices;
