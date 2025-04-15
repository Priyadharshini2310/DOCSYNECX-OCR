// "use client";

// import Image from "next/image";
// import React from "react";

// const OcrDemo = () => {
//   const jsonData = {
//     BankDetails: {
//       "Bank A/C": "35561950840",
//       "Bank IFSC": "SBIN0061798",
//       "Bank Name": "State Bank Of India",
//       Branch: "SME Ganapathy Branch Coimbatore.",
//     },
//     CompanyDetails: {
//       Address:
//         "No.272/1, Thondamuthur Main Road, Vembu Avenue Junction, No.272/1, Thondamuthur Main Road",
//       Contact: ["Mobile : 9788851751", "Phone :"],
//       Email: "",
//       GSTIN: "33AABCA8403B1ZF",
//       Name: "Jaikrishnaa Auto Pvt Ltd-E10057",
//       PAN: "",
//       Specializations: [],
//       UDYAM: "",
//     },
//     InvoiceDetails: {
//       Code: "33",
//       Date: "23/11/2024",
//       InvoiceNo: "LCI100572415051",
//       "P.O.no": "",
//       RABillNo: "",
//       State: "Tamil Nadu",
//       WorkOrderNo: "",
//     },
//     ReceiverDetails: {
//       Address: "NO.18A, VASUKI STREET, THONDAMUTHUR, Coimbatore 641109",
//       Code: "33",
//       GSTIN: "CUS-1005749143",
//       Name: "NISHANTH.K.R",
//       State: "Tamil Nadu",
//     },
//     ServiceDetails: [
//       {
//         Amount: "1000",
//         Description: "Labour Charges: Service & Maintenance (2.5 hours)",
//         SACCode: "Service Charges",
//       },
//       {
//         Amount: "401",
//         Description:
//           "Parts Used (Labour, Oil, Filter, Vehicle Polishing, etc.)",
//         SACCode: "Parts Used",
//       },
//     ],
//     TotalAmount: {
//       AfterTax: "1401",
//       BeforeTax: "1401",
//       InWords: "One Thousand Four Hundred One Only.",
//     },
//   };

//   return (
//     <div className="bg-white py-10" id="ocrdemo">
//       <div className="sm:w-[1400px] w-full mx-auto px-4 ">
//         <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
//         Step in and witness the future at work !
//         </h2>

