import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    clearUserInfo: () => null,
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

const userInfoSlice = userSlice.reducer;

export default userInfoSlice;
