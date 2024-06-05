"use client";
import React from "react";

const GetReq = () => {
  const handleGetRequest = () => {
    fetch("https://meherun-server.vercel.app/api/v1/auth/example/", {
      credentials: "include",
    })
      .then((response) => {
        // Set cookies from the response headers
        const cookies = response.headers.get("set-cookie");
        if (cookies) {
          document.cookie = cookies;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
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
