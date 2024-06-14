import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProductByFilter } from "./ProductApiSlice";

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
      });
  },
});

// selector
export const productSelector = (state) => state.product;

// actions
export const { setMessageEmpty } = productSlice.actions;

//reducer
export default productSlice.reducer;
