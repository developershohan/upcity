import { createAsyncThunk } from "@reduxjs/toolkit";
// import { API } from "../../utils/api";
import axios from "axios";

export const getProduct = createAsyncThunk("products/getproduct", async () => {
  try {
    const response = await axios.get("http://localhost:8080/products");

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
