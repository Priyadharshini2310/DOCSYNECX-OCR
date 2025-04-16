
// "use client";
// import React, { useState, useEffect, useMemo, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaChevronDown, FaTimes } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import ServiceSubpage from "@/components/products/service-sub-page";
// import SolutionSubPage from "@/components/ocrLandingpage/solutions-subpage";
// import PlatformSubPage from "@/components/ocrLandingpage/platforms-subpage";

// type DropdownState = {
//   solutions: boolean;
//   platforms: boolean; 
// };

// export default function OcrNavbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
//     solutions: false,
//     platforms: false,
//   });

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setDropdownOpen({ solutions: false, platforms: false });
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     setDropdownOpen({ solutions: false, platforms: false });
//   }, [pathname]);

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   const toggleDropdown = (dropdown: keyof DropdownState) => {
//     setDropdownOpen((prev) => {
//       const updated: DropdownState = {
//         solutions: false,
//         platforms: false,
//       };
//       updated[dropdown] = !prev[dropdown];
//       return updated;
//     });
//   };

//   const navItems = useMemo(
//     () => [
//       {
//         label: "Platforms",
//         key: "platforms",
//         component: (
//           <div
//             ref={dropdownRef}
//             className="absolute left-0 md:left-40 transform md:-translate-x-1/2  w-full md:w-[70rem] h-auto md:h-[25rem] bg-white shadow-lg rounded-lg p-6 z-50 flex flex-col md:flex-row mt-10"
//           >
//             <PlatformSubPage
//               setDropdownOpen={() => setDropdownOpen({ solutions: false, platforms: false })}
//             />
//           </div>
//         ),
//       },
//       {
//         label: "Solutions",
//         key: "solutions",
//         component: (
//           <div
//             ref={dropdownRef}
//             className="absolute left-0 md:left-40 transform md:-translate-x-1/2  w-full md:w-[60rem] h-auto md:h-[25rem] bg-white shadow-lg rounded-lg p-6 z-50 flex flex-col md:flex-row mt-10"
//           >
//             <SolutionSubPage
//               setDropdownOpen={() => setDropdownOpen({ solutions: false, platforms: false })}
//             />
//           </div>
//         ),
//       },
      
//     ],
//     []
//   );

//   return (
//     <nav className="bg-white/30 backdrop-blur-md fixed max-w-screen w-screen z-10 shadow-lg h-20 flex items-center">
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 mx-4 md:mx-4">
//           <Link href="/" className="flex items-center">
//             <Image src="/docsynecx-logo.png" alt="Logo" width={220} height={80} priority />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link href="/ocr" className="text-sm font-bold text-gray-600 hover:text-black">Home</Link>

//             {navItems.map((item, index) => (
//               <div key={index} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(item.key as keyof DropdownState)}
//                   className="text-sm font-bold text-gray-600 hover:text-black flex items-center"
//                 >
//                   {item.label}
//                   <FaChevronDown className="ml-1 text-xs" />
//                 </button>
//                 {dropdownOpen[item.key as keyof DropdownState] && item.component}
//               </div>
//             ))}

//             <Link href="/ocr/pricing" className="text-sm font-bold text-gray-600 hover:text-black">Pricing</Link>
//             <Link href="#ocrlancontact" className="text-sm font-bold text-gray-600 hover:text-black">Contact</Link>
//           </div>

//           {/* CTA */}
//           <Link href="/contact#demo">
//             <button className="bg-black text-white h-10 w-28 rounded-md p-1 hidden sm:block">
//               Try Demo
//             </button>
//           </Link>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu}>
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50`}>
//         <div className="px-4 pt-4 pb-6 space-y-4">
//           <Link href="/ocr" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold">Home</Link>
//           <Link href="/ocr/pricing" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold">Pricing</Link>
//           <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold">Contact</Link>

//           {/* Mobile Dropdowns */}
//           <details className="text-gray-700 font-bold">
//             <summary className="cursor-pointer py-2">Products</summary>
//             <div className="ml-4 mt-2 space-y-1">
//               <Link href="/ocr" onClick={() => setIsOpen(false)} className="block">OCR Engine</Link>
//               <Link href="/ocr/field-extraction" onClick={() => setIsOpen(false)} className="block">Field Extraction</Link>
//             </div>
//           </details>
//           <details className="text-gray-700 font-bold">
//             <summary className="cursor-pointer py-2">Solutions</summary>
//             <div className="ml-4 mt-2 space-y-1">
//               <Link href="/solutions/retail" onClick={() => setIsOpen(false)} className="block">Retail Automation</Link>
//               <Link href="/solutions/finance" onClick={() => setIsOpen(false)} className="block">Financial Processing</Link>
//             </div>
//           </details>
//           <details className="text-gray-700 font-bold">
//             <summary className="cursor-pointer py-2">Platforms</summary>
//             <div className="ml-4 mt-2 space-y-1">
//               <Link href="/platform/api" onClick={() => setIsOpen(false)} className="block">API Platform</Link>
//               <Link href="/platform/no-code" onClick={() => setIsOpen(false)} className="block">No-Code Builder</Link>
//             </div>
//           </details>

//           <Link href="/contact#demo">
//             <button className="block w-full px-4 py-2 border border-black rounded-md shadow-sm text-sm font-semibold text-black mt-2">
//               Demo Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import SolutionSubPage from "@/components/ocrLandingpage/solutions-subpage";
import PlatformSubPage from "@/components/ocrLandingpage/platforms-subpage";

type DropdownState = {
  solutions: boolean;
  platforms: boolean;
};

const platformData = [
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
    items: ["POS Receipts", "POS Invoice", "Custom Receipts"],
  },
  {
    title: "Logistics",
    items: ["Bill of landing", "e-Way bill", "DHL", "USPS", "UPS", "FedEx", "Custom"],
  },
  {
    title: "Health Care",
    items: ["Patient Forms", "Prescription", "Custom forms"],
  },
];

const solutionData = [
  {
    category: "By Function",
    items: [
      { label: "Financial Document Automation" },
      { label: "Supply Chain Document Processing" },
      { label: "Healthcare Document Processing" },
      { label: "Retail Receipts Processing" },
      { label: "Legal Contract Parsing & Review" },
    ],
  },
  {
    category: "By Industry",
    items: [
      { label: "Banking & Financial Services" },
      { label: "Claims & Insurance Processing" },
      { label: "Medical Forms & Health Records" },
      { label: "Shipment & Logistics Automation" },
      { label: "Real Estate Lease & Agreement Digitization" },
      { label: "Human Resources & Employee Onboarding" },
    ],
  },
  {
    category: "By Use Case",
    items: [
      { label: "Invoice Extraction & Validation" },
      { label: "Automated Financial Matching" },
      { label: "Loyalty Program Receipt Scanning" },
      { label: "Smart Document Archival" },
      { label: "Tenant & Property Document" },
      { label: "Healthcare Forms & Prescription Processing" },
    ],
  },
];

export default function OcrNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    solutions: false,
    platforms: false,
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen({ solutions: false, platforms: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen({ solutions: false, platforms: false });
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdownOpen((prev) => {
      const updated: DropdownState = {
        solutions: false,
        platforms: false,
      };
      updated[dropdown] = !prev[dropdown];
      return updated;
    });
  };

  const navItems = useMemo(
    () => [
      {
        label: "Platforms",
        key: "platforms",
        component: (
          <div
            ref={dropdownRef}
            className="absolute left-0 md:left-40 transform md:-translate-x-1/2  w-full md:w-[70rem] h-auto md:h-[32rem] bg-white shadow-lg rounded-lg p-6 z-50 flex flex-col md:flex-row mt-10"
          >
            <PlatformSubPage setDropdownOpen={() => setDropdownOpen({ solutions: false, platforms: false })} />
          </div>
        ),
      },
      {
        label: "Solutions",
        key: "solutions",
        component: (
          <div
            ref={dropdownRef}
            className="absolute left-0 md:left-40 transform md:-translate-x-1/2  w-full md:w-[60rem] h-auto md:h-[25rem] bg-white shadow-lg rounded-lg p-6 z-50 flex flex-col md:flex-row mt-10"
          >
            <SolutionSubPage setDropdownOpen={() => setDropdownOpen({ solutions: false, platforms: false })} />
          </div>
        ),
      },
    ],
    []
  );

  return (
    <nav className="bg-white/30 backdrop-blur-md fixed max-w-screen w-screen z-10 shadow-lg h-20 flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mx-4 md:mx-4">
          <Link href="/" className="flex items-start -ml-3">
            <Image src="/docsynecxlogo.png" alt="DocsynecX Logo" width={180} height={80} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-bold text-gray-600 hover:text-black">Home</Link>
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(item.key as keyof DropdownState)}
                  className="text-sm font-bold text-gray-600 hover:text-black flex items-center"
                >
                  {item.label}
                  <FaChevronDown className="ml-1 text-xs" />
                </button>
                {dropdownOpen[item.key as keyof DropdownState] && item.component}
              </div>
            ))}
            <Link href="/pricing" className="text-sm font-bold text-gray-600 hover:text-black">Pricing</Link>
            <Link href="/#ocrlancontact" className="text-sm font-bold text-gray-600 hover:text-black">Contact</Link>
          </div>

          {/* CTA */}
          <Link href="/#ocrlancontact">
            <button className="bg-black text-white h-10 w-32 rounded-md p-1 hidden sm:block">Request Demo</button>
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold">Home</Link>
          

          {/* Platforms Mobile Dropdown */}
          <details className="text-gray-700 font-bold">
            <summary className="cursor-pointer py-2 flex justify-between items-center">
              Platforms <FaChevronDown className="text-xs" />
            </summary>
            <div className="ml-4 mt-2 space-y-3">
              {platformData.map((section, idx) => (
                <details key={idx} className="ml-2">
                  <summary className="text-sm font-semibold text-gray-800 cursor-pointer py-1">{section.title}</summary>
                  <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </details>

          {/* Solutions Mobile Dropdown */}
          <details className="text-gray-700 font-bold">
            <summary className="cursor-pointer py-2 flex justify-between items-center">
              Solutions <FaChevronDown className="text-xs" />
            </summary>
            <div className="ml-4 mt-2 space-y-3">
              {solutionData.map((section, idx) => (
                <details key={idx} className="ml-2">
                  <summary className="text-sm font-semibold text-gray-800 cursor-pointer py-1">{section.category}</summary>
                  <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                    {section.items.map((item, i) => (
                      <li key={i}>{item.label}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </details>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold">Pricing</Link>
          <Link href="/#ocrlancontact " onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold">Contact</Link>
          {/* CTA */}
          <Link href="/#ocrlancontact">
            <button className="block w-full px-4 py-2 border border-black rounded-md shadow-sm text-sm font-semibold text-black mt-2">
              Demo Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
