import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCountries, registerUser } from './services/authService.js';

export const getCountriesThunk = createAsyncThunk(
  'auth/getCountries',
  async (data, { rejectWithValue }) => {
    try {
      const response = await getCountries(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const registerUserThunk = createAsyncThunk(
  'auth/registerUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await registerUser(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
