import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
const setAuthHeader = token => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common["Authorization"] = "";
  };
export const register = createAsyncThunk('auth/register',
async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
        const response = await axios.post('https://connections-api.herokuapp.com/users/signup', newUser)
        setAuthHeader(response.data.token);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const logIn = createAsyncThunk('auth/login',
async (userData, thunkAPI) => {
    console.log(userData);
    try {
        const response = await axios.post('https://connections-api.herokuapp.com/users/login', userData)
        setAuthHeader(response.data.token);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const logOut = createAsyncThunk('auth/logout',
async (_, thunkAPI) => {
    try {
        const response = await axios.post('https://connections-api.herokuapp.com/users/logout')
        clearAuthHeader()   
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      setAuthHeader(reduxState.auth.token);
      try {
        const response = await axios.get("https://connections-api.herokuapp.com/users/current");
      return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    },
    {
      condition(_, thunkAPI) {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
      },
    }
  );