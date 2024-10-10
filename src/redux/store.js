import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
} from 'redux-persist';
import staffReducer from './slice';

 export const store = configureStore({
   reducer: {
    staff:staffReducer,
  },
});

export const persistor = persistStore(store);