import { PublicClientApplication, AccountInfo } from "@azure/msal-browser";
import { loginRequest } from "../../../config/msalConfig";

export const acquireAccessToken = async (
  msal: PublicClientApplication,
  account: AccountInfo
) => {
  const result = await msal.acquireTokenSilent({
    ...loginRequest,
    account
  });

  return result.accessToken;
};
