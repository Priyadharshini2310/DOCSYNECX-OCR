"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"; // Import the next/image component

const logos = [
  { src: "/healthcare.svg" },
  { src: "/tax.svg" },
  { src: "/shipping.svg" },
  { src: "/healthcare.svg" },
  { src: "/tax.svg" },
  { src: "/shipping.svg" },
  { src: "/healthcare.svg" },
  { src: "/tax.svg" },
  { src: "/shipping.svg" },
  { src: "/healthcare.svg" },
  { src: "/tax.svg" },
  { src: "/shipping.svg" },
  { src: "/healthcare.svg" },
  { src: "/tax.svg" },
  { src: "/shipping.svg" },
  { src: "/healthcare.svg" },
  { src: "/tax.svg" },
  { src: "/shipping.svg" },
];

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate the total width of the logos container
    const totalWidth = container.scrollWidth / 2; // Since we duplicated the logos

    // Set up the animation
    controls.set({ x: 0 }); // Initial position
    controls.start({
      x: -totalWidth,
      transition: { repeat: Infinity, duration: 25, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="flex-auto overflow-hidden bg-white py-4" id="industries">
      <h1 className="flex justify-center items-center mb-6 text-3xl font-semibold">
        Service<span className="text-teal-500 ml-2"> Industries</span>
      </h1>

      <div className="relative w-full overflow-hidden">
        {/* White shadow effect on the left */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* White shadow effect on the right */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap"
          animate={controls}
        >
          {[...logos, ...logos].map((item, index) => (
            <div key={index} className="h-20 w-auto shrink-0 mx-6">
              <Image
                src={item.src}
                alt={`Logo ${index + 1}`}
                width={90} // Set the desired width
                height={90} // Set the desired height
                className="h-full w-auto" // Ensure the image scales properly
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}