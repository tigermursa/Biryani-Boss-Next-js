import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import { useContext } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const CartItem = ({ product }) => {
  const { removeItem, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className=" select-none">
      <div className="flex gap-x-4 mb-2">
        <div className="flex justify-center items-center">
          <Image
            width={90}
            height={90}
            alt="lol"
            src={product.image}
            className="w-auto h-auto"
          />
        </div>
        <div className="flex-1 flex flex-col gap-y-1">
          <div className="text-lg capitalize font-bold">{product.name}</div>
          <div className="flex flex-col gap-y-1">
            <div className="capitalize font-medium text-[15px] ">
              {product.crust} crust
            </div>
            <div className="capitalize mb-2 font-medium text-[15px]">
              {product.size} size
            </div>
            {/* Quantity controls */}
            <div className="flex items-center gap-x-1">
              <div
                onClick={() => decreaseAmount(product.id, product.price)}
                className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"
              >
                <BiMinus />
              </div>
              <div className=" font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm">
                {product.amount}
              </div>
              <div
                onClick={() => increaseAmount(product.id, product.price)}
                className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"
              >
                <BiPlus />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          {/* remove items */}
          <div
            onClick={() => removeItem(product.id, product.price)}
            className=" text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange"
          >
            <IoCloseOutline />
          </div>
          <div>
            <span className="text-[17px] font-medium font-robotoCondensed">
              ${parseFloat(product.price * product.amount).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 p-6 border-b border-black/10">
        <div className="font-semibold">
          Toppings: {product.additionalDrinks.length === 0 && "None"}
        </div>
        {product.additionalDrinks.map((topping, index) => {
          return (
            <div
              className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none"
              key={index}
            >
              {topping.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;
