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
export const findItemsByUserId = createAsyncThunk("cart/findItemsByUserId", async (userId) => {
  try {
    const response = await axios.post(`http://localhost:8080/cart?user=${userId}`,userId);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
