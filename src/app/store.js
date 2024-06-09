// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),

});

export default store;
