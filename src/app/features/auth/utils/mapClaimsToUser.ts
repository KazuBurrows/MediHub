import { ROLE_PERMISSIONS } from "../../../config/permissions";
import { User } from "../../../shared/types/user";

export function mapClaimsToUser(claims: any): User {
  return {
    id: claims.oid,
    name: claims.name,
    email: claims.email,
    roles: claims.roles || [],
    groups: claims.groups || [],
    permissions: derivePermissions(claims.roles),
  };
}

function derivePermissions(roles: string[]) {
  return roles.flatMap((role) => ROLE_PERMISSIONS[role] || []);
}
