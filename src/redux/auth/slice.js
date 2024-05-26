import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, signUp } from "./operations";
const slice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
          },
          token: null,
          isLoggedIn: false,
          isRefreshing: false,
    },
    extraReducers: (builder) => builder
    .addCase(signUp.fulfilled, (state, actions) => {
        state.isLoggedIn = true
        state.user = actions.payload.user
        state.token = actions.payload.token
    })
    .addCase(login.fulfilled, (state, actions) => {
        state.isLoggedIn = true
        state.user = actions.payload.user
        state.token = actions.payload.token
    })
    .addCase(logout.fulfilled, (state) => {
        state.user = {
            name: null,
            email: null,
          };
          state.token = null;
          state.isLoggedIn = false;
    })
    .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
})
export default slice.reducer