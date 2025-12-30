import axios from "axios";
import { acquireToken } from "../../features/auth/api/acquireToken";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await acquireToken();

  if (!config.headers) {
    config.headers = new axios.AxiosHeaders();
  }

  config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});