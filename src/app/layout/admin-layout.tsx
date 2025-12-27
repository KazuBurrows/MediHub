import { MainLayout } from "./main-layout";
import { PermissionRoute } from "../guards/PermissionRoute";
import { PERMISSIONS } from "../config/permissions";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <PermissionRoute permissions={[PERMISSIONS.ADMIN_PANEL]}>
      <MainLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-red-600">Admin Panel</h1>
        </div>

        {children}
      </MainLayout>
    </PermissionRoute>
  );
}