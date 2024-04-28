import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCountries, registerUser } from './services/authService.js';
import { useNavigate } from 'react-router-dom';
import { routeNames } from '../../core/navigation/routenames.js';

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
    const openPage = useNavigate();
    try {
      const response = await registerUser(data);
      openPage(routeNames.verifyAccess);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);
