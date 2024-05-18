"use client";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import BiryaniDetails from "./BiryaniDetails";
// Modal
Modal.setAppElement("body");
//style
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

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
      <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl border-2 shadow-lg shadow-black border-red-700 flex flex-col justify-center items-center">
        <Image
          onClick={openModal}
          className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer rounded-xl object-cover w-auto h-auto"
          width={270}
          height={270}
          src={product.image}
          alt=""
          priority={1}
        ></Image>
        {/* title */}
        <div onClick={openModal}>
          <div className="text-xl font-bold mb-3 capitalize text-gray-800 cursor-pointer ">
            {product.name}
          </div>
        </div>
        {/* description */}
        <div className="text-sm text-justify ps-2 pe-2 font-semibold text-gray-500 min-h-[60px] mb-6 ">
          {product.description}
        </div>
        {/* price and button */}
        <div className="mb-6 flex items-center justify-between ">
          <div className="hidden lg:flex text-xl font-semibold me-5 ">
            start at {product.priceSm}
            <span className="font-extrabold">&#2547;</span>
          </div>
          <button
            onClick={openModal}
            className="hidden lg:flex gradient  rounded-lg btn-sm font-semibold text-sm"
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
              "bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
            }
          >
            <div
              onClick={closeModal}
              className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
            >
              <IoCloseOutline className="text-4xl text-primary" />
            </div>
            {/* Inside the modal component is BiryaniDetails */}
            <BiryaniDetails product={product} setModal={setModal} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Biryani;
