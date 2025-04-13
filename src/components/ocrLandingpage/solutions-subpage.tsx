
// "use client";
// import React, { useState } from "react";

// interface SolutionSubPageProps {
//   setDropdownOpen?: (isOpen: boolean) => void;
// }

// const solutionCategories = [
//   {
//     category: "By Function",
//     items: [
//       "💰 Financial Document Automation",
//       "🚚 Supply Chain Document Processing",
//       "👩‍💼 Healthcare Document Processing",
//       "🎧 Retail Receipts Processing",
//       "⚖️ Legal Contract Parsing & Review",
//     ],
//   },
//   {
//     category: "By Industry",
//     items: [
//       "🏦 Banking & Financial Services",
//       "🛡️ Claims & Policy Processing",
//       "🏥 Medical Forms & Health Records",
//       "🚛 Shipment & Logistics Automation",
//       "🏢 Real Estate Lease & Agreement Digitization",
//       "Human Resources & Employee Onboarding",
//     ],
//   },
//   {
//     category: "By Use Case",
//     items: [
//       "📑 Invoice Extraction & Validation",
//       "🔍 Automated Financial Matching",
//       "🎁 Loyalty Program Receipt Scanning",
//       "🗄️ Smart Document Archival",
//       "📬 Tenant & Property Document",
//       "Healthcare Forms & Prescription Processing",
//     ],
//   },
// ];

// const SolutionSubPage: React.FC<SolutionSubPageProps> = ({ setDropdownOpen }) => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [contentTitle, setContentTitle] = useState<string>(solutionCategories[0].category);

//   const handleItemClick = (index: number) => {
//     setActiveIndex(index);
//     setContentTitle(solutionCategories[index].category);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row w-full h-auto md:h-[27rem] overflow-hidden rounded-lg">
//       {/* Sidebar */}
//       <div className="lg:w-64 w-full lg:p-4 p-2 bg-white border-r h-[23rem] ">
//         <ul className="space-y-2 lg:space-y-4">
//           {solutionCategories.map((item, index) => (
//             <li
//               key={index}
//               className={`p-3 md:p-4 font-medium text-gray-900 rounded-md cursor-pointer transition-all duration-300 ${
//                 activeIndex === index ? "bg-gray-200 text-black" : "hover:bg-gray-100"
//               }`}
//               onClick={() => handleItemClick(index)}
//             >
//               {item.category}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white h-[23rem] overflow-y-auto">
//         <h1 className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold mb-6 -mt-7 text-center lg:text-left">
//           {contentTitle}
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
//           {solutionCategories[activeIndex].items.map((item, i) => (
//             <div
//               key={i}
//               className="bg-teal-50 border border-teal-100 p-4 rounded-lg text-gray-800 font-medium shadow-sm hover:shadow-md transition"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>    
//     </div>
//   );
// };

// export default SolutionSubPage;
"use client";
import React, { useState } from "react";
import {
  FaMoneyCheckAlt,
  FaTruckMoving,
  FaUserTie,
  FaBalanceScale,
  FaUniversity,
  FaShieldAlt,
  FaHospital,
  FaShippingFast,
  FaBuilding,
  FaUserCheck,
  FaFileInvoiceDollar,
  FaSearchDollar,
  FaGift,
  FaArchive,
  FaEnvelopeOpenText,
  FaPrescriptionBottleAlt,
  FaReceipt,
} from "react-icons/fa";

interface SolutionSubPageProps {
  setDropdownOpen?: (isOpen: boolean) => void;
}

const solutionCategories = [
  {
    category: "By Function",
    items: [
      { label: "Financial Document Automation", icon: <FaMoneyCheckAlt /> },
      { label: "Supply Chain Document Processing", icon: <FaTruckMoving /> },
      { label: "Healthcare Document Processing", icon: <FaUserTie /> },
      { label: "Retail Receipts Processing", icon: <FaReceipt /> },
      { label: "Legal Contract Parsing & Review", icon: <FaBalanceScale /> },
    ],
  },
  {
    category: "By Industry",
    items: [
      { label: "Banking & Financial Services", icon: <FaUniversity /> },
      { label: "Claims & Insurance Processing", icon: <FaShieldAlt /> },
      { label: "Medical Forms & Health Records", icon: <FaHospital /> },
      { label: "Shipment & Logistics Automation", icon: <FaShippingFast /> },
      { label: "Real Estate Lease & Agreement Digitization", icon: <FaBuilding /> },
      { label: "Human Resources & Employee Onboarding", icon: <FaUserCheck /> },
    ],
  },
  {
    category: "By Use Case",
    items: [
      { label: "Invoice Extraction & Validation", icon: <FaFileInvoiceDollar /> },
      { label: "Automated Financial Matching", icon: <FaSearchDollar /> },
      { label: "Loyalty Program Receipt Scanning", icon: <FaGift /> },
      { label: "Smart Document Archival", icon: <FaArchive /> },
      { label: "Tenant & Property Document", icon: <FaEnvelopeOpenText /> },
      { label: "Healthcare Forms & Prescription Processing", icon: <FaPrescriptionBottleAlt /> },
    ],
  },
];

const SolutionSubPage: React.FC<SolutionSubPageProps> = ({  }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [contentTitle, setContentTitle] = useState<string>(solutionCategories[0].category);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setContentTitle(solutionCategories[index].category);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto md:h-[27rem] overflow-hidden rounded-lg">
      {/* Sidebar */}
      <div className="lg:w-64 w-full lg:p-4 p-2 bg-white border-r border-gray-500/10 h-[23rem]">
        <ul className="space-y-2 lg:space-y-4">
          {solutionCategories.map((item, index) => (
            <li
              key={index}
              className={`p-3 md:p-4 font-medium text-gray-900 rounded-md cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "bg-gray-200 text-black" : "hover:bg-gray-100"
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white h-[23rem] overflow-y-auto">
        <h1 className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold mb-6 -mt-7 text-center lg:text-left">
          {contentTitle}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {solutionCategories[activeIndex].items.map((item, i) => (
            <div
              key={i}
              className="hover:bg-gray-100 shadow-xs hover:border-teal-100 p-4 rounded-lg text-gray-800 font-medium hover:shadow-md transition flex items-center gap-3"
            >
              <span className="text-xl text-teal-600">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSubPage;
