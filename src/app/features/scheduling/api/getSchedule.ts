import { useEffect } from "react";
import { useApi } from "../../../shared/api/useApi";

export function useSchedule() {
  const { data, loading, get } = useApi<any[]>();

  useEffect(() => {
    get("/schedule").catch((err) => {
      console.error("Failed to fetch schedule:", err);
    });
  }, [get]);

  return {
    schedule: data ?? [],
    loading,
  };
}
