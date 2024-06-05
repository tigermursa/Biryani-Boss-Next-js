"use client"
import "./Navigation.css"
import { useState } from "react";
import Image from "next/image";
import { FaAlignJustify, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo and Social Media Icons */}
        <div className="flex items-center">
          <div className="w-[70px]">
            <Image width={200} height={200} src={"/logo/logo.png"} alt="logo" />
          </div>
          <div className="flex text-2xl gap-2 text-red-500 cursor-pointer md:hidden">
            <FaFacebookSquare />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

        {/* Burger Menu Icon for Mobile */}
        <div className="md:hidden">
          <FaAlignJustify
            className="text-black text-3xl mx-5 cursor-pointer"
            onClick={toggleDrawer}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex mx-1 items-center justify-center">
          <ul className="flex gap-8 mx-10 font-semibold font-serif text-md items-center cursor-pointer">
            <li>Home</li>
            <li>Menu</li>
            <li>Offers</li>
            <li>Order</li>
            <li>About Us</li>
          </ul>
          <button className="btn btn-primary btn-sm gradient primary-font">
            Order Now!
          </button>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <ul className="flex flex-col gap-4 mt-4 mx-5">
          <li>Home</li>
          <li>Menu</li>
          <li>Offers</li>
          <li>Order</li>
          <li>About Us phone</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
