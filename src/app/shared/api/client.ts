import axios from "axios";
import { acquireAccessToken } from "../../features/auth/api/acquireToken";
import { msalInstance } from "../../providers/msal-provider";


const api = axios.create({
  baseURL: "https://medihub-api-arctf0h2eyajhrgd.australiaeast-01.azurewebsites.net/api/"
});


api.interceptors.request.use(async (config) => {
  console.log("config:", config)
  const account = msalInstance.getActiveAccount();
    console.log("account:", account)

  if (!account) return config;

  const token = await acquireAccessToken(msalInstance, account);
        console.log("token:", token)

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;