import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cart: [],
    cartTotal: 0,
    itemAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const { id, image, name, price, additionalDrinks, size } = action.payload;
      additionalDrinks.sort((a, b) => a.name.localeCompare(b.name));

      const newItem = {
        id,
        image,
        name,
        price,
        additionalDrinks,
        size,
        amount: 1,
      };

      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.id === id &&
          item.price === price &&
          item.size === size &&
          JSON.stringify(item.additionalDrinks) ===
            JSON.stringify(additionalDrinks)
      );

      if (existingItemIndex === -1) {
        state.cart.push(newItem);
      } else {
        state.cart[existingItemIndex].amount++;
      }

      state.isOpen = true; // Open the cart when a product is added
    },
    removeItem(state, action) {
      const { id, price } = action.payload;
      const itemIndex = state.cart.findIndex(
        (item) => item.id === id && item.price === price
      );
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
      }
    },
    increaseAmount(state, action) {
      const { id, price } = action.payload;
      const itemIndex = state.cart.findIndex(
        (item) => item.id === id && item.price === price
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].amount++;
      }
    },
    decreaseAmount(state, action) {
      const { id, price } = action.payload;
      const itemIndex = state.cart.findIndex(
        (item) => item.id === id && item.price === price
      );
      if (itemIndex !== -1 && state.cart[itemIndex].amount > 1) {
        state.cart[itemIndex].amount--;
      }
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  setIsOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
