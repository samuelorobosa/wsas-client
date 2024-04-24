import {getBaseUrlFromEnv} from "./helpers.js";
import axios from "axios";

export const defaultAxiosInstance = axios.create({
    baseURL: getBaseUrlFromEnv(),
});

export const countriesAxiosInstance  = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});


export default defaultAxiosInstance;
