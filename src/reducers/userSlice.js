import { createSlice } from "@reduxjs/toolkit";
import { getInfo } from "../api/getInfo";
import { userIsLoging } from "./loginReducer";
import Cookies from "js-cookie";
const initialState = {
  user: null,
  isLoading: false,
  message: "",
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserInfo: (state) => {
      state.user = null;
      Cookies.remove("isLoggedIn");
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userIsLoging.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userIsLoging.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.user = action.payload;
    });
    // builder.addCase(userIsLoging.rejected, (state, action) => {
    //   // Tắt trạng thái loading, lưu thông báo lỗi vào store
    //   state.isLoading = false;
    //   state.message = action.payload;
    // });
    builder.addCase(getInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const { clearUserInfo } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.user.isLoading;
// export const selectErrorMessage = (state) => state.user.message;
export const selectUserInfo = (state) => state.user.userInfo;

const userSliceReducer = userSlice.reducer;

export default userSliceReducer;
