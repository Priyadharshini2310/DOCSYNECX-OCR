import React from "react";

const OcrWorkFlow: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      <h2 className="text-3xl font-semibold text-gray-900 text-center">
        Accelerate every part of your <span className="text-teal-500">OCR</span>
      </h2>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mb-10 sm:mb-10">
        Our AI-powered OCR agent processes documents instantly, converting them
        into actionable data with unmatched accuracy. Free your team from
        tedious tasks and let automation do the heavy liftings
      </p>

      {/* Workflow Sections */}
      <div className="flex flex-col lg:flex-row mt-10 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Document Capture */}
        <div className="relative p-10 border rounded-2xl  bg-white min-w-[280px] shadow-blue-100 shadow-xl border-gray-200">
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm font-semibold bg-white border rounded-md border-gray-300">
            Capture
          </span>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>▪ Lens for Mobile</li>
            <li>▪ Lens for Browser</li>
          </ul>
        </div>

        {/* Dotted Connector */}
        <div className="hidden lg:flex items-center rotate-90">
          <div className="border-l border-dashed h-12 border-gray-500"></div>
        </div>

        {/* Data Extraction */}
        <div className="relative p-10 border rounded-2xl  bg-white min-w-[280px] shadow-blue-100 shadow-xl border-gray-200">
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm font-semibold bg-white border rounded-md border-gray-300">
            Data Extraction
          </span>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>▪ Tax Invoice OCR API</li>
            <li>▪ Receipt OCR API</li>
            <li>▪ Logistics OCR API</li>
            <li>▪ Prescriptions OCR API</li>
            <li>▪ Patient Form OCR API</li>
            <li>▪ Customer Form OCR API</li>
            <li>▪ Any Docs LLM OCR API</li>
          </ul>
        </div>

        {/* Dotted Connector */}
        <div className="hidden lg:flex items-center rotate-90">
          <div className="border-l border-dashed h-12 border-gray-500"></div>
        </div>

        {/* Data Services */}
        <div className="relative p-10 border  shadow-blue-100 shadow-xl rounded-2xl  bg-white min-w-[280px] border-gray-200">
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm font-semibold bg-white border  rounded-md border-gray-300">
            Data Services
          </span>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>▪ API Integration</li>
            <li>▪ Product Intelligence</li>
            <li>▪ Logistics Supply Chain</li>
            <li>▪ Multiple Format Downloads</li>
            <li>▪ Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OcrWorkFlow;
