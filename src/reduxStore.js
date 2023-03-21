import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "./reducers/userSlice";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ user: userSliceReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

