// api/useApi.ts
import { useState } from "react";
import { api } from "./client";
import { useAuthToken } from "../../features/auth/api/useAuthToken";

export function useApi<T>() {
  const { getToken } = useAuthToken();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  async function get(url: string) {
    setLoading(true);
    setError(null);

    try {
      const token = await getToken();
      const res = await api.get<T>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function post(url: string, body: unknown) {
    setLoading(true);
    setError(null);

    try {
      const token = await getToken();
      const res = await api.post<T>(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, get, post };
}
