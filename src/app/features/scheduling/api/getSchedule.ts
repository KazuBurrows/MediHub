import { api } from "../../../shared/api/client";

export async function getSchedule() {
  const res = await api.get("/GetSchedule");
  return res.data;
}