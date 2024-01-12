import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginFormData, RegisterFormData } from "../react-app-env";

interface User {
  email: string;
}

interface AuthState {
  user: User | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: "idle",
  error: null,
};

// Define a thunk to handle asynchronous login requests
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload: LoginFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/signin",
        payload
      );
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error.message;
    }
  }
);

// Register Async
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload: RegisterFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/signup",
        payload
      );
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error.message;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login user
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Login failed";
      })
      // Register user
      .addCase(registerUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Registration failed";
      });
  },
});

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectLoading = (state: { auth: AuthState }) => state.auth.loading;
export const selectError = (state: { auth: AuthState }) => state.auth.error;

export default authSlice.reducer;
