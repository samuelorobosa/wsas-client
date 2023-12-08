import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    countries: []
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase('auth/getCountries/fulfilled', (state, action) => {
            state.countries = action.payload;
        });
    }
});
