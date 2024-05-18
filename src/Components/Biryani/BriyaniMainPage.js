"use client";
import { useState } from "react";
import Title from "../Reuseable/Title/Title";
import { data } from "@/Database/data";
import { Biryani } from "next/font/google";

const BiryaniMainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Title data={"Our Special Items"} />

      {/* Category Buttons */}
      <div className="flex justify-center mb-6">
        {["all", "beef", "chicken", "mutton", "rice"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 rounded-lg font-semibold ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3 xl:grid-cols-4 xl:gap-[1.9rem] py-12">
          {filteredData.map((product, index) => (
            <Biryani product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BiryaniMainPage;
