"use client";
import { useState } from "react";
import Image from "next/image";
import SelectItemModal from "../Reuseable/Modals/SelectItemsModal/SelectItemModal";
import { data } from "@/Database/data";

const Biryani = () => {
  // Modal State
  const [modal, setModal] = useState(false);

  // Open Modal
  const openModal = () => {
    setModal(true);
  };

  // Close Modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3 xl:grid-cols-4 xl:gap-[1.9rem] py-12 container mx-auto">
      {data.map((product, index) => (
        <div
          key={index}
          className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl shadow-md border flex flex-col justify-center items-center"
        >
          <Image
            onClick={openModal}
            className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 object-cover cursor-pointer rounded-xl w-[21rem] h-[15rem]"
            width={270}
            height={270}
            src={product.image}
            alt=""
            priority={1}
          />
          {/* Title */}
          <div onClick={openModal}>
            <div className="text-xl font-bold mb-3 capitalize text-gray-800 cursor-pointer ">
              {product.name}
            </div>
          </div>
          {/* Description */}
          <div className="text-sm text-justify ps-2 pe-2 font-semibold text-gray-500 min-h-[60px] mb-6 ">
            {product.description}
          </div>
          {/* Price and Button */}
          <div className="mb-6 flex items-center justify-between ">
            <div className="hidden lg:flex text-xl font-semibold me-5 ">
              Start at {product.priceSm}
              <span className="font-extrabold">&#2547;</span>
            </div>
            <button
              onClick={openModal}
              className="hidden lg:flex gradient rounded-lg btn-sm font-semibold text-sm"
            >
              Choose
            </button>
            {/* Button for phone */}
            <button
              onClick={openModal}
              className="btn btn-sm gradient text-sm lg:hidden px-3"
            >
              Start at {product.priceSm}
              <span className="font-extrabold">&#2547;</span>
            </button>
          </div>
          {/* Modal */}
          {modal && (
            <SelectItemModal
              product={product}
              setModal={setModal}
              closeModal={closeModal}
              modal={modal}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Biryani;
