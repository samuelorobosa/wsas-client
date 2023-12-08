import {newHttpClient} from "../../../core/toolkit/httpClient.js";
import {countriesAxiosInstance} from "../../../core/toolkit/axiosInstance.js";
import authUrls from "../data/authUrls.js";

const countriesServiceClient = newHttpClient(countriesAxiosInstance);

export const getCountries = async (data) => {
    return await countriesServiceClient.get(authUrls.getCountries, data);
}
