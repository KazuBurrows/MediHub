import axios from "axios";
import { acquireToken } from "../../features/auth/api/acquireToken";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await acquireToken();
console.log("token:", token)
  config.headers = config.headers || {};

  // Always safe
  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});