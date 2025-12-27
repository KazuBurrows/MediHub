// src/config/permissions.ts
export const PERMISSIONS = {
  SCHEDULE_READ: "schedule.read",
  SCHEDULE_WRITE: "schedule.write",
  USER_MANAGE: "users.manage",
  FACILITY_MANAGE: "facility.manage",
  DASHBOARD_VIEW: "dashboard.view",
  ADMIN_PANEL: "panel.read",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const ROLE_PERMISSIONS: Record<string, Permission[]> = {
  Admin: [
    PERMISSIONS.SCHEDULE_READ,
    PERMISSIONS.SCHEDULE_WRITE,
    PERMISSIONS.USER_MANAGE,
    PERMISSIONS.FACILITY_MANAGE,
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.ADMIN_PANEL,
  ],
  Viewer: [PERMISSIONS.SCHEDULE_READ],
};