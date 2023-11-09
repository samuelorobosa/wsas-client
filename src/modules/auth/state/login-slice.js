import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passwordIsVisible: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    togglePasswordVisibility (state) {
      state.passwordIsVisible = !state.passwordIsVisible;
    }
  }
});

export default loginSlice.reducer;
export const { togglePasswordVisibility } = loginSlice.actions;