//         <div className="bg-white shadow-lg rounded-lg p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
//           <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg lg:h-[400px] h-auto flex flex-col gap-10">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 Filters
//               </h3>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Industry
//                 </label>
//                 <select className="w-full mt-1 p-2 border rounded" disabled>
//                   <option>Tax Invoice</option>
//                   <option>Logistics</option>
//                   <option>Receipt</option>
//                   <option>Patient Forms</option>
//                   <option>Payment Abstract</option>
//                 </select>
//               </div>
//               <h4 className="text-sm font-semibold text-gray-900 mb-2">
//                 Document Types
//               </h4>
//               <div className="grid grid-cols-2 gap-2 text-sm">
//                 {[
//                   "Tax Invoice",
//                   "Sales Invoice ",
//                   "GST Invoice",
//                   "Patient Forms",
//                   "POS Receipts",
//                   "Purchase Order",
//                   "e-Way Bill",
//                   "Prescriptions",
//                   "Custom Carrier",
//                   "Custom Receipts",
//                 ].map((type, index) => (
//                   <button
//                     key={index}
//                     className="px-2 py-1 bg-gray-200 rounded text-gray-800 text-xs h-8 "
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg shadow-sm sm:mt-4 lg:w-full">
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                 Extracted Fields
//               </h4>
//               <ul className="text-sm text-gray-700 space-y-2">
//                 <li>
//                   <strong>InvoiceDetails</strong>{" "}
//                 </li>
//                 <li>
//                   <strong>BankDetails</strong>{" "}
//                 </li>
//                 <li>
//                   <strong>CompanyDetails</strong>{" "}
//                 </li>
//                 <li>
//                   <strong>ReceiverDetails</strong>{" "}
//                 </li>
//                 <li>
//                   <strong>Purchase Order</strong>{" "}
//                 </li>
//                 <li>
//                   <strong>ServiceDetails</strong>
//                 </li>
//                 <li>
//                   <strong>Total Amount:</strong>
//                 </li>
//               </ul>
//             </div>
//             {/* <div className="bg-gray-100 p-4 rounded-lg shadow-sm sm:mt-4 lg:w-[700px] lg:h-[500vh] h-full">
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                 Our Solution
//               </h4>
//               Our cutting-edge AI-powered OCR solution leverages the latest
//               advancements in Large Language Models (LLMs) and Vision Language
//               Models (VLMs) to deliver unparalleled accuracy in document
//               processing. Whether its invoices, receipts, bank statements, or ID
//               cards, our intelligent system extracts key details with precision,
//               reducing manual effort and errors. By combining deep learning and
//               computer vision, our OCR solution understands context, structure,
//               and handwritten text, ensuring high reliability across industries.
//               Experience seamless automation, improved efficiency, and enhanced
//               data extraction with our next-gen AI-driven OCR
//               technology—transforming the way businesses handle and process
//               documents with smart, adaptive intelligence.
//             </div> */}
//           </div>
//           <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-6">
//             <div className="w-full lg:w-2/3 flex flex-col gap-4">
//               <div className="rounded-lg shadow-sm border border-gray-300/10 overflow-hidden">
//                 <div className="bg-gray-200 p-2 flex  justify-between items-center">
//                   <span className="text-gray-800 font-medium">Tax Invoice</span>
//                   <span className="text-gray-600 text-sm">Read-only</span>
//                 </div>
//                 <div className="bg-white p-4 flex justify-center">
//                   <Image
//                     src="/invoice.png"
//                     alt="OCR Document Preview"
//                     className="w-full max-w-3xl shadow-md"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-[400px] flex flex-col gap-4">
//               <div className="bg-gray-100 p-4 rounded-lg shadow-sm h-[550px] overflow-auto">
//                 <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                   JSON Data
//                 </h4>
//                 <pre className="text-sm text-gray-700 whitespace-pre-wrap">
//                   {JSON.stringify(jsonData, null, 2)}
//                 </pre>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow-sm h-[550px] overflow-auto">
//                 <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                   Visualized Data
//                 </h4>
//                 <div className="space-y-2">
//                   {Object.entries(jsonData).map(([section, fields]) => (
//                     <div key={section}>
//                       <h5 className="text-md font-semibold text-gray-800 mt-2">
//                         {section}
//                       </h5>
//                       {section === "ServiceDetails"
//                         ? (fields as any[]).map(
//                             (service: any, index: number) => (
//                               <div key={index} className="mb-4">
//                                 <h6 className="text-sm font-semibold text-gray-700">
//                                   Service {index + 1}
//                                 </h6>
//                                 {Object.entries(service).map(([key, value]) => (
//                                   <div key={key} className="mb-2">
//                                     <label className="block text-sm font-medium text-gray-700">
//                                       {key}
//                                     </label>
//                                     <input
//                                       type="text"
//                                       defaultValue={value as string}
//                                       className="w-full mt-1 p-2 border rounded  bg-white border-gray-300"
//                                     />
//                                   </div>
//                                 ))}
//                               </div>
//                             )
//                           )
//                         : Object.entries(fields).map(([key, value]) => (
//                             <div key={key} className="mb-2">
//                               <label className="block text-sm font-medium text-gray-700">
//                                 {key}
//                               </label>
//                               <input
//                                 type="text"
//                                 disabled
//                                 defaultValue={
//                                   Array.isArray(value)
//                                     ? value.join(", ")
//                                     : value
//                                 }
//                                 className="w-full mt-1 p-2 border rounded bg-white border-gray-300"
//                               />
//                             </div>
//                           ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OcrDemo;
"use client";

import Image from "next/image";
import React from "react";

type BankDetails = Record<string, string>;

type CompanyDetails = {
  Address: string;
  Contact: string[];
  GSTIN: string;
  Name: string;
};

type InvoiceDetails = Record<string, string>;
type ReceiverDetails = Record<string, string>;

type ServiceItem = {
  Amount: string;
  Description: string;
  SACCode: string;
};

type TotalAmount = Record<string, string>;

type JsonData = {
  BankDetails: BankDetails;
  CompanyDetails: CompanyDetails;
  InvoiceDetails: InvoiceDetails;
  ReceiverDetails: ReceiverDetails;
  ServiceDetails: ServiceItem[];
  TotalAmount: TotalAmount;
};

