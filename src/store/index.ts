import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './covidSlice';

export const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

// RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
