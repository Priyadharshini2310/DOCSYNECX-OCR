// "use client"; // Required if using Next.js

// import React, { useEffect, useState } from "react";

// const ScrollToTopButton: React.FC = () => {
//   const [scrollPercentage, setScrollPercentage] = useState<number>(0);

//   useEffect(() => {
//     const handleScroll = (): void => {
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;
//       const totalScrollableDistance = documentHeight - windowHeight;

//       const percentage = (scrollTop / totalScrollableDistance) * 100;
//       setScrollPercentage(percentage);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = (): void => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div
//       className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-200 transition-colors"
//       onClick={scrollToTop}
//     >
//       <div className="relative w-full h-full">
//         {/* Circular progress bar */}
//         <svg className="w-full h-full" viewBox="0 0 36 36">
//           <path
//             className="text-white"
//             strokeWidth="2"
//             fill="none"
//             stroke="currentColor"
//             d="M18 2.0845
//               a 15.9155 15.9155 0 0 1 0 31.831
//               a 15.9155 15.9155 0 0 1 0 -31.831"
//           />
//           <path
//             className="text-gray-500"
//             strokeWidth="2"
//             fill="none"
//             stroke="currentColor"
//             strokeDasharray={`${scrollPercentage}, 100`}
//             d="M18 2.0845
//               a 15.9155 15.9155 0 0 1 0 31.831
//               a 15.9155 15.9155 0 0 1 0 -31.831"
//           />
//         </svg>
//         {/* Up arrow icon */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollToTopButton;



"use client"; // Required if using Next.js

import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScrollableDistance = documentHeight - windowHeight;

      const percentage = (scrollTop / totalScrollableDistance) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <div
      className={"fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors bg-teal-100 hover:bg-teal-200"}
      onClick={scrollToTop}
    >
      <div className="relative w-full h-full">
        {/* Circular progress bar */}
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-white"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-teal-500"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            strokeDasharray={`${scrollPercentage}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        {/* Up arrow icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;