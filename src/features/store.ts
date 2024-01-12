import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bidReducer from './bidSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bid: bidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
