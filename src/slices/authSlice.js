import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "../utilities/axios";

const initialState = {
  token: localStorage.getItem("token")? localStorage.getItem("token"):null,
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
  isAuthenticated: localStorage.getItem("token")? true : false,
};

const isValidToken = (token) => {
  if (!token) {
    return false;
  }

  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      console.log(user);

      const res = await axios.post(`/api/v1/register`, user);

      localStorage.setItem("token", res.data.token);

      return res.data.token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const data = user;
    console.log(user);
    try {
      const res = await axios.post(`/api/v1/login`, data);
      console.log(res);

      const { token, user } = res.data.data;

      console.log(token);
      setSession(token);
      // localStorage.setItem('token',res.data.token)
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    _loadUser(state, action) {
      const token = state.token;

      if (token && isValidToken(token)) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    _logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
        isAuthenticated:false,
      };
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      return { ...state, registerStatus: "pending" };
    },
    [registerUser.fulfilled]: (state, action) => {
      const user = jwtDecode(action.payload);
      state.token = action.payload;
      state.name = user.name;
      state.email = user.email;
      state._id = user._id;
      state.registerStatus = "success";
    },
    [registerUser.rejected]: (state, action) => {
      state.registerStatus = "rejected";
      state.registerError = action.payload;
    },

    [loginUser.pending]: (state, action) => {
      state.loginStatus = "pending";
      state.isAuthenticated = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      const user = jwtDecode(action.payload.data.token);
      state.token = action.payload;
      state.name = user.name;
      state.email = user.email;
      state._id = user._id;
      state.loginStatus = "success";
      state.isAuthenticated = true;
    },

    [loginUser.rejected]: (state, action) => {
      state.loginStatus = "rejected";
      state.loginError = action.payload;
    },
  },
});

export const { _loadUser, _logoutUser } = authSlice.actions;
export default authSlice.reducer;
