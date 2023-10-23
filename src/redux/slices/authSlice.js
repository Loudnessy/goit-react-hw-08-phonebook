import { createSlice } from "@reduxjs/toolkit";
import {logIn, logout, signUp, userLocalStorage} from "api/api";

const handleRejected = (state, action) => {
  state.error = true
  state.isLoggedIn = false
  state.isRefreshing = false
};
const authSlice = createSlice({
    
    name: "auth",
    // Початковий стан редюсера слайсу
    initialState: {
      user: { name: null, email: null },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
      error: null
    },
    // Об'єкт редюсерів
    extraReducers: {
      [logout.fulfilled](state, action) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
            }, 
    [signUp.fulfilled](state, action) {
      state.token = action.payload.token
      state.user = {name: action.payload.user.name, email: action.payload.user.email}
      state.isLoggedIn = true
          },
          
    [logIn.fulfilled](state, action) {
      state.token = action.payload.token
      state.user = {name: action.payload.user.name, email: action.payload.user.email}
      state.isLoggedIn = true
          },
          [userLocalStorage.pending](state, action) {
                  state.isRefreshing = true
                      },
          [userLocalStorage.fulfilled](state, action) {
            state.isLoggedIn = true;
      state.isRefreshing = false;
                },
                [signUp.rejected]: handleRejected,
                [logIn.rejected]: handleRejected,
                [logout.rejected]: handleRejected,
                [userLocalStorage.rejected] : handleRejected
                
    },
  });
// Редюсер слайсу
export const authReducer = authSlice.reducer;
