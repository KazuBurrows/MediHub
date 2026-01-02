import { useMsal } from "@azure/msal-react";
import { useCallback } from "react";

export function useAuthToken() {
  const { instance, accounts } = useMsal();
  const account = accounts[0];

  const getToken = useCallback(async () => {
    if (!account) throw new Error("No account available");

    const response = await instance.acquireTokenSilent({
      scopes: [process.env.REACT_APP_AZURE_API_SCOPE!],
      account,
    });

    return response.accessToken;
  }, [account, instance]);

  return { getToken };
}
