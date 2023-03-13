import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";

const initialState = false;

const isLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
};

export default isLoggedInReducer;
