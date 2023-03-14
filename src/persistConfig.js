import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { isLoggedInSlice } from "./reducers/isLoggedInSlice";

export const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, isLoggedInSlice);

export default persistedReducer;