const OcrDemo = () => {
  const jsonData: JsonData = {
    BankDetails: {
      "Bank A/C": "35561950840",
      "Bank IFSC": "SBIN0061798",
      "Bank Name": "State Bank Of India",
      Branch: "SME Ganapathy Branch Coimbatore.",
    },
    CompanyDetails: {
      Address:
        "No.272/1, Thondamuthur Main Road, Vembu Avenue Junction, No.272/1, Thondamuthur Main Road",
      Contact: ["Mobile : 9788851751", "Phone :9788851751"],
      GSTIN: "33AABCA8403B1ZF",
      Name: "Jaikrishnaa Auto Pvt Ltd-E10057",
    },
    InvoiceDetails: {
      Code: "33",
      Date: "23/11/2024",
      InvoiceNo: "LCI100572415051",
      State: "Tamil Nadu",
    },
    ReceiverDetails: {
      Address: "NO.18A, VASUKI STREET, THONDAMUTHUR, Coimbatore 641109",
      Code: "33",
      GSTIN: "CUS-1005749143",
      Name: "NISHANTH.K.R",
      State: "Tamil Nadu",
    },
    ServiceDetails: [
      {
        Amount: "1000",
        Description: "Labour Charges: Service & Maintenance (2.5 hours)",
        SACCode: "Service Charges",
      },
      {
        Amount: "401",
        Description:
          "Parts Used (Labour, Oil, Filter, Vehicle Polishing, etc.)",
        SACCode: "Parts Used",
      },
    ],
    TotalAmount: {
      AfterTax: "1401",
      BeforeTax: "1187.50",
      InWords: "One Thousand Four Hundred One Only.",
    },
  };

  return (
    <div className="bg-white py-10" id="ocrdemo">
      <div className="sm:w-[1400px] w-full mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Step in and witness the future at work!
        </h2>

        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg lg:h-[400px] h-auto flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Filters
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Industry
                </label>
                <select className="w-full mt-1 p-2 border rounded" disabled>
                  <option>Tax Invoice</option>
                  <option>Logistics</option>
                  <option>Receipt</option>
                  <option>Patient Forms</option>
                  <option>Payment Abstract</option>
                </select>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Document Types
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Tax Invoice",
                  "Sales Invoice ",
                  "GST Invoice",
                  "Patient Forms",
                  "POS Receipts",
                  "Purchase Order",
                  "e-Way Bill",
                  "Prescriptions",
                  "Custom Carrier",
                  "Custom Receipts",
                ].map((type, index) => (
                  <button
                    key={index}
                    className="px-2 py-1 bg-gray-200 rounded text-gray-800 text-xs h-8"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Extracted Fields */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm sm:mt-4 lg:w-full">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Extracted Fields
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>InvoiceDetails</strong>
                </li>
                <li>
                  <strong>BankDetails</strong>
                </li>
                <li>
                  <strong>CompanyDetails</strong>
                </li>
                <li>
                  <strong>ReceiverDetails</strong>
                </li>
                <li>
                  <strong>Purchase Order</strong>
                </li>
                <li>
                  <strong>ServiceDetails</strong>
                </li>
                <li>
                  <strong>Total Amount:</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              <div className="rounded-lg shadow-sm border border-gray-300/10 overflow-hidden">
                <div className="bg-gray-200 p-2 flex justify-between items-center">
                  <span className="text-gray-800 font-medium">Tax Invoice</span>
                  <span className="text-gray-600 text-sm">Read-only</span>
                </div>
                <div className="bg-white p-4 flex justify-center">
                  <Image
                    src="/invoice.png"
                    alt="OCR Document Preview"
                    width={800}
                    height={600}
                    className="w-full max-w-3xl shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* JSON and Visualized Data */}
            <div className="w-full lg:w-[400px] flex flex-col gap-4">
              {/* JSON Output */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm h-[550px] overflow-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  JSON Data
                </h4>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {JSON.stringify(jsonData, null, 2)}
                </pre>
              </div>

              {/* Visualized Fields */}
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm h-[550px] overflow-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Visualized Data
                </h4>
                <div className="space-y-2">
                  {Object.entries(jsonData).map(([section, fields]) => (
                    <div key={section}>
                      <h5 className="text-md font-semibold text-gray-800 mt-2">
                        {section}
                      </h5>

                      {section === "ServiceDetails"
                        ? (fields as ServiceItem[]).map((service, index) => (
                            <div key={index} className="mb-4">
                              <h6 className="text-sm font-semibold text-gray-700">
                                Service {index + 1}
                              </h6>
                              {Object.entries(service).map(([key, value]) => (
                                <div key={key} className="mb-2">
                                  <label className="block text-sm font-medium text-gray-700">
                                    {key}
                                  </label>
                                  <input
                                    type="text"
                                    defaultValue={value}
                                    className="w-full mt-1 p-2 border rounded bg-white border-gray-300"
                                  />
                                </div>
                              ))}
                            </div>
                          ))
                        : Object.entries(fields as Record<string, string | string[]>).map(
                            ([key, value]) => (
                              <div key={key} className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                  {key}
                                </label>
                                <input
                                  type="text"
                                  disabled
                                  defaultValue={
                                    Array.isArray(value)
                                      ? value.join(", ")
                                      : value
                                  }
                                  className="w-full mt-1 p-2 border rounded bg-white border-gray-300"
                                />
                              </div>
                            )
                          )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OcrDemo;
