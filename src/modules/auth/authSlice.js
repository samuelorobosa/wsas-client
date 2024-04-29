import { createSlice } from '@reduxjs/toolkit';
import {
  getCountriesThunk,
  loginThunk,
  registerUserThunk,
  verifyEmailThunk,
} from './authThunks.js';
import { LoadingStates } from '../../core/toolkit/helpers.js';

const initialState = {
  countries: {
    loading: LoadingStates.base,
    data: [],
  },
  user: {
    loading: LoadingStates.base,
    data: {},
    response: null,
    error: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get Countries Thunk
    builder.addCase(getCountriesThunk.pending, (state) => {
      state.countries.loading = LoadingStates.pending;
    });
    builder.addCase(getCountriesThunk.fulfilled, (state, { payload }) => {
      state.countries.loading = LoadingStates.fulfilled;
      // Restructure payload to match the state shape
      state.countries.data = payload.map((country) => {
        return {
          name: country.name.common,
          value: country.cioc,
        };
      });
      // Sort the countries array alphabetically by name
      state.countries.data.sort((a, b) => a.name.localeCompare(b.name));
    });
    builder.addCase(getCountriesThunk.rejected, (state) => {
      state.countries.loading = LoadingStates.rejected;
    });

    //Register User Thunk
    builder.addCase(registerUserThunk.pending, (state) => {
      state.user.loading = LoadingStates.pending;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, { payload }) => {
      state.user.loading = LoadingStates.fulfilled;
      state.user.response = payload;
    });
    builder.addCase(registerUserThunk.rejected, (state, { payload }) => {
      state.user.loading = LoadingStates.rejected;
      state.user.error = payload;
    });

    //Verify Email Thunk
    builder.addCase(verifyEmailThunk.pending, (state) => {
      state.user.loading = LoadingStates.pending;
    });
    builder.addCase(verifyEmailThunk.fulfilled, (state, { payload }) => {
      state.user.loading = LoadingStates.fulfilled;
      console.log('Email verified:', payload);
    });
    builder.addCase(verifyEmailThunk.rejected, (state) => {
      state.user.loading = LoadingStates.rejected;
      // console.log('Email error:', payload);
    });

    //Login Thunk
    builder.addCase(loginThunk.pending, (state) => {
      state.user.loading = LoadingStates.pending;
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.user.loading = LoadingStates.fulfilled;
      console.log('Email verified:', payload);
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.user.loading = LoadingStates.rejected;
      // console.log('Email error:', payload);
    });
  },
});

export default authSlice.reducer;
