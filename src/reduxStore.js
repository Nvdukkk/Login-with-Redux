import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { isLoggedInReducer } from "./reducers/isLoggedInReducer";
import thunk from "redux-thunk";
import persistedReducer from "./persistConfig";
import persistReducer from "redux-persist/es/persistReducer";
import { persistConfig } from "./persistConfig";

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(pReducer, applyMiddleware(thunk));

export default store;
