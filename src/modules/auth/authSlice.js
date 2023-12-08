import {createSlice} from '@reduxjs/toolkit';
import {getCountriesThunk} from "./authThunks.js";
import {LoadingStates} from "../../core/toolkit/helpers.js";


const initialState = {
    loading: LoadingStates.base,
    countries: []
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCountriesThunk.pending, (state) => {
            state.loading = LoadingStates.pending;
        });
        builder.addCase(getCountriesThunk.fulfilled, (state, { payload}) => {
            state.loading = LoadingStates.fulfilled;
            // Restructure payload to match the state shape
            state.countries = payload.map((country) => {
                return {
                    name: country.name.common,
                    value: country.cioc,
                }
            });
            // Sort the countries array alphabetically by name
            state.countries.sort((a, b) => a.name.localeCompare(b.name));
        });
        builder.addCase(getCountriesThunk.rejected, (state) => {
            state.loading = LoadingStates.rejected;
        });
    }
});


export default authSlice.reducer
