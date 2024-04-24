import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  phone: '+2348123456789',
  password: 'interestingthings',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});


export default profileSlice.reducer;