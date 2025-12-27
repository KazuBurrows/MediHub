export type AuthContextValue = {
  user: any | null;
  isAuthenticated: boolean;
  roles: string[];
  permissions: string[];
  loading: boolean;
};