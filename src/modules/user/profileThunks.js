import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, editProfile } from './services/profileService';

export const getProfileThunk = createAsyncThunk(
  'profile/getProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await getProfile(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const editProfileThunk = createAsyncThunk(
  'profile/editProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await editProfile(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
