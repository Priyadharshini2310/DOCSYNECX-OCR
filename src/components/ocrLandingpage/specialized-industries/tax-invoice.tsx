import React from "react";
import Image from "next/image";

const TaxInvoice = () => {
  return (
    <div className="max-w-[900px] mx-auto flex flex-col lg:flex-row items-center bg-white p-6 lg:p-10">
      {/* Image Section - Appears on top in mobile, centered in large screens */}
      <div className="w-full flex justify-center mb-6 lg:mb-0">
        <Image
          src="/invoice-pic.jpg"
          alt="Healthcare OCR"
          width={700} // Adjust image width for large screens
          height={500} // Adjust image height accordingly
          className="rounded-lg shadow-lg w-[300px] mr-0 sm:mr-10 "
        />
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          AI-Powered <span className="text-teal-500">Tax Invoice</span>
        </h2>
        <p className="text-gray-700 text-lg">
        Captures invoice details, contracts, and receipts accurately.Syncs extracted data with ERP, SAP, and other systems.
        </p>
      </div>
    </div>
  );
};

export default TaxInvoice;
