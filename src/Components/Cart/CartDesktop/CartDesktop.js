"use client";
import { useContext } from "react";

import { CartContext } from "@/context/CartContext";
import CartTop from "../CartTop/CartTop";
import CartBottom from "../CartBottom/CartBottom";
import CartItem from "../CartItem/CartItem";

const CartDesktop = () => {
  const { cart, isOpen } = useContext(CartContext);
  //! console the cart
  console.log(cart);
  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } bg-yellow-100 shadow-black  fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300 `}
    >
      <CartTop />
      <div
        className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 scrollbar-thin ${
          cart.length >= 4 &&
          "scrollbar-track-black/10 scrollbar-thumb-secondary overflow-y-scroll "
        }`}
      >
        {cart.map((product, index) => {
          return <CartItem product={product} key={index} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};

export default CartDesktop;