import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { isLoggedInReducer } from "./reducers/isLoggedInReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
