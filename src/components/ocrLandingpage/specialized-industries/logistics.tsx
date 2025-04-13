import React from "react";
import Image from "next/image";

const OcrLogistics = () => {
  return (
    <div className="max-w-[900px] mx-auto flex flex-col-reverse lg:flex-row items-center bg-white p-6 lg:p-10">
      {/* Text Section - Appears on top in mobile, left-aligned in large screens */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          AI-Powered <span className="text-teal-500">Logistics OCR</span>
        </h2>
        <p className="text-gray-700 text-lg">
        Reads barcodes, addresses, and tracking numbers instantly.Automates data entry for faster logistics management.
        </p>
      </div>

      {/* Image Section - Appears on bottom in mobile, right-aligned in large screens */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          src="/log-pic.jpg"
          alt="Logistics OCR"
          width={700}
          height={500}
          className="rounded-lg shadow-lg w-[300px] mr-0 sm:mr-10 "
        />
      </div>
    </div>
  );
};

export default OcrLogistics;
