import Image from "next/image";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className=" p-10 pb-0 pt-20 "
      style={{
        backgroundImage: "url('/backgrounds/footer-bg.webp')",
        backgroundPosition: "center",
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-black bg-opacity-60 rounded-t-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <Image src="/logo/logo.png" alt="Logo" width={150} height={150} />
            <div className="flex justify-center text-2xl gap-2 text-white cursor-pointer">
              <FaFacebookSquare />
              <FaInstagram />
              <FaWhatsapp />
              <FaSquareXTwitter/>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center text-white text-sm">
            <div className="mb-4 lg:mb-0 lg:mr-12 text-lg font-semibold">
              <p className="mb-2">Briyani Boss Bangladesh</p>
              <p className="mb-2">briyanibossbd@info.com</p>
              <p>(+88) 01856-789086</p>
            </div>
            <div className="text-xl font-semibold">
              <div className="flex flex-wrap gap-10 font-light text-sm">
                <ul className="text-white">
                  <li className="font-bold text-lg uppercase mb-2">Services</li>
                  <li>Home Delivery</li>
                  <li>Marriage Special</li>
                  <li>Birthday Special</li>
                  <li>Corporate Special</li>
                </ul>
                <ul className="text-white">
                  <li className="font-bold text-lg uppercase mb-2">
                    Top Items
                  </li>
                  <li>Old Dhaka Mutton Biryani</li>
                  <li>Old Dhaka Beef Biryani</li>
                  <li>Pakistani Beef Biryani</li>
                  <li>Afghanistan Beef Biryani</li>
                </ul>
                <ul className="text-white">
                  <li className="font-bold text-lg uppercase mb-2">
                    Sponsorship
                  </li>
                  <li>Akij Group</li>
                  <li>Shojib Group</li>
                  <li>Bashundhora Foods</li>
                  <li>Square Food</li>
                </ul>
                <ul className="text-white">
                  <li className="font-bold text-lg uppercase mb-2">Outlets</li>
                  <li>Banani - 1</li>
                  <li>Banani - 2</li>
                  <li>Gulshan</li>
                  <li>Banasree</li>
                </ul>
                <ul className="text-white">
                  <li className="font-bold text-lg uppercase mb-2">Address</li>
                  <li>Block-D #Road-7 #House-4 Level-6</li>
                  <li>Block-A #Road-4 #House-3 Level-2</li>
                  <li>Block-F #Road-8 #House-9 Level-7</li>
                  <li>Block-B #Road-5 #House-7 Level-5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white h-6 mt-8 flex items-center font-semibold text-sm justify-between border-t">
          <p>Copyright 2024 Biryani Boss</p>
          <p>Hot Line : +8801456845564</p>
          <p>10 am to 10 pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
