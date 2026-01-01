import { PERMISSIONS } from "../../config/permissions";
import { PermissionRoute } from "../../guards/PermissionRoute";
import { MainLayout } from "../../layout/main-layout";
import { useSchedule } from "../../features/scheduling/api/getSchedule";

export default function SchedulePage() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["schedule"],
  //   queryFn: getSchedule,
  // });

  const { schedule, loading } = useSchedule();
  console.log(schedule)
  console.log(loading)

  // if (isLoading) return <p>Loading…</p>;
  // if (error) return <p>Failed to load schedule</p>;

  // console.log(data);

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