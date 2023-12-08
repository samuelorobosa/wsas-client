import {newHttpClient} from "../../../core/toolkit/httpClient.js";
import {countriesAxiosInstance} from "../../../core/toolkit/axiosInstance.js";
import authUrls from "../data/authUrls.js";

const countriesServiceClient = new newHttpClient(countriesAxiosInstance);

export const getCountries = async (queryParams) => {
    const res = await countriesServiceClient.get(authUrls.getCountries, queryParams);
    return res.data;
}
