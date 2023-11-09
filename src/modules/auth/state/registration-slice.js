import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstPasswordVisible: false,
  secondPasswordVisible: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    toggleFirstPasswordVisibility: (state) => {
      state.firstPasswordVisible = !state.firstPasswordVisible;
    },
    toggleSecondPasswordVisiblity: (state) => {
      state.secondPasswordVisible = !state.secondPasswordVisible;
    }
  },
});

export default registrationSlice.reducer;
export const {
  toggleFirstPasswordVisibility,
  toggleSecondPasswordVisiblity,
} = registrationSlice.actions;