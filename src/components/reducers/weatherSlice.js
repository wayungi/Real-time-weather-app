import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://www.weatherapi.com/
const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=81c94cbab5f34936b61145833232002&q=kampala&aqi=yes';
const initialState = {
  status: 'idle',
  data: {},
  error: null,
};

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
  const response = await axios.get(baseUrl);
  const result = response.data;
  console.log(result);
  return result;
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
          data: action.data,
        }
      ))
      .addCase(fetchWeather.rejected, (state) => ({
        ...state,
        status: 'rejected',
      }));
  },
});

export const queryStatus = (state) => state.status;
export default weatherSlice.reducer;
