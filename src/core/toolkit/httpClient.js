/* eslint-disable @typescript-eslint/no-explicit-any */
import defaultAxiosInstance from "./axiosInstance.js";
import { attachQueryFieldsToUrl } from "./helpers.js";


export const newHttpClient = (instance = defaultAxiosInstance) => {
  return (
    {
      axiosInstance: instance,
      get: async function(url, queryParams) {
        let parsedUrl = url;
        if (queryParams !== undefined) parsedUrl = attachQueryFieldsToUrl(parsedUrl, queryParams);
        const res = await this.axiosInstance.get(parsedUrl);
        return res;
      },
      post: async function(url, body, options = {}){
        const res = await this.axiosInstance.post(url, body, options);
        return res;
      }
    }
  )
}

