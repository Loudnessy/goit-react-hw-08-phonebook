import axios from "axios";
import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getStoredState from "redux-persist/es/getStoredState";
axios.defaults.baseURL = "https://connections-api.herokuapp.com"
const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const signUp = createAsyncThunk("auth/signingUp", async (payload, thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", payload)
    await setAuthToken(response.data.token)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})
export const logIn = createAsyncThunk("auth/logining", async (payload, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", payload)
    await setAuthToken(response.data.token)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const logout = createAsyncThunk("auth/loginingOut", async (payload, thunkAPI) => {
  try {
     const response = await axios.post("/users/logout")
  return setAuthToken()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
export const userLocalStorage = createAsyncThunk("auth/userLocalStorage", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token
  console.log(state);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(); 
    }
    setAuthToken(persistedToken)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  
})
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
    return response.data;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  });
  export const addContact = createAsyncThunk("contacts/addContact", async (payload, thunkAPI) => {
    try { 
        await axios.post("/contacts", payload)
        console.log(payload);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  });
  export const deleteContact = createAsyncThunk("contacts/deleteContact", async (payload, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${payload}`);
    return payload;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  });
  