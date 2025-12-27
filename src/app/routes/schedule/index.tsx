import { PERMISSIONS } from "../../config/permissions";
import { PermissionRoute } from "../../guards/PermissionRoute";
import { MainLayout } from "../../layout/main-layout";

export default function SchedulePage() {
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