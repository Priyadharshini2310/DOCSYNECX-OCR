"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Subscription successful!");
        setEmail(""); // Clear the email input field
      } else {
        toast.error(result.message || "Failed to subscribe. Try again.");
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center  sm:mx-0 mx-6">
      <h2 className="text-xl md:text-2xl font-bold mb-2 pt-10">
        Be Part of the Future
      </h2>
      <p className=" text-md md:text-base mb-6">
        Don’t miss out! Get exclusive updates, cutting-edge insights, and the
        latest breakthroughs delivered right to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
      >
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-full md:w-96 rounded-full text-gray-800 outline-none border-2 border-gray-200"
        />

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-300" : "bg-gray-200"
          } text-gray-600 px-5 py-3 rounded-full   font-semibold`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default EmailSubscribe;
