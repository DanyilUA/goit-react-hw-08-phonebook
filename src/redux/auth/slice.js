import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSLice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSLice.reducer;