export type User = {
  /** Unique Microsoft Entra object ID */
  id: string;

  /** Display name from Entra (e.g., "Dr. Kazuki Tanaka") */
  name: string;

  email: string;

  /** App roles assigned in Entra (e.g., "Admin", "Scheduler", "Executive") */
  roles: string[];

  /** Security groups or dynamic groups from Entra */
  groups: string[];

  /** App-level permissions derived from roles */
  permissions: string[];

  /** Optional: user preferences stored in your backend */
  preferences?: {
    theme?: "light" | "dark";
    defaultFacilityId?: string;
    dashboardLayout?: string;
  };
};