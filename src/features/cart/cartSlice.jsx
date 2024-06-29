import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartApiSlice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    items: [],
    message: null,
    error: null,
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loader = true;
      })
      .addCase(addToCart.fulfilled,(state,action)=>{
        state.loader = false;
        state.message = action.message;
        // state.items = [...state.items, action.payload];
        // state.value = state.items.reduce((acc, item) => acc + item.price, 0);
        state.items.push(action.payload)
      });
  },
});

export const cartSelector = (state)=> state.cart.items
export default cartSlice.reducer