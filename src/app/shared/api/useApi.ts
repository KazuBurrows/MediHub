import { useCallback, useState } from "react";
import { api } from "./client";
import { useAuthToken } from "../../features/auth/api/useAuthToken";

export function useApi<T>() {
  const { getToken } = useAuthToken();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const get = useCallback(
    async (url: string): Promise<T> => {
      setLoading(true);
      setError(null);
      try {
        const token = await getToken();
        const res = await api.get<T>(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data);
        return res.data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getToken]
  );

  const post = useCallback(
    async (url: string, body: unknown): Promise<T> => {
      setLoading(true);
      setError(null);
      try {
        const token = await getToken();
        const res = await api.post<T>(url, body, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data);
        return res.data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getToken]
  );

  return { data, loading, error, get, post };
}
