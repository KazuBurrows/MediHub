import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

export function useSchedule() {
  const { instance, accounts } = useMsal();
  const account = accounts[0];
  const [schedule, setSchedule] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!account) return;

      const tokenResponse = await instance.acquireTokenSilent({
        scopes: ["api://8ad458fa-2142-4fc2-82c1-ef4c4a8972a5/user_impersonation"],
        account,
      });

      const res = await fetch(
        "https://medihub-api-arctf0h2eyajhrgd.australiaeast-01.azurewebsites.net/api/schedule", // <-- no code param
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenResponse.accessToken}`,
          },
        }
      );

      const data = await res.json();
      setSchedule(data);
      setLoading(false);
    }

    fetchData();
  }, [account, instance]);

  return { schedule, loading };
}
