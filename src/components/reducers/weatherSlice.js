import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://www.weatherapi.com/
const initialState = {
  status: 'idle',
  data: {},
  error: null,
};

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (location) => {
  // console.log(location);
  const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=81c94cbab5f34936b61145833232002&q=${location}&aqi=yes`);
  return response.data;
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(fetchWeather.fulfilled, (state, action) => (
        {
          ...state,
          status: 'fulfilled',
          data: action.payload,
        }
      ))
      .addCase(fetchWeather.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        status: 'rejected',
      }));
  },
});
export const queryStatus = (state) => state.weather.status;
export const location = (state) => state.weather.location;
export default weatherSlice.reducer;
