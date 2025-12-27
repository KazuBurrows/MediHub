import { JSX } from "react";
import { useAuth } from "../providers/auth-provider";
import { Navigate } from "react-router-dom";

export function PermissionRoute({
  children,
  permissions,
}: {
  children: JSX.Element;
  permissions: string[];
}) {
  const { permissions: userPermissions, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  const allowed = permissions.every((p) => userPermissions.includes(p));
  if (!allowed) return null;

  return children;
}