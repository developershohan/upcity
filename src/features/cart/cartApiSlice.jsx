import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/cart", data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
