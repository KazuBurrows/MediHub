import { EventType, PublicClientApplication, AuthenticationResult } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../config/msalConfig";

/**
* MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
* For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
*/
export const msalInstance = new PublicClientApplication(msalConfig);

const allAccounts = msalInstance.getAllAccounts();

// Default to using the first account if no account is active on page load
if (!msalInstance.getActiveAccount() && allAccounts.length > 0) {
  msalInstance.setActiveAccount(allAccounts[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    const account = (event.payload as AuthenticationResult)?.account;
    if (account) {
      msalInstance.setActiveAccount(account);
    }
  }
});

export function MsalAppProvider({ children }: { children: React.ReactNode }) {
  return (
    <MsalProvider instance={msalInstance}>
      {children}
    </MsalProvider>
  );
}
