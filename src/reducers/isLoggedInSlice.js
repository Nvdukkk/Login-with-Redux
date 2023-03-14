import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    loginSuccess: (state) => true,
    loginFailure: (state) => false,
    logout: (state) => false,
  },
});

export const { loginSuccess, loginFailure, logout } = isLoggedInSlice.actions;

const userSlice = isLoggedInSlice.reducer;
export default userSlice



// import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/types";
// const initialState = false;

// export const isLoggedInReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return true;
//     case LOGIN_FAILURE:
//       return false;
//     case LOGOUT:
//       return false;
//     default:
//       return state;
//   }
// };

