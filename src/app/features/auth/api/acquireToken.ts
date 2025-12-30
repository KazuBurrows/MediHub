import { msalInstance } from "../../../providers/msal-provider";
import { msalConfig } from "../../../config/msalConfig";

export async function acquireToken(): Promise<string> {
  const accounts = msalInstance.getAllAccounts();

  if (accounts.length === 0) {
    throw new Error("No signed-in account found");
  }

  const account = accounts[0];

  try {
    const silentResult = await msalInstance.acquireTokenSilent({
      account,
      scopes: msalConfig.apiScopes,
    });
    console.log("Silent token:", silentResult.accessToken)
    return silentResult.accessToken;
  } catch (silentError) {
    console.warn("Silent token acquisition failed, trying popup…", silentError);

    const popupResult = await msalInstance.acquireTokenPopup({
      account,
      scopes: msalConfig.apiScopes,
    });

    return popupResult.accessToken;
  }
}