import { axiosClient } from "./axiosClient";
import { GetRequestType, RequestType } from "../types/services/Handlers";

export const request = ({
  url,
  method,
  headers,
  params,
  baseURL,
}: RequestType) =>
  axiosClient
    .request({
      url,
      method,
      headers,
      params,
      baseURL,
    })
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject(response.data);
      }
      return response.data;
    });

export const get = ({ url, params, headers }: GetRequestType) =>
  request({ url, method: "get", params, headers });
