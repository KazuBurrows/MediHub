import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/auth-provider";
import { JSX } from "react";

export function RoleRoute({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: string[];
}) {

  const { roles: userRoles, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  const hasRole = roles.some(r => userRoles.includes(r));
  if (!hasRole) {
    return <Navigate to="/403" replace />;
  }

  return children;
}