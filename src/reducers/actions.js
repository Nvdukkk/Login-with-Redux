import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";

export const login = (username, password) => {
  return (dispatch) => {
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    }, 1000);
  };
};
