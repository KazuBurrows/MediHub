import { PERMISSIONS } from "../../config/permissions";
import { PermissionRoute } from "../../guards/PermissionRoute";

export default function SchedulePage() {
  return (
    <div>
      <h1>Schedule</h1>

      <PermissionRoute permissions={[PERMISSIONS.SCHEDULE_WRITE]}>
        <button>Add Appointment</button>
      </PermissionRoute>

      <PermissionRoute permissions={[PERMISSIONS.SCHEDULE_READ]}>
        <p>Read</p>
      </PermissionRoute>
    </div>
  );
}