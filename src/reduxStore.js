import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions/types";

// Khởi tạo state ban đầu
const initialState = {
  isLoggedIn: false,
  user: {},
  error: "",
};

// Action creators
const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

// Middleware
const loginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "LOGIN") {
      axios
        .post("/api/login", action.payload)
        .then((response) => {
          dispatch(loginSuccess(response.data));
        })
        .catch((error) => {
          dispatch(loginFailure(error.message));
        });
    }
    return next(action);
  };

// Store
const store = createStore(
  loginReducer,
  applyMiddleware(thunk, loginMiddleware)
);

export default store;
