import { createAsyncThunk } from "@reduxjs/toolkit";
// import { API } from "../../utils/api";
import axios from "axios";

export const createUser = createAsyncThunk("users/createUser", async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/users", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const loginUser = createAsyncThunk("users/loginUser", async (data) => {
  const email = data.email;
  try {
    const response = await axios.post(
      `http://localhost:8080/users?email=${email}`,data
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
