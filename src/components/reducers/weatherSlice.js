import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://www.weatherapi.com/
const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=81c94cbab5f34936b61145833232002&q=kampala&aqi=yes';
const initialState = {
  status: 'idle',
  data: {},
  error: null,
  search: false,
};

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
  const response = await axios.get(baseUrl);
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
export const canSearch = (state) => state.weather.search;
export default weatherSlice.reducer;
