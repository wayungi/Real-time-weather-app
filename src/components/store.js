/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
