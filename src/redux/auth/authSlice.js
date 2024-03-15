import { createSlice } from "@reduxjs/toolkit";
import { deleteUserToken, storeUserToken } from "../../storage";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      storeUserToken(action.payload);
      return state;
    },
    logout: (state) => {
      state = { user: null, token: null };
      deleteUserToken();
      return state;
    },
    setUserToken: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { login, logout, setUserToken } = authSlice.actions;

export default authSlice.reducer;
