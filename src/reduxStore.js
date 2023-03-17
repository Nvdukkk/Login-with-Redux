import { combineReducers } from "@reduxjs/toolkit";
import userInfoSlice from "./reducers/userInfo";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ user: userInfoSlice });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
