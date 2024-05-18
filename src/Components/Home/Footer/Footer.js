import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <Image src="/logo/logo.png" alt="Logo" width={150} height={150} />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center text-black text-sm">
            <div className="mb-4 lg:mb-0 lg:mr-12 text-xl font-semibold">
              <p className="mb-2">123 Bruai Street, City</p>
              <p className="mb-2">example@email.com</p>
              <p>(123) 456-7890</p>
            </div>
            <div className="text-xl font-semibold">
              <p className="mb-4 lg:mb-0">XYZ Corporation</p>
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
        <div className="text-white h-6 mt-8 flex items-center font-semibold text-sm justify-between bg-black">
          <p>Copyright 2024 Biryani Boss</p>
          <p>Hot Line : +8801456845564</p>
          <p>10 am to 10 pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
