import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";



const CartTop = () => {
  const { setIsOpen,cart } = useContext(CartContext);
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10 ">
      <div className="text-xl font-bold text-primary">Shopping bag - {cart.length}</div>
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl text-secondary group-hover:scale-110 duration-300 transition-all" />
      </div>
    </div>
  );
};

export default CartTop;
