"use client";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import BiryaniDetails from "./BiryaniDetails";
const Biryani = ({ product }) => {
  //Modal State
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
    <>
      <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl ">
        <Image
          onClick={openModal}
          className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
          width={270}
          height={270}
          src={product.image}
          alt=""
          priority={1}
        ></Image>
        {/* title */}
        <div onClick={openModal}>
          <div className="text-xl font-bold mb-3 capitalize cursor-pointer ">
            {product.name}
          </div>
        </div>
        {/* description */}
        <div className="text-sm font-medium min-h-[60px] mb-6 ">
          {product.description}
        </div>
        {/* price and button */}
        <div className="mb-6 flex items-center justify-between ">
          <div className="hidden lg:flex text-xl font-semibold ">
            start at {product.priceSm}
            <span className="font-extrabold">&#2547;</span>
          </div>
          <button
            onClick={openModal}
            className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
          >
            Choose
          </button>
          {/* btn for phone */}
          <button
            onClick={openModal}
            className="btn btn-sm gradient text-sm lg:hidden px-3"
          >
            starts at {product.priceSm}
            <span className="font-extrabold">&#2547;</span>
          </button>
        </div>
        {/* div */}
        {modal && (
          <Modal
            isOpen={modal}
            style={modalStyles}
            onRequestClose={closeModal}
            contentLabel="Biryani Modal"
            className={
              "bg-yellow-100 bg-opacity-95 w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
            }
          >
            <div
              onClick={closeModal}
              className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
            >
              <IoCloseOutline className="text-4xl text-orange" />
            </div>
            <BiryaniDetails
              product={product}
              modal={modal}
              setModal={setModal}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Biryani;