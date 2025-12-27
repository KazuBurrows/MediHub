import { PERMISSIONS } from "../../config/permissions";
import { PermissionRoute } from "../../guards/PermissionRoute";
import { DashboardLayout } from "../../layout/dashboard-layout";
import { Tile } from "../../shared/components/ui/tile";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <h2>Welcome to MediHub Dashboard</h2>
            <PermissionRoute permissions={[PERMISSIONS.DASHBOARD_VIEW]}>
                <Tile
                    to="/schedule"
                    title="Schedule"
                    description="Manage appointments and rosters"
                />
            </PermissionRoute>
        </DashboardLayout>
    );
}