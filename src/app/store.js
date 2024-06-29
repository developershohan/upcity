// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductSlice';
import authReducer from "../features/auth/authSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer
  },
  devTools: true,
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),

});

export default store;
