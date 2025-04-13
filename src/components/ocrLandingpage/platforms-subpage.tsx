// "use client";
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


// interface PlatformSubPageProps {
//   setDropdownOpen?: (isOpen: boolean) => void;
// }

// const PlatformSubPage: React.FC<PlatformSubPageProps> = ({ setDropdownOpen }) => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [contentTitle, setContentTitle] = useState<string>("Retail Solutions");
//   const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

//   const sidebarItems = [
//     { title: "Retail Solutions" },
//     { title: "OCR Solutions" },
//     { title: "Manufacturing Solutions" },
//   ];

//   const handleItemClick = (index: number, item: any) => {
//     setActiveIndex(index);
//     setContentTitle(item.title);
//     setIsSidebarOpen(false); // Close the sidebar after selection in mobile view
//   };

//   const renderComponent = () => {
//     const Component = sidebarItems[activeIndex];
//   };

//   return (
//     <div className="flex flex-col lg:flex-row w-full h-auto md:h-[27rem] overflow-hidden rounded-lg">
//       {/* Sidebar */}
//       <div className="lg:w-72 w-full lg:p-4 p-2 bg-white border-r h-[30rem] shadow-lg">
//         <ul className="space-y-2 lg:space-y-4">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center justify-between p-3 md:p-4 font-medium text-gray-900 rounded-md cursor-pointer transition-all duration-300 
//               `}
//               onClick={() => handleItemClick(index, item)}
//             >
//               <span>{item.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="lg:w-72 w-full lg:p-4 p-2 bg-white border-r h-[30rem] shadow-lg">
//         <ul className="space-y-2 lg:space-y-4">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center justify-between p-3 md:p-4 font-medium text-gray-900 rounded-md cursor-pointer transition-all duration-300 `}
//               onClick={() => handleItemClick(index, item)}
//             >
//               <span>{item.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="lg:w-72 w-full lg:p-4 p-2 bg-white border-r h-[30rem] shadow-lg">
//         <ul className="space-y-2 lg:space-y-4">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center justify-between p-3 md:p-4 font-medium text-gray-900 rounded-md cursor-pointer transition-all duration-300`}
//               onClick={() => handleItemClick(index, item)}
//             >
//               <span>{item.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="lg:w-72 w-full lg:p-4 p-2 bg-white border-r h-[30rem] shadow-lg">
//         <ul className="space-y-2 lg:space-y-4">
//           {sidebarItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center justify-between p-3 md:p-4 font-medium text-gray-900 rounded-md cursor-pointer transition-all duration-300`}
//               onClick={() => handleItemClick(index, item)}
//             >
//               <span>{item.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
     
//     </div>
//   );
// };

// export default PlatformSubPage;

"use client";
import React from "react";
interface PlatformSubPageProps {
  setDropdownOpen?: (isOpen: boolean) => void;
}
const data = [
  {
    title: "Invoices",
    items: [
      "Tax Invoice",
      "GST Invoice",
      "Sales Invoice",
      "Purchase Invoice",
      "Proforma Invoice",
      "Purchase Order",
      "Custom Invoice",
    ],
  },
  {
    title: "Receipts",
    items: ["POS Receipts","POS Invoice", "Custom Receipts"],
  },
  {
    title: "Logistics",
    items: ["Bill of landing", "e-Way bill",  "DHL", "USPS", "UPS", "FedEx", "Custom"],
  },
  {
    title: "Health Care",
    items: ["Patient Forms", "Prescription", "Custom forms"],
  },
]; 

const PlatformSubPage: React.FC<PlatformSubPageProps> = ({ }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto md:h-[30rem] overflow-hidden rounded-lg">
      {data.map((section, idx) => (
        <div
          key={idx}
          className="lg:w-1/4 w-full p-4 bg-white border-r border-gray-400/10 h-[30rem] shadow-lg overflow-y-auto custom-scrollbar"
        >
          <h2 className="text-lg font-bold mb-2 text-teal-700">
            {section.title}
          </h2>
          <ul className="space-y-1 text-gray-700 text-sm">
            {section.items.map((item, index) => (
              // <li key={index} className={`flex -ml-2 items-center justify-between p-3 md:p-2 font-medium text-gray-900 rounded-md transition-all duration-300`}>
              //   {item}
              // </li>
              <div key={index}
              className="hover:bg-gray-100  cursor-pointer px-2 text-gray-800 font-medium hover:shadow-md transition flex items-center gap-3"
            >
              <span className="text-base py-4 text-black">{item}</span>
            </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlatformSubPage;
