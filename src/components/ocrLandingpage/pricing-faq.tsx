// "use client";

// import { useState } from "react";

// export default function PricingFaq() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index : any) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

  
//   const faqs = [
//     {
//       question: "How is DocSynecX’s pricing structured?",
//       answer:
//         "Free Plan – Designed for individuals, this plan includes 50 pages per month at no cost. A perfect starting point to explore AI-powered document processing. Explore Plan – Ideal for small teams, this includes 1,000 pages/month and offers access to features like standard field extraction and pre-trained templates. Grow Plan – Built for scaling businesses with high-volume document flows. It includes 3,000 pages/month and access to advanced OCR, LLM-based extraction, and API access.Premium Plan – Tailored for established businesses, it offers 6,000 pages/month with enterprise-ready features like post-processing, complex table parsing, and integrations. Enterprise Plan – Offers fully customizable credits and features. Pricing is flexible and adapts to your use cases, with greater savings at scale.",
//     },
//     {
//       question: "Are there any discounts or trial offers available?",
//       answer:
//         "Yes! We offer a 10% discount when you opt for the yearly plan (paid upfront). You’ll also be able to explore our Free plan without commitment during a trial period to experience the platform firsthand.",
//     },
//     {
//       question: "Do page credits roll over to the next billing cycle?",
//       answer:
//         "If you're on a monthly plan, unused page credits do not carry over to the next month. However, for annual subscriptions, all page credits are given upfront — allowing you to use them anytime during the 12-month term.",
//     },
   
//     {
//       question: "Can I upgrade or change my DocSynecX plan later?",
//       answer:
//         "Absolutely! You can upgrade your plan at any time to match your evolving needs. Just reach out to our team at success@docsynec.com and we’ll help you make the switch instantly.",
//     },
//     {
//       question: "What if I need to process documents with many pages?",
//       answer:
//         "No worries — DocSynecX is built to handle multi-pages documents about 10 pages seamlessly. With built-in auto-classification and splitting capabilities, our system can intelligently process large files and route each page to the correct workflow with minimal training.",
//     },
//     {
//       question: "Need more help?",
//       answer:
//         "We’re here to assist! If you have any more questions about plans, features, or custom use cases, get in touch with us and one of our automation experts will reach out shortly.",
//     },
//   ];

//   return (
//     <div className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
//         {/* Left Section */}
//         <div className="lg:w-1/2">
//           <div className="text-left mx-4 sm:mx-0">
//             <h1 className="text-teal-500 font-semibold">Answeres to</h1>
//             <h2 className="text-3xl font-semibold text-gray-900">
//               Frequently Asked Questions
//             </h2>
//             <p className="mt-4 text-gray-600">
//               Our FAQ section offers quick answers to questions about
//               the features of the AI Powered Self-Checkout .
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="lg:w-1/2 bg-white rounded-xl shadow-lg mx-3 sm:mx-0">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-200">
//               <button
//                 className="w-full px-4 sm:px-8 py-4 text-left flex justify-between items-center text-gray-900 font-semibold"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span>{faq.question}</span>
//                 <div className="ml-4 bg-teal-200 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
//                   <span className="text-xl sm:text-2xl">
//                     {activeIndex === index ? "-" : "+"}
//                   </span>
//                 </div>
//               </button>
//               {activeIndex === index && (
//                 <div className="px-4 sm:px-8 pb-4 text-gray-600">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";

export default function PricingFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How is DocSynecX’s pricing structured?",
      answer:
        "Free Plan – Designed for individuals, this plan includes 50 pages per month at no cost. A perfect starting point to explore AI-powered document processing.\n\nExplore Plan – Ideal for small teams, this includes 1,000 pages/month and offers access to features like standard field extraction and pre-trained templates.\n\nGrow Plan – Built for scaling businesses with high-volume document flows. It includes 3,000 pages/month and access to advanced OCR, LLM-based extraction, and API access.\n\nPremium Plan – Tailored for established businesses, it offers 6,000 pages/month with enterprise-ready features like post-processing, complex table parsing, and integrations.\n\nEnterprise Plan – Offers fully customizable credits and features. Pricing is flexible and adapts to your use cases, with greater savings at scale.",
    },
    {
      question: "Are there any discounts or trial offers available?",
      answer:
        "Yes! We offer a 10% discount when you opt for the yearly plan (paid upfront). You’ll also be able to explore our Free plan without commitment during a trial period to experience the platform firsthand.",
    },
    {
      question: "Do page credits roll over to the next billing cycle?",
      answer:
        "If you're on a monthly plan, unused page credits do not carry over to the next month. However, for annual subscriptions, all page credits are given upfront — allowing you to use them anytime during the 12-month term.",
    },
    {
      question: "Can I upgrade or change my DocSynecX plan later?",
      answer:
        "Absolutely! You can upgrade your plan at any time to match your evolving needs. Just reach out to our team at success@docsynec.com and we’ll help you make the switch instantly.",
    },
    {
      question: "What if I need to process documents with many pages?",
      answer:
        "No worries — DocSynecX is built to handle multi-pages documents about 10 pages seamlessly. With built-in auto-classification and splitting capabilities, our system can intelligently process large files and route each page to the correct workflow with minimal training.",
    },
    {
      question: "Need more help?",
      answer:
        "We’re here to assist! If you have any more questions about plans, features, or custom use cases, get in touch with us and one of our automation experts will reach out shortly.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="text-left mx-4 sm:mx-0">
            <h1 className="text-teal-500 font-semibold">Answers to</h1>
            <h2 className="text-3xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
            Explore our FAQ section for quick answers to common questions about DocSynecX’s AI-powered OCR — from automated data extraction to document processing features and integrations.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg mx-3 sm:mx-0 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full px-4 sm:px-8 py-4 text-left flex justify-between items-center text-gray-900 font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <div className="ml-4 bg-teal-200 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 sm:px-8 pb-4 text-gray-600 space-y-3">
                  {faq.answer.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
