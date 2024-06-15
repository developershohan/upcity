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

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export const getProductByFilter = createAsyncThunk(
  "products/getProductByFilter",
  async (filter) => {
    let queryString = "";
    for (let key in filter) {
      queryString += `${key}=${filter[key]}&`;
    }
    // for (let key in pagination) {
    //   queryString += `${key}=${pagination[key]}&`;
    // }
    try {
      const response = await axios.get(
        `http://localhost:8080/products?${queryString}`
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
