"use client";
import { createContext, useEffect, useState } from "react";

// cart context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); //total price of the items that users have selected
  const [itemAmount, setItemAmount] = useState(0); //how many items user selected

  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemAmount(amount);
  });

  //update cart total price
  useEffect(() => {
    const price = cart.reduce((a, c) => {
      return a + Number(c.price) * c.amount;
    }, 0);
    setCartTotal(price);
  }, [cart]);

  // add to cart
  const addToCart = (id, image, name, price, additionalDrinks, size,) => {
    additionalDrinks.sort((a, b) => a.name.localeCompare(b.name));

    const newItems = {
      id,
      image,
      name,
      price,
      additionalDrinks,
      size,
      amount: 1,
    };

    const cartItemIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.price === price &&
        item.size === size &&
        JSON.stringify(item.additionalDrinks) ===
          JSON.stringify(additionalDrinks)
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItems]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }

    //open the cart when user add a product

    setIsOpen(true);
  };

  //remove items
  const removeItem = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price
    );
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  //increase items

  const increaseAmount = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price
    );

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].amount += 1;

      setCart(newCart);
    }
  };

  //decrease items

  const decreaseAmount = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price
    );

    if (itemIndex !== -1) {
      const newCart = [...cart];

      if (newCart[itemIndex].amount > 1) {
        newCart[itemIndex].amount -= 1;
      }
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        setIsOpen,
        addToCart,
        setCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        isOpen,
        cart,
        itemAmount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
