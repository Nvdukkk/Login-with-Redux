import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { isLoggedInReducer } from './reducers/isLoggedInReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, isLoggedInReducer);

export default persistedReducer;