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

      try {
        const tokenResponse = await instance.acquireTokenSilent({
          scopes: ["api://5075e85b-cc81-456a-86e4-470c95ab2b68/user_impersonation"],
          account,
        });

        const res = await fetch(
          "https://medihub-api-arctf0h2eyajhrgd.australiaeast-01.azurewebsites.net/api/schedule",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.accessToken}`,
            },
          }
        );

        const data = await res.json();
        setSchedule(data);
      } catch (err) {
        console.error("Failed to fetch schedule:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [account, instance]);

  return { schedule, loading };
}
