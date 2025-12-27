// src/app/providers/msal-provider.tsx
import { MsalProvider, useMsal } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../config/msalConfig";
import { useEffect, useState } from "react";

const msalInstance = new PublicClientApplication(msalConfig);

export function MsalAppProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function init() {
      await msalInstance.initialize();          // ✅ required
      await msalInstance.handleRedirectPromise(); // ✅ must come after initialize
      setReady(true);
    }
    init();
  }, []);

  if (!ready) return null; // or a loading spinner

  return (
    <MsalProvider instance={msalInstance}>
      <ActiveAccountManager>{children}</ActiveAccountManager>
    </MsalProvider>
  );
}

function ActiveAccountManager({ children }: { children: React.ReactNode }) {
  const { instance, accounts } = useMsal();

  useEffect(() => {
    if (accounts.length > 0) {
      instance.setActiveAccount(accounts[0]);
    }
  }, [accounts, instance]);

  return <>{children}</>;
}