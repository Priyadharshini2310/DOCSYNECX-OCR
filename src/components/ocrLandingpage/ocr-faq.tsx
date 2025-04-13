"use client";

import { useState } from "react";

export default function OcrFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  
  const faqs = [
    {
      question: "Does the OCR solution use LLM and VLM technologies?",
      answer:
        "Yes! Our OCR leverages Large Language Models (LLMs) and Vision Language Models (VLMs) to enhance document understanding, ensuring contextual accuracy, ocr with data validation  and improved recognition of both text and structured data.",
    },
    {
      question: "What makes docsynecx solution unique?",
      answer:
        "Our AI-powered OCR leverages Generative AI and deep learning to accurately extract text from complex documents, handwritten notes, and low-quality images while understanding context for intelligent data processing.",
    },
    {
      question: "Can the OCR process handwritten documents?",
      answer:
        "Yes! Our advanced AI models are trained to recognize and extract handwritten text with high accuracy, even in cursive and varied handwriting styles.",
    },
   
    {
      question: "How accurate is our docsynecx SAAS Platform?",
      answer:
        "Our OCR uses deep learning models to achieve industry-leading accuracy, even in noisy or low-resolution images. Continuous improvements ensure reliable and precise text recognition.",
    },
    {
      question: "Can the OCR extract structured data from documents?",
      answer:
        "Yes! Our OCR doesn’t just recognize text—it understands document structure, allowing it to extract tables, key-value pairs, and form fields for easy integration into business workflows.",
    },
    {
      question: "How does the OCR integrate with existing systems?",
      answer:
        "We provide robust API and SDK integrations, allowing businesses to seamlessly incorporate our AI-powered OCR into their existing applications, databases, and automation workflows.",
    },
    {
      question: "Is batch processing available for large document sets?",
      answer:
        "Yes! Our OCR solution supports batch processing, enabling businesses to process thousands of documents efficiently while maintaining high accuracy and speed.",
    },
  ];

  return (
    <div className="py-16 bg-white" id="faq">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="text-left mx-4 sm:mx-0">
            <h1 className="text-teal-500 font-semibold">Answeres to</h1>
            <h2 className="text-3xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Our FAQ section offers quick answers to questions about
              the features of the <strong className="text-teal-700">docsynecx</strong> AI OCR Software.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg mx-3 sm:mx-0">
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
                <div className="px-4 sm:px-8 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
