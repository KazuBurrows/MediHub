import axios from "axios";
import { acquireToken } from "../../features/auth/api/acquireToken";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await acquireToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});