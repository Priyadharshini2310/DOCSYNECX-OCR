// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const OcrIndex = () => {
//   return (
//     <div className="h-screen w-full flex items-center overflow-hidden relative px-6 lg:px-16">
//       {/* Left Side - Text Content */}
//       <div className="w-full lg:w-[540px] ml-0 sm:ml-24">
//         <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4">
//           Revolutionizing Industries with AI-Powered Solutions
//         </h2>
//         <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-8">
//           Built for <span className="text-teal-300">Innovation</span>,{" "}
//           <span className="text-teal-500">Efficiency</span>, and{" "}
//           <span className="text-teal-700">Excellence</span>.
//         </h1>
//         <p className="text-gray-700 font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4 text-justify pr-6">
//           At SynecX AI Labs, we are pioneering the future of industries with
//           transformative AI solutions, harnessing the power of deep learning
//           and computer vision. Our cutting-edge technology drives automation
//           in Self-Checkout, AI OCR, and AI-powered quality inspection.
//           Blending innovation with intelligent automation, we enable
//           businesses to unlock efficiency, accuracy, and scalability.
//         </p>
//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 pb-4">
//           <Link href="/contact#demo" legacyBehavior>
//             <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center">
//               Get Your Demo
//             </a>
//           </Link>
//           <Link href="/contact" legacyBehavior>
//             <a className="bg-white border border-gray-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
//               Contact
//             </a>
//           </Link>
//         </div>
//       </div>

//       {/* Right Side - Existing Rotated Image */}
//       <div className="w-[700px] h-[1400px] bg-gradient-to-br from-white via-teal-500 to-teal-400 absolute -top-96 -right-28 rotate-[-38deg] rounded-bl-3xl hidden lg:block">
//         <Image
//           height={1000}
//           width={900}
//           src={"/ocrindex.gif"}
//           alt="OCR Index"
//           className="rotate-[38deg] absolute -left-44 top-96"
//         />
//       </div>
//     </div>
//   );
// };

// export default OcrIndex;


import Image from "next/image";
import Link from "next/link";
import React from "react";

const OcrIndex = () => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start overflow-hidden relative px-6 lg:px-16">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-[540px] lg:ml-24 text-center lg:text-left">
        <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4">
          Transforming Industries with Gen AI OCR Solutions
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-8">
          AI-Powered <span className="text-teal-300">Intelligent</span> Document Processing {" "}
          <span className="text-teal-500">&</span>{" "}
          <span className="text-teal-700"></span>Automation with{" "}
          <span className="text-teal-400">faster APIs</span>.
        </h1>

        <p className="text-gray-700 font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4 text-justify lg:text-left px-4 lg:px-0">
          Our AI-powered OCR agent processes documents instantly, converting
          them into actionable data with unmatched accuracy. Free your team from
          tedious tasks and let automation do the heavy liftings
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pb-4">
          <Link href="/#ocrlancontact" legacyBehavior>
            <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition duration-300">
              Request for Demo
            </a>
          </Link>
          <Link href="#ocrlancontact" legacyBehavior>
            <a className="bg-white border border-gray-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
              Contact
            </a>
          </Link>
        </div>
      </div>

      {/* Right Side - Existing Rotated Image */}
      <div className="w-[300px] h-[600px] lg:w-[700px] lg:h-[1400px] bg-gradient-to-br from-white via-teal-500 to-teal-400 absolute lg:-top-96 lg:-right-28 -top-48 -right-20 rotate-[-38deg] rounded-bl-3xl hidden sm:block">
        <Image
          height={1000}
          width={900}
          src={"/ocrindex.gif"}
          alt="OCR Index"
          className="rotate-[38deg] absolute lg:-left-44 lg:top-96 -left-20 top-48"
        />
      </div>
    </div>
  );
};

export default OcrIndex;
