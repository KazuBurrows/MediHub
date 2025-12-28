import { useQuery } from "@tanstack/react-query";
import { PERMISSIONS } from "../../config/permissions";
import { PermissionRoute } from "../../guards/PermissionRoute";
import { MainLayout } from "../../layout/main-layout";
import { getSchedule } from "../../features/scheduling/api/getSchedule";

export default function SchedulePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["schedule"],
    queryFn: getSchedule,
  });

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Failed to load schedule</p>;

  console.log(data);

  return (
    <MainLayout>

      <h1>Schedule</h1>

      <PermissionRoute permissions={[PERMISSIONS.SCHEDULE_WRITE]}>
        <button>Add Appointment</button>
      </PermissionRoute>

      <PermissionRoute permissions={[PERMISSIONS.SCHEDULE_READ]}>
        <p>Read</p>
      </PermissionRoute>
    </MainLayout>
  );
}