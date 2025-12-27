import { useAuth } from "../../../providers/auth-provider";

export function useUser() {
  const { user, roles, permissions, isAuthenticated, loading } = useAuth();

  return {
    user,
    roles,
    permissions,
    isAuthenticated,
    loading,
  };
}