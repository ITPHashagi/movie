import { configureStore } from "@reduxjs/toolkit";
import shoppingPhoneReducer from "./../pages/HomeTemplate/ShoppingPhone/slice.js";

export const store = configureStore({
  reducer: {
    // Add child Reducers here
    shoppingPhoneReducer,
  },
});
