"use client";

import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import PricingFaq from "./pricing-faq";
import OcrNavbar from "@/layouts/ocrnavbar";
import Link from "next/link";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("monthly"); // State to manage active tab

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab); // Switch between 'monthly' and 'yearly'
  };

  return (
    <>
      <OcrNavbar />
      <div className="w-full mx-auto px-4 py-12 bg-white ">
        <div className="text-center mt-20 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Simple Plans & <span className="text-teal-600"> Pricing </span> For
            Everyone
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Extract, analyze, & automate unstructured data at scale — all with
            AI OCR.
          </p>
        </div>

        {/* Pricing Tab Toggle */}
        <div className="flex ml-28 justify-center mb-8">
          <nav className="bg-teal-100/55 p-4 rounded-md">
            <button
              className={`py-2 px-4 text-sm font-bold rounded-sm ${
                activeTab === "monthly"
                  ? "bg-teal-500 text-white"
                  : "bg-transparent text-teal-600 "
              }`}
              onClick={() => handleTabClick("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-4 text-sm font-bold rounded-sm ${
                activeTab === "yearly"
                  ? "bg-teal-500 text-white"
                  : "bg-transparent text-teal-600"
              }`}
              onClick={() => handleTabClick("yearly")}
            >
              Yearly
            </button>
          </nav>
          <div className="flex-col items-center justify-center ml-4">
            <Image
              src="/arrow.png"
              alt="Pricing Image"
              width={500}
              height={500}
              className="rotate-12 w-16 h-8"
            />
            <p className="text-purple-400 font-extrabold">
              Upfront = 10% savings
            </p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 ">
          {/* Free Plan */}
          {(activeTab === "monthly" || activeTab === "yearly") && (
            <div className="rounded-lg border shadow-lg">
              <div className="bg-teal-200 px-6 py-2 rounded-t-lg"></div>
              <div className=" text-gray-900 px-6 py-2 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Free</h3>
                <div className="flex items-center  bg-teal-100/60 rounded-sm">
                  <p className="text-xs text-teal-500 font-bold px-2">
                    For Individuals
                  </p>
                </div>
              </div>
              <div className="p-6 text-gray-700">
                <div className="text-3xl font-bold text-gray-900">
                  {activeTab === "monthly" ? "$0" : "$0"}
                  <sub className="text-sm text-gray-500">
                    / Per {activeTab === "monthly" ? "Month" : "Month"}
                  </sub>
                </div>
                <div className="flex justify-center items-center my-2 ">
                  <div className="text-gray-600flex justify-center items-center border border-teal-300 w-max px-10 py-1 rounded-md">
                    <p>50 pages</p>
                  </div>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Image Quality Check
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    File type support
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm mr-2 text-teal-600"></i>{" "}
                    Basic field extraction
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Data Encryption
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>
                    Email support
                  </li>
                </ul>
                <Link href="/">
                  <button className="group relative w-full py-2 bg-teal-600 text-white rounded-md border border-transparent hover:bg-white hover:text-teal-600 hover:border-teal-600 transition">
                    <span className="block group-hover:hidden">
                      Choose Plan
                    </span>
                    <span className="hidden group-hover:block font-semibold">
                      Explore Now
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Team Plan */}
          {(activeTab === "monthly" || activeTab === "yearly") && (
            <div className="rounded-lg border shadow-lg">
              <div className="bg-teal-200 px-6 py-2 rounded-t-lg"></div>
              <div className=" text-gray-900 px-6 py-2 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Explore</h3>
                <div className="flex items-center bg-teal-100/60 rounded-sm">
                  <p className="text-xs text-teal-500 px-2 font-bold">
                    For Small Teams
                  </p>
                </div>
              </div>
              <div className="p-6 text-gray-700">
                <div className="text-3xl font-bold text-gray-900">
                  {activeTab === "monthly" ? "$75" : "$70"}
                  <sub className="text-sm text-gray-500">
                    / Per {activeTab === "monthly" ? "Month" : "Month"}
                  </sub>
                </div>
                {/* <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.</p> */}
                <div className="flex justify-center items-center my-2">
                  <div className="flex justify-center items-center border border-teal-300 w-max px-10 py-1 rounded-md">
                    <p>
                      {activeTab === "monthly" ? "1K" : "12K"}pages/
                      {activeTab === "monthly" ? "month" : "year"}
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    All features from Free
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Auto-orientation
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Standard field extraction
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Pre-trained templates
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Role Based Access Control
                  </li>
                </ul>
                {/* <button className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
                Choose Plan
              </button> */}
                <Link href="/#ocrlancontact">
                  <button className="group relative w-full py-2 bg-teal-600 text-white rounded-md border border-transparent hover:bg-white hover:text-teal-600 hover:border-teal-600 transition">
                    <span className="block group-hover:hidden">
                      Choose Plan
                    </span>
                    <span className="hidden group-hover:block font-semibold">
                      Request Call
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Premium Plan */}
          {(activeTab === "monthly" || activeTab === "yearly") && (
            <div className="rounded-lg border border-purple-600 shadow-lg">
              <div className="bg-purple-200 text-gray-900 px-6 py-2 rounded-t-lg"></div>
              <div className=" text-gray-900 px-6 py-2 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Grow</h3>
                <div className="flex items-center bg-purple-100/60 rounded-sm">
                  <p className="text-xs px-2 text-purple-500 font-bold">
                    For Growing Businesses
                  </p>
                </div>
              </div>
              <div className="p-6 text-gray-700">
                <div className="text-3xl font-bold text-gray-900">
                  {activeTab === "monthly" ? "$225" : "$205"}
                  <sub className="text-sm text-gray-500">
                    / Per {activeTab === "monthly" ? "Month" : "Month"}
                  </sub>
                </div>
                {/* <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.</p> */}
                <div className="flex justify-center items-center my-2">
                  <div className="flex justify-center items-center border border-purple-300 w-max px-10 py-1 rounded-md">
                    <p>
                      {activeTab === "monthly" ? "3K" : "36K"}pages/
                      {activeTab === "monthly" ? "month" : "year"}
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-purple-600 mr-2"></i>{" "}
                    Extends features from Explore
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-purple-600 mr-2"></i>{" "}
                    Advanced OCR Engine
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-purple-600 mr-2"></i>{" "}
                    Batch uploads
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-purple-600 mr-2"></i>{" "}
                    API access
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-purple-600 mr-2"></i>{" "}
                    LLM-based field extraction
                  </li>
                </ul>
                <Link href="/#ocrlancontact">
                  <button className="group relative w-full py-2 bg-purple-600 text-white rounded-md border border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 transition">
                    <span className="block group-hover:hidden">
                      Choose Plan
                    </span>
                    <span className="hidden group-hover:block font-semibold">
                      Request Call
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Business Plan */}
          {(activeTab === "monthly" || activeTab === "yearly") && (
            <div className="rounded-lg border shadow-lg">
              <div className="bg-teal-200 px-6 py-2 rounded-t-lg"></div>
              <div className=" text-gray-900 px-6 py-2 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Premium</h3>
                <div className="flex items-center bg-teal-100/60 rounded-sm">
                  <p className="text-xs px-2 text-teal-500 font-bold">
                    For Mature Businesses
                  </p>
                </div>
              </div>
              <div className="p-6 text-gray-700">
                <div className="text-3xl font-bold text-gray-900">
                  {activeTab === "monthly" ? "$450" : "$405"}
                  <sub className="text-sm text-gray-500">
                    / Per {activeTab === "monthly" ? "Month" : "Month"}
                  </sub>
                </div>
                {/* <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.</p> */}
                <div className="flex justify-center items-center my-2">
                  <div className="flex justify-center items-center border border-teal-300 w-max px-10 py-1 rounded-md">
                    <p>
                      {activeTab === "monthly" ? "6K" : "72K"}pages/
                      {activeTab === "monthly" ? "month" : "year"}
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Everything from Grow - plus
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Advanced+ OCR Engine
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Complex table parsing
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Post processing(Custom logic)
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Prebuilt integrations
                  </li>
                </ul>
                <Link href="/#ocrlancontact">
                  <button className="group relative w-full py-2 bg-teal-600 text-white rounded-md border border-transparent hover:bg-white hover:text-teal-600 hover:border-teal-600 transition">
                    <span className="block group-hover:hidden">
                      Choose Plan
                    </span>
                    <span className="hidden group-hover:block font-semibold">
                      Request Call
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Enterprise Plan */}
          {(activeTab === "monthly" || activeTab === "yearly") && (
            <div className="rounded-lg border shadow-lg">
              <div className="bg-teal-200 px-6 py-2 rounded-t-lg"></div>
              <div className=" text-gray-900 px-6 py-2 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <div className="flex items-center bg-teal-100/60 rounded-sm">
                  <p className="text-xs px-2 text-teal-500 font-bold">
                    {" "}
                    For Large Enterprises
                  </p>
                </div>
              </div>
              <div className="p-6 text-gray-700">
                <div className="text-3xl font-bold text-gray-900">
                  Custom Pricing{" "}
                </div>
                {/* <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam.</p> */}
                <div className="flex justify-center items-center my-2">
                  <div className="flex justify-center items-center border border-teal-300 w-max px-10 py-1 rounded-md">
                    <p>Custom Credits</p>
                  </div>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    All features from Power - plus
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Custom OCR models
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Multi-factor authentication
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Custom security policies
                  </li>
                  <li className="flex items-center">
                    <i className="ri-checkbox-circle-line text-sm text-teal-600 mr-2"></i>{" "}
                    Custom integrations
                  </li>
                </ul>
                <Link href="/#ocrlancontact">
                  <button className="group relative w-full py-2 bg-teal-600 text-white rounded-md border border-transparent hover:bg-white hover:text-teal-600 hover:border-teal-600 transition">
                    <span className="block group-hover:hidden">
                      Choose Plan
                    </span>
                    <span className="hidden group-hover:block font-semibold">
                      Request Call
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
            Feature Comparison
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Select best plans that fit your needs for your business growth.
            Plans are flexible with the enterprise.
          </p>

          {/* SCROLLABLE WRAPPER */}
          <div className="overflow-auto max-h-[600px] border rounded-md shadow-md custom-scrollbar">
            <table className="min-w-[1000px] w-full text-sm bg-white">
              {/* STICKY THEAD */}
              <thead className="sticky top-0 z-10 bg-white border-b">
                <tr className="text-lg text-gray-800">
                  <th className="px-4 py-3 text-left">Category / Feature</th>
                  <th className="px-4 py-3 text-center">Free</th>
                  <th className="px-4 py-3 text-center">Explore</th>
                  <th className="px-4 py-3 text-center">Grow</th>
                  <th className="px-4 py-3 text-center">Premium</th>
                  <th className="px-4 py-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-base">
                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    Basic Processing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Auto-Image Quality Check</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold ">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600  text-bold">✔</td>
                  <td className="text-center  text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Auto-orientation</td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Auto Document Splitting</td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    File Type Support (PDF, PNG, JPEG, TIFF, BMP)
                  </td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Batch Document Upload</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>

                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    OCR & AI Extraction
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">OCR Engine</td>
                  <td className="text-center">Basic</td>
                  <td className="text-center">Standard</td>
                  <td className="text-center">Advanced</td>
                  <td className="text-center">Advanced+</td>
                  <td className="text-center">Custom</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Extract Fields (Key-Value, Tables)
                  </td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Complex Table Parsing</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                {/* <tr><td className="px-4 py-2">Clause & Contract Recognition</td><td></td><td></td><td></td><td className="text-center text-teal-600 text-bold">✔</td><td className="text-center text-teal-600 text-bold">✔</td></tr> */}
                <tr>
                  <td className="px-4 py-2">Document Reviewer</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">AI Document Categorization</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Custom Document Models</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>

                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    Export & Integration
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Export Format (CSV, Excel, JSON)
                  </td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">API Access</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Prebuilt Integrations</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Custom Integrations (Tally, SAP, Zoho)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">End-to-End Processing</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>

                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    Data Validation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Data Formatting (Date, Numbers, Text)
                  </td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Data Lookups</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Post-Processing (Custom Logic)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                {/* <tr><td className="px-4 py-2">External DB Validation</td><td></td><td></td><td></td><td className="text-center text-teal-600 text-bold">✔</td><td className="text-center text-teal-600 text-bold">✔</td></tr> */}

                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    Analytics
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Dashboard & Metrics</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Auto-Categorization Insights</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>

                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    Support
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Email Support</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Phone Support</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Dedicated Account Manager</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">SLA Guarantee</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Onboarding & Training</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">24/7 Priority Support</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>

                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    Security & Compliance
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Data Encryption (At rest & Transit)
                  </td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Role-Based Access Control (RBAC)
                  </td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Audit Trails</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Single Sign-On (SSO)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Multi-Factor Authentication (MFA)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Custom Security Policies</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>

                <tr className="bg-gray-50 font-medium text-gray-900">
                  <td colSpan={6} className="px-4 py-2 font-bold">
                    AI-Powered Enhancements
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">LLM-based Field Extraction</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    Pre-trained Templates (Invoices, POs)
                  </td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">AI Confidence Scoring</td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Document Audit Reports</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-teal-600 text-bold">✔</td>
                </tr>
              </tbody>
            </table>
            {/* <table className="min-w-[1000px] w-full text-sm border border-gray-300 table-auto border-collapse bg-white shadow-md">
    <thead className="bg-gray-100 text-gray-800 font-semibold">
      <tr className="border border-gray-300">
        <th className="px-4 py-3 border border-gray-300 text-left">Category / Feature</th>
        <th className="px-4 py-3 border border-gray-300 text-center">Free</th>
        <th className="px-4 py-3 border border-gray-300 text-center">Basic</th>
        <th className="px-4 py-3 border border-gray-300 text-center">Standard</th>
        <th className="px-4 py-3 border border-gray-300 text-center">Pro</th>
        <th className="px-4 py-3 border border-gray-300 text-center">Enterprise</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">

      {[
        {
          category: "Basic Processing",
          features: [
            ["Auto-Image Quality Check", ["✔", "✔", "✔", "✔", "✔"]],
            ["Auto-orientation", ["", "✔", "✔", "✔", "✔"]],
            ["Auto Document Splitting", ["", "✔", "✔", "✔", "✔"]],
            ["File Type Support (PDF, PNG, JPEG, TIFF, BMP)", ["✔", "✔", "✔", "✔", "✔"]],
            ["Batch Document Upload", ["", "", "✔", "✔", "✔"]],
          ],
        },
        {
          category: "OCR & AI Extraction",
          features: [
            ["OCR Engine", ["Basic", "Standard", "Advanced", "Advanced+", "Custom"]],
            ["Extract Fields (Key-Value, Tables)", ["✔", "✔", "✔", "✔", "✔"]],
            ["Complex Table Parsing", ["", "", "", "✔", "✔"]],
            ["Clause & Contract Recognition", ["", "", "", "✔", "✔"]],
            ["Document Reviewer", ["", "", "", "✔", "✔"]],
            ["AI Document Categorization", ["", "", "✔", "✔", "✔"]],
            ["Custom Document Models", ["", "", "", "", "✔"]],
          ],
        },
        {
          category: "Export & Integration",
          features: [
            ["Export Format (CSV, Excel, JSON)", ["✔", "✔", "✔", "✔", "✔"]],
            ["API Access", ["", "", "✔", "✔", "✔"]],
            ["Prebuilt Integrations", ["", "", "✔", "✔", "✔"]],
            ["Custom Integrations (Tally, SAP, Zoho)", ["", "", "", "", "✔"]],
            ["Straight-through Processing", ["", "", "", "✔", "✔"]],
          ],
        },
        {
          category: "Data Validation",
          features: [
            ["Data Formatting (Date, Numbers, Text)", ["✔", "✔", "✔", "✔", "✔"]],
            ["Master Data Lookups", ["", "", "✔", "✔", "✔"]],
            ["Post-Processing (Custom Logic)", ["", "", "", "✔", "✔"]],
            ["External DB Validation", ["", "", "", "✔", "✔"]],
          ],
        },
        {
          category: "Analytics",
          features: [
            ["Dashboard & Metrics", ["", "", "✔", "✔", "✔"]],
            ["Auto-Categorization Insights", ["", "", "", "✔", "✔"]],
          ],
        },
        {
          category: "Support",
          features: [
            ["Email Support", ["✔", "✔", "✔", "✔", "✔"]],
            ["Phone Support", ["", "", "", "✔", "✔"]],
            ["Dedicated Account Manager", ["", "", "", "", "✔"]],
            ["SLA Guarantee", ["", "", "", "✔", "✔"]],
            ["Onboarding & Training", ["", "", "", "✔", "✔"]],
            ["24/7 Priority Support", ["", "", "", "", "✔"]],
          ],
        },
        {
          category: "Security & Compliance",
          features: [
            ["Data Encryption (At rest & Transit)", ["✔", "✔", "✔", "✔", "✔"]],
            ["Role-Based Access Control (RBAC)", ["", "✔", "✔", "✔", "✔"]],
            ["Audit Trails", ["", "", "✔", "✔", "✔"]],
            ["Single Sign-On (SSO)", ["", "", "", "✔", "✔"]],
            ["Multi-Factor Authentication (MFA)", ["", "", "", "", "✔"]],
            ["Custom Security Policies", ["", "", "", "", "✔"]],
          ],
        },
        {
          category: "AI-Powered Enhancements",
          features: [
            ["LLM-based Field Extraction", ["", "", "✔", "✔", "✔"]],
            ["Pre-trained Templates (Invoices, POs)", ["", "✔", "✔", "✔", "✔"]],
            ["AI Confidence Scoring", ["", "", "✔", "✔", "✔"]],
            ["Document Audit Reports", ["", "", "", "", "✔"]],
          ],
        },
      ].map(({ category, features }: { category: string; features: (string | string[])[][] }, i) => (
        <React.Fragment key={category}>
          <tr className="bg-gray-50 font-medium text-gray-900">
            <td colSpan={6} className="px-4 py-2 border border-gray-300">{category}</td>
          </tr>
          {features.map(([label, values]) => (
            <tr key={Array.isArray(label) ? label.join('-') : label} className="border border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{label}</td>
              {Array.isArray(values) && values.map((v, i) => (
                <td
                  key={i}
                  className={`text-center px-4 py-2 border border-gray-300 ${
                    v === "✔" ? "text-teal-600 font-bold" : ""
                  }`}
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </React.Fragment>
      ))}

    </tbody>
  </table> */}
          </div>
        </div>
        <PricingFaq />
      </div>
    </>
  );
}
