
import Image from "next/image";
import React from "react";

const logos = [
  {
    src: "/capture.svg",
    title: "Capture",
    description: "docsynecx intuitive capture",
  },
  {
    src: "/extract.svg",
    title: "Extract",
    description: "Transforming raw data",
  },
  {
    src: "/discover.svg",
    title: "Discover Your App",
    description: "Revolutionizes your workflow",
  },
];

export default function HowOcrWorks() {
  return (
    <div className="bg-white py-16">
      <h1 className="text-3xl font-semibold text-center">
        Why our docsynecx - <span className="text-teal-500">Gen AI OCR </span>
      </h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto px-4">
        {logos.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 "
          >
            <Image
              src={item.src}
              alt={item.title}
              height={140}
              width={140}
              className=" mb-4"
            />

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
