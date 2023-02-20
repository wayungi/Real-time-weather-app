/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},

});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = weatherSlice.actions;

export default weatherSlice.reducer;
