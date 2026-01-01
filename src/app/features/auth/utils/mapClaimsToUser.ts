import { ROLE_PERMISSIONS } from "../../../config/permissions";
import { User } from "../../../shared/types/user";

export function mapClaimsToUser(claims: any): User {
  const roles: string[] = Array.isArray(claims.roles)
    ? claims.roles
    : [];

  const groups: string[] = Array.isArray(claims.groups)
    ? claims.groups
    : [];

  return {
    id: claims.oid,
    name: claims.name,
    email: claims.email || claims.preferred_username,
    roles,
    groups,
    permissions: derivePermissions(roles),
  };
}

function derivePermissions(roles: string[]) {
  return roles.flatMap(role => ROLE_PERMISSIONS[role] ?? []);
}
