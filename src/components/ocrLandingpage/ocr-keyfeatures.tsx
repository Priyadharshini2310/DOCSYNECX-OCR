"use client";

import React from "react";
import {    // Represents structured data extraction
    FaFilePdf,        // Multi-format document support
    FaServer,         // API & backend integration
    FaCogs,          // Customizable field mapping
    FaCheckCircle,   // Precision & reliability
    FaTasks,         // Batch processing
    FaCamera         // OCR scanning & image-to-text
  } from "react-icons/fa";

export default function OcrKeyFeatures() {
    const features = [
        {
          icon: <FaCamera className="text-teal-500 text-3xl" />,
          title: "Advanced AI-Powered Text Extraction",
        },
        {
          icon: <FaCogs className="text-teal-500 text-3xl" />,
          title: "Customizable Field Mapping",
        },
        {
          icon: <FaFilePdf className="text-teal-500 text-3xl" />,
          title: "Multi-Format Document Support",
        },
        {
          icon: <FaServer className="text-teal-500 text-3xl" />,
          title: "Enterprise-Grade API Integration",
        },
        {
          icon: <FaCheckCircle className="text-teal-500 text-3xl" />,
          title: "High Precision & Reliability",
        },
        {
          icon: <FaTasks className="text-teal-500 text-3xl" />,
          title: "Batch Processing Capability",
        },
      ];
      

  return (
    <div className="bg-white pt-10 sm:pt-20 mx-3 sm:mx-0">
      <div
        className="w-full bg-white py-6 flex flex-col items-center text-center"
        id="services"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 mb-2">
          Transform Documents with{" "}<span className="text-teal-500">docsynecx</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl ">
          Effortlessly extract critical data with enterprise-level
          precision—zero manual work, maximum efficiency. Unlock the future of
          seamless data transformation today!
        </p>
      </div>
      <div className="py-10 flex justify-center items-center">
        <div className="bg-white p-8 sm:p-0 max-w-2xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First three features */}
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-6 transition-colors hover:text-teal-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-tl-3xl rounded-tr-md rounded-bl-sm rounded-br-3xl rotate-[78deg]">
                    <div className="rotate-[-78deg]">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl text-gray-600 font-semibold hover:text-teal-400 mb-2">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {/* Last three features */}
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-6 transition-colors hover:text-teal-300"
              >
                 <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-tl-3xl rounded-tr-md rounded-bl-sm rounded-br-3xl rotate-[78deg]">
                    <div className="rotate-[-78deg]">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl  mb-2 text-gray-600 hover:text-teal-400 font-semibold">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
