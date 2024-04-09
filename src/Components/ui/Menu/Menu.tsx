"use client";
import { SetStateAction, useState } from "react";
import data from "../../../../public/data";
import Image from "next/image";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("popular");

  const handleCategoryClick = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen border">
      <h1 className="text-5xl item-card-font mb-20 text-center mt-10">
        Our <span className="text-primary">Special</span> Menu
      </h1>

      <div className="mb-10 flex justify-center">
        <ul className="flex gap-5">
          <li>
            <button
              className={` border border-red-600   p-3 text-xl font-semibold rounded-3xl ${
                selectedCategory === "popular" && "bg-red-600 text-white "
              }`}
              onClick={() => handleCategoryClick("popular")}
            >
              Popular
            </button>
          </li>
          <li>
            <button
              className={` border border-red-600  p-3 text-xl font-semibold rounded-3xl ${
                selectedCategory === "kacchi" && "bg-red-600 text-white"
              }`}
              onClick={() => handleCategoryClick("kacchi")}
            >
              Kacchi
            </button>
          </li>
          <li>
            <button
              className={`bg-none border border-red-600  p-3 text-xl font-semibold rounded-3xl ${
                selectedCategory === "polaw" && "bg-red-600 text-white "
              }`}
              onClick={() => handleCategoryClick("polaw")}
            >
              Polaw
            </button>
          </li>
          <li>
            <button
              className={`bg-none border border-red-600  p-3 text-xl font-semibold rounded-3xl ${
                selectedCategory === "chui-ghoshto" && "bg-red-600 text-white "
              }`}
              onClick={() => handleCategoryClick("chui-ghoshto")}
            >
              Chui-ghoshto
            </button>
          </li>
          <li>
            <button
              className={`bg-none border border-red-600  p-3 text-xl font-semibold rounded-3xl ${
                selectedCategory === "drinks" && "bg-red-600 text-white "
              }`}
              onClick={() => handleCategoryClick("drinks")}
            >
              Drinks
            </button>
          </li>
          <li>
            <button
              className={`bg-none border border-red-600  p-3 text-xl font-semibold rounded-3xl ${
                selectedCategory === "others" && "bg-red-600 text-white "
              }`}
              onClick={() => handleCategoryClick("others")}
            >
              Others
            </button>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data
          .filter((item) => item.category === selectedCategory)
          .map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center mt-5 mb-3">
                <h2 className="text-xl  item-card-font mb-2">{item.name}</h2>
                <div className=" flex  justify-center gap-2 font-semibold mt-8">
                  <p className="mb-2 bg-primary text-white p-2 rounded-lg text-sm">
                    Price: ${item.price}
                  </p>
                  <p className="mb-2 bg-primary text-white p-2 rounded-lg text-sm">
                    Serving: {item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
