import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
const setAuthHeader = token => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common["Authorization"] = "";
  };
export const signUp = createAsyncThunk('auth/register',
async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
        const response = await axios.post('/users/signup', newUser)
        setAuthHeader(response.data.token);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const login = createAsyncThunk('auth/login',
async (userData, thunkAPI) => {
    console.log(userData);
    try {
        const response = await axios.post('/users/login', userData)
        setAuthHeader(response.data.token);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const logout = createAsyncThunk('auth/logout',
async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout')
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
  
      const response = await axios.get("/users/current");
      return response.data;
    },
    {
      condition(_, thunkAPI) {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
      },
    }
  );