"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
