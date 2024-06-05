"use client";
import React from "react";
import axios from "axios";

const GetReq = () => {
  const handleGetRequest = () => {
    axios
      .get("https://bb-server-pro.vercel.app/api/v1/product/get", {
        withCredentials: true,
      })
      .then((response) => {
        const cookies = response.headers["set-cookie"];
        if (cookies) {
          // Set expiration time (adjust as needed)
          const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
          document.cookie = `${cookies}; expires=${expires.toUTCString()}; path=/`; // Ensure path matches server's cookie path
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleGetRequest}
        className="px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
      >
        Get Data
      </button>
      <p className="mt-4 text-gray-600">
        Check the console for the GET request response.
      </p>
    </div>
  );
};

export default GetReq;
