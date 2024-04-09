import Image from "next/image";
import React from "react";
import { FaAlignJustify, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav className=" max-w-7xl mx-auto border">
      <div className="flex  justify-between items-center border">
        {/* logo */}
        <div className="flex items-center">
          <div className="w-[80px] h-[80px] rounded-full">
            <Image width={150} height={150} src={"/logo.png"} alt="logo" />
          </div>
          <div className="flex text-2xl gap-2 text-red-500">
            <FaFacebookSquare />
            <FaInstagram />
          </div>
        </div>

        <div className="md:hidden">
          <FaAlignJustify className="text-black text-3xl mx-5" />
        </div>
        <div className=" flex mx-1 items-center">
          <ul className="flex gap-8 mx-10 font-semibold font-serif text-lg  items-center ">
            <li>Home</li>
            <li>Menu</li>
            <li>Offers</li>
            <li>Order</li>
            <li>About Us</li>
          </ul>
          <button className=" bg-primary text-secondary p-2 rounded-2xl banner-font font-semibold ">
            Special
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
