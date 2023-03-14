import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { isLoggedInReducer } from './reducers/isLoggedInReducer';

export const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, isLoggedInReducer);

export default persistedReducer;
