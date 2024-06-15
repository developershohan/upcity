import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProductByFilter, getProductById } from "./ProductApiSlice";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    loader: false,
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loader = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.message;
        state.products = action.payload;
      })
      .addCase(getProductByFilter.pending, (state) => {
        state.loader = true;
      })
      .addCase(getProductByFilter.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.message;
        state.products = action.payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.loader = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.message;
        state.product = action.payload;
      })
  },
});

// selector
export const productSelector = (state) => state.product;
export const productByIdSelector = (state) => state.product.product;

// actions
export const { setMessageEmpty } = productSlice.actions;

//reducer
export default productSlice.reducer;
