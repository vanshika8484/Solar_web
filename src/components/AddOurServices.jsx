import React from "react";
import Footer from "./Footer";

const AddOurServices = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-700">
          Expand Your Business. Offer Solar Solutions with Divy Power.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Boost your revenue by adding high-demand renewable energy products to
          your existing portfolio with zero hassle.
        </p>
      </section>

      {/* Why Add Our Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Why Add Our Services
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>No Setup Costs – We manage production, quality checks, and logistics.</li>
            <li>More Value to Customers – Offer solar as a premium add-on.</li>
            <li>Cross-Selling Opportunities – Bundle with your current services.</li>
            <li>Full Technical Support – Our experts assist in sales and installation.</li>
            <li>Official Authorization – Get your “Authorized Divy Power Partner” certificate.</li>
          </ul>
        </div>
      </section>

      {/* Work Models */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Work Models Available
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Commission Basis – Earn per closed sale you refer.</li>
          <li>Sublet Basis – Have projects executed under your own branding with our support.</li>
          <li>Vendor Installation – Work with us as an on-call installer for projects in your area.</li>
        </ul>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Industries That Benefit Most
          </h2>
          <ul className="list-disc list-inside space-y-2">
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
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Authorization Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Submit your business details.</li>
          <li>Get approved and sign the agreement.</li>
          <li>Receive certification and co-branded marketing material.</li>
          <li>Start offering Divy Power products immediately.</li>
        </ol>
      </section>
      <section className="text-center py-12">
        <button className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition">
           Add Solar to Your Business Today

        </button>
      </section>

      <section>
        <Footer/>
      </section>
    </div>

  );
};

export default AddOurServices;
