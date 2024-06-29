import { createSlice } from "@reduxjs/toolkit";
// import { setMessageEmpty } from "../product/ProductSlice";
import { createUser, loginUser } from "./authApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedInUser: null,
    status: "idle",
    message: null,
    error: null,
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loader = false;
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(loginUser.fulfilled, (state,action) => {
        state.loader = false;
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(loginUser.rejected, (state,action) => {
        state.loader = false;
        state.status = "idle";
        state.error = action.error;
      });
  },
});

// selector
export const authSelector = (state) => state.auth;

// reducer
export default authSlice.reducer;
