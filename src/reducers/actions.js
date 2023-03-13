import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";
import { ACCOUNT_MANAGEMENT } from "../useraccount/account";

export const login = (username, password) => {
    return (dispatch) => {
      
      if (username === "user" && password === "pass") {
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    };
  
};
