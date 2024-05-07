import Image from "next/image";
//Icons
import {
  FaAlignJustify,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav className="container mx-auto h-[80px]">
      <div className="flex  justify-between items-center ">
        {/* logo */}
        <div className="flex items-center">
          <div className="  w-[70px]">
            <Image width={200} height={200} src={"/logo.png"} alt="logo" />
          </div>
          {/* social media icons */}
          <div className="flex text-2xl gap-2 text-red-500 cursor-pointer">
            <FaFacebookSquare />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

        <div className="md:hidden">
          <FaAlignJustify className="text-black text-3xl mx-5" />
        </div>
        <div className=" hidden md:flex mx-1 items-center justify-center">
          <ul className="flex gap-8 mx-10 font-semibold font-serif text-md  items-center cursor-pointer ">
            <li>Home</li>
            <li>Menu</li>
            <li>Offers</li>
            <li>Order</li>
            <li>About Us</li>
          </ul>
          <button className=" bg-primary text-white p-2 rounded-xl primary-font font-semibold ">
            Order Now!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
