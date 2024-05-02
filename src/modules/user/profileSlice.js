import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk } from './profileThunks';
import { LoadingStates } from '../../core/toolkit/helpers.js';

const initialState = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  phone: '+2348123456789',
  password: 'interestingthings',
  get_profile: {
    loading: LoadingStates.base,
    data: {},
    response: null,
    error: null,
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Profile Thunk
    builder.addCase(getProfileThunk.pending, (state) => {
      state.get_profile.loading = LoadingStates.pending;
    });
    builder.addCase(getProfileThunk.fulfilled, (state, { payload }) => {
      state.get_profile.loading = LoadingStates.fulfilled;
      state.get_profile.response = payload;
    });
    builder.addCase(getProfileThunk.rejected, (state, { payload }) => {
      state.get_profile.loading = LoadingStates.rejected;
      state.get_profile.error = payload;
    });
  },
});

export default profileSlice.reducer;
