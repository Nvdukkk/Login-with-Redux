import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./reducers/isLoggedInSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { persistConfig } from "./persistConfig";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ user: userSlice });

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(thunk));

export default store;

// import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
// import { isLoggedInReducer } from "./reducers/isLoggedInReducer";
// import thunk from "redux-thunk";
// import persistReducer from "redux-persist/es/persistReducer";
// import { persistConfig } from "./persistConfig";

// const rootReducer = combineReducers({
//   isLoggedIn: isLoggedInReducer,
// });

// const pReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(pReducer, applyMiddleware(thunk));

// export default store;
