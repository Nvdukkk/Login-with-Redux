import { createSlice } from '@reduxjs/toolkit';
// import Cookies from 'js-cookie';
const initialState = false;

export const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      return true;
    },
    loginFailure: (state) => false,
    logout: (state) => {
      return false;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = isLoggedInSlice.actions;

const userSlice = isLoggedInSlice.reducer;
export default userSlice


