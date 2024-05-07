"use client";
import { useState } from "react";
import data from "../../../../public/data";
import Image from "next/image";
import Category from "./Category";
import ItemModal from "../Modals/ItemModal";
import { useDisclosure } from "@nextui-org/react";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-5xl item-card-font mb-20 text-center mt-10">
        Our <span className="text-primary">Special</span> Menu
      </h1>

      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {data
          .filter((item) => item.category === selectedCategory)
          .map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer relative group"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-48 object-cover transition-transform duration-300 transform-gpu group-hover:scale-105"
                style={{ transitionProperty: "transform" }}
              />
              <div className="p-4 text-center mt-5 mb-3">
                <h2 className="text-xl item-card-font mb-2">{item.name}</h2>
                <div className="flex justify-center gap-2 font-semibold mt-8">
                  <p className="mb-2 bg-primary text-white p-2 rounded-lg text-sm">
                    Price: ${item.price}
                  </p>
                  <p className="mb-2 bg-primary text-white p-2 rounded-lg text-sm">
                    Serving: {item.quantity}
                  </p>
                </div>
              </div>
              <div>
                <span className="absolute top-0 right-0 bg-black text-white border border-gray-400 px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  {"12%"} off
                </span>
              </div>
              {/* <ItemModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} /> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
