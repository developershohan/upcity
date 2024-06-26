// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/ProductSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  }

});

export default store;
