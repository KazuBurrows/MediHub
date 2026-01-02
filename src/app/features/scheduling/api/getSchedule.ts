import { useEffect } from "react";
import { useApi } from "../../../shared/api/useApi";

export function useSchedule() {
  const { data, loading, get } = useApi<any[]>();

  useEffect(() => {
    get("/schedule");
  }, []);

  return {
    schedule: data ?? [],
    loading,
  };
}
