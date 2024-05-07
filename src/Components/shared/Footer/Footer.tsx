import Image from "next/image";
import {
  FaCopyright,
  FaFacebookSquare,
  FaInstagram,
  FaMobile,
  FaPhone,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0 flex items-center ">
          <Image
            src="/logo.png"
            alt="Logo Biryani Boss"
            width={150}
            height={150}
          />
          <div className="flex text-2xl gap-2 text-white cursor-pointer">
            <FaFacebookSquare />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
        <div className="flex gap-10 font-light text-sm">
          <ul className="text-white  ">
            <li className="font-bold text-lg uppercase">Services</li>
            <li>Home Delivery</li>
            <li>Marriage Spacial</li>
            <li>Birthday Spacial</li>
            <li>Corporate Special</li>
          </ul>
          <ul className="text-white">
            <li className="font-bold text-lg uppercase">Top Items</li>
            <li>Old Dhaka Mutton Biryani</li>
            <li>Old Dhaka Beef Biryani</li>
            <li>Pakistani Beef Biryani</li>
            <li>Afghanistan Beef Biryani</li>
          </ul>
          <ul className="text-white">
            <li className="font-bold text-lg uppercase">Sponsorship</li>
            <li>Akij Groupe</li>
            <li>Shojib Groupe</li>
            <li>Bashundhora Foods</li>
            <li>Squar Food</li>
          </ul>
          <ul className="text-white">
            <li className="font-bold text-lg uppercase">Outlets</li>
            <li>Banani - 1</li>
            <li>Banani - 2</li>
            <li>Gulshan </li>
            <li>Banasree</li>
          </ul>
          <ul className="text-white">
            <li className="font-bold text-lg uppercase">Address</li>
            <li>Block-D #Road-7 #House-4 Level-6</li>
            <li>Block-A #Road-4 #House-3 Level-2</li>
            <li>Block-F #Road-8 #House-9 Level-7</li>
            <li>Block-B #Road-5 #House-7 Level-5</li>
          </ul>
        </div>
      </div>
      <div className="text-white h-6 bg-gray-950 w-full flex items-center font-semibold text-sm justify-between ps-2 pe-2">
        <div className="flex items-center gap-2">
          <FaCopyright /> <p>Copyright 2024 Biryani Boss</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneFlip /> <p>Hot Line : +8801456845564</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock /> <p>10-am to 10-am</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
