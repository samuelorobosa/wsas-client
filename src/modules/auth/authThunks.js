import {createAsyncThunk} from '@reduxjs/toolkit';
import {getCountries} from './services/authService.js';


export const getCountriesThunk = createAsyncThunk(
'auth/getCountries',
    async (data, { rejectWithValue }) => {
    try {
        const response = await getCountries(data);
        return response.data;
    }
    catch (err) {
        return rejectWithValue(err);
    }
});

