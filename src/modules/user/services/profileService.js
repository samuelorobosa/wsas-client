import { newHttpClient } from '../../../core/toolkit/httpClient.js';
import { defaultAxiosInstance } from '../../../core/toolkit/axiosInstance.js';
import profileUrls from '../data/profileUrls.js';

const profileServiceClient = newHttpClient(defaultAxiosInstance);

export const getProfile = async (data) => {
  return await profileServiceClient.get(profileUrls.getProfile, data);
};

export const editProfile = async (data) => {
  return await profileServiceClient.patch(profileUrls.editProfile, data);
};
