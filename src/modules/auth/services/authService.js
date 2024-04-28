import { newHttpClient } from '../../../core/toolkit/httpClient.js';
import {
  countriesAxiosInstance,
  defaultAxiosInstance,
} from '../../../core/toolkit/axiosInstance.js';
import authUrls from '../data/authUrls.js';

const countriesServiceClient = newHttpClient(countriesAxiosInstance);
const authServiceClient = newHttpClient(defaultAxiosInstance);

export const getCountries = async (data) => {
  return await countriesServiceClient.get(authUrls.getCountries, data);
};

export const registerUser = async (data) => {
  return await authServiceClient.post(authUrls.registerUser, data);
};
