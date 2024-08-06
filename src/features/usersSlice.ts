import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  return result?.data;
});

export const fetchUserInfo = createAsyncThunk(
  "fetchUserInfo",
  async ({ userId }: any) => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return result?.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userInfo: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      state.loading = false;
    });
  },
  reducers: {},
});

export default usersSlice.reducer;
