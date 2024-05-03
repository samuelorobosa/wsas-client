import { getBaseUrlFromEnv, getFromLocalStorage } from './helpers.js';
import axios from 'axios';

export const defaultAxiosInstance = axios.create({
  baseURL: getBaseUrlFromEnv(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const countriesAxiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

defaultAxiosInstance.interceptors.request.use(async (config) => {
  const accessToken = getFromLocalStorage('userToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default defaultAxiosInstance;